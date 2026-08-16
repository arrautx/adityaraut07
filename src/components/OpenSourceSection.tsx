"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PrState = "merged" | "open" | "closed";

interface Contribution {
  title: string;
  repo: string;
  url: string;
  state: PrState;
}

const GITHUB_USER = "arrautx";

// Semantic status color (same exception as Live/Building project dots)
const STATE_DOT: Record<PrState, string> = {
  merged: "bg-green-500",
  open: "bg-amber-500",
  closed: "bg-zinc-500",
};

const FILTERS: { key: PrState; label: string }[] = [
  { key: "merged", label: "Merged" },
  { key: "open", label: "Open" },
  { key: "closed", label: "Closed" },
];

function repoAvatar(repo: string) {
  const owner = repo.split("/")[0];
  return `https://github.com/${owner}.png?size=96`;
}

export default function OpenSourceSection({
  showAll = false,
}: {
  showAll?: boolean;
}) {
  const [filter, setFilter] = useState<PrState>("merged");
  const [items, setItems] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(false);
      try {
        const queries: [PrState, string][] = [
          ["merged", "is:merged"],
          ["open", "is:open"],
          ["closed", "is:closed+is:unmerged"],
        ];
        const results = await Promise.all(
          queries.map(async ([state, qualifier]) => {
            const res = await fetch(
              `https://api.github.com/search/issues?q=author:${GITHUB_USER}+type:pr+${qualifier}&sort=updated&per_page=${showAll ? 30 : 10}`,
            );
            if (!res.ok) throw new Error("GitHub API request failed");
            const data = await res.json();
            return (data.items ?? []).map(
              (item: {
                title: string;
                html_url: string;
                repository_url: string;
              }): Contribution => ({
                title: item.title,
                url: item.html_url,
                repo: item.repository_url.replace(
                  "https://api.github.com/repos/",
                  "",
                ),
                state,
              }),
            );
          }),
        );
        setItems(results.flat());
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [showAll]);

  const matching = items.filter((item) => item.state === filter);
  const visible = showAll ? matching : matching.slice(0, 4);
  const counts = {
    merged: items.filter((i) => i.state === "merged").length,
    open: items.filter((i) => i.state === "open").length,
    closed: items.filter((i) => i.state === "closed").length,
  } as Record<PrState, number>;

  return (
    <section>
      <div
        className={`flex flex-wrap items-center gap-x-4 gap-y-3 mb-5 ${showAll ? "justify-start" : "justify-between"}`}
      >
        {!showAll && (
          <h2
            className="text-foreground text-xl sm:text-2xl leading-none tracking-wide"
            style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
          >
            Open Source Contributions
          </h2>
        )}

        <div
          className="flex items-center gap-1"
          role="tablist"
          aria-label="Filter contributions by state"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={`min-h-9 rounded-full px-3.5 text-xs font-medium transition-colors inline-flex items-center ${
                filter === key
                  ? "bg-foreground text-background"
                  : "text-dim-foreground hover:text-muted-foreground"
              }`}
            >
              {label}
              <span
                className={`ml-1.5 tabular-nums ${filter === key ? "text-muted-foreground" : "text-dim-foreground"}`}
              >
                {loading ? "" : counts[key]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {loading && (
          <p className="rounded-[10px] border border-border bg-card/90 px-4 py-6 text-sm text-dim-foreground text-center">
            Loading contributions…
          </p>
        )}

        {error && (
          <p className="rounded-[10px] border border-border bg-card/90 px-4 py-6 text-sm text-dim-foreground text-center">
            Couldn&apos;t load contributions right now.
          </p>
        )}

        {!loading && !error && visible.length === 0 && (
          <p className="rounded-[10px] border border-border bg-card/90 px-4 py-6 text-sm text-dim-foreground text-center">
            No {filter} pull requests yet.
          </p>
        )}

        {visible.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3.5 py-2.5 min-h-11 rounded-[10px] border border-border bg-card/90 hover:bg-accent/90 hover:border-border-strong transition-all group"
          >
            <div className="w-8 h-8 rounded-[8px] border border-border bg-card overflow-hidden shrink-0">
              <img
                src={repoAvatar(item.repo)}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full shrink-0 ${STATE_DOT[item.state]}`}
                />
                <p className="text-sm font-medium text-foreground truncate group-hover:text-foreground transition-colors">
                  {item.title}
                </p>
              </div>
              <p className="text-xs text-dim-foreground mt-px truncate pl-4">
                {item.repo}
              </p>
            </div>
          </a>
        ))}
      </div>

      {!showAll && !loading && !error && items.length > 0 && (
        <div className="flex justify-center mt-6">
          <Link
            href="/contributions"
            className="inline-flex items-center gap-2 min-h-11 rounded-lg border border-border bg-card text-muted-foreground text-sm font-medium px-5 py-2.5 hover:bg-accent transition-all duration-200"
          >
            See all contributions
            <ArrowUpRight size={12} />
          </Link>
        </div>
      )}
    </section>
  );
}

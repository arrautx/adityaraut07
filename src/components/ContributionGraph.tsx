"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

// ── config ────────────────────────────────────────────────────────────────────
const GITHUB_USER = "arrautx";

// 5-step intensity ramps: dark gray → white in dark mode,
// light gray → charcoal in light mode (GitHub-style).
const DARK_COLORS = [
  "#18181b",
  "#27272a",
  "#3f3f46",
  "#52525b",
  "#71717a",
] as const;
const LIGHT_COLORS = [
  "#e8e8ea",
  "#d4d4d8",
  "#a1a1aa",
  "#71717a",
  "#3f3f46",
] as const;

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

// ── types ─────────────────────────────────────────────────────────────────────
interface RawDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}
interface Day extends RawDay {
  empty?: boolean;
}
interface ApiResponse {
  contributions: RawDay[];
  total: Record<string, number>;
}
interface MonthLabel {
  weekIndex: number;
  label: string;
}

// ── helpers ───────────────────────────────────────────────────────────────────
function buildWeeks(contributions: RawDay[]): Day[][] {
  if (!contributions.length) return [];
  const map: Record<string, RawDay> = {};
  contributions.forEach((d) => (map[d.date] = d));

  const start = new Date(contributions[0].date);
  const end = new Date(contributions[contributions.length - 1].date);
  const cur = new Date(start);
  cur.setDate(cur.getDate() - cur.getDay()); // rewind to Sunday

  const days: Day[] = [];
  while (cur <= end) {
    const iso = cur.toISOString().slice(0, 10);
    days.push(map[iso] ?? { date: iso, count: 0, level: 0, empty: true });
    cur.setDate(cur.getDate() + 1);
  }

  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  return weeks;
}

function getMonthLabels(weeks: Day[][]): MonthLabel[] {
  const labels: MonthLabel[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const first = week.find((d) => d?.date);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (m !== lastMonth) {
      labels.push({ weekIndex: wi, label: MONTH_NAMES[m] });
      lastMonth = m;
    }
  });
  return labels;
}

// ── component ─────────────────────────────────────────────────────────────────
export default function ContributionGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [weeks, setWeeks] = useState<Day[][]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isLight = mounted && resolvedTheme === "light";
  const COLORS = isLight ? LIGHT_COLORS : DARK_COLORS;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`,
        );
        if (!res.ok) throw new Error("User not found");
        const data: ApiResponse = await res.json();
        setWeeks(buildWeeks(data.contributions));
        setTotal(data.contributions.reduce((s, d) => s + d.count, 0));
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const monthLabels = getMonthLabels(weeks);
  const CELL = 9;
  const GAP = 2.3;
  const COL = CELL + GAP;

  return (
    <section
      style={{
        width: "100%",
        background: "var(--background)",
        borderRadius: 10,
        padding: "12px",
        fontFamily: "Inter, sans-serif",
        color: "var(--muted-foreground)",
        boxSizing: "border-box",
      }}
    >
      {loading && (
        <p
          style={{
            fontSize: 13,
            color: "var(--dim-foreground)",
            padding: "32px 0",
            textAlign: "center",
          }}
        >
          Loading contributions…
        </p>
      )}
      {error && (
        <p style={{ fontSize: 13, color: "var(--muted-foreground)" }}>Error: {error}</p>
      )}

      {!loading && !error && (
        <div style={{ width: "100%", overflowX: "auto" }}>
          <div style={{ display: "inline-block", minWidth: "max-content" }}>
            {/* month labels — anchored to their week column; labels closer
                than 4 weeks to the previous one are skipped so text never overlaps */}
            <div style={{ position: "relative", height: 16, marginBottom: 4 }}>
              {(() => {
                const items: React.ReactNode[] = [];
                let lastShown = -Infinity;
                monthLabels.forEach((ml, i) => {
                  if (ml.weekIndex - lastShown < 4) return;
                  lastShown = ml.weekIndex;
                  items.push(
                    <span
                      key={i}
                      style={{
                        position: "absolute",
                        left: ml.weekIndex * COL,
                        fontSize: 11,
                        color: "var(--dim-foreground)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {ml.label}
                    </span>,
                  );
                });
                return items;
              })()}
            </div>

            {/* week grid */}
            <div style={{ display: "flex" }}>
              {/* weeks */}
              <div style={{ display: "flex", gap: GAP }}>
                {weeks.map((week, wi) => (
                  <div
                    key={wi}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: GAP,
                    }}
                  >
                    {Array.from({ length: 7 }).map((_, di) => {
                      const day = week[di];
                      const bg =
                        !day || day.empty
                          ? COLORS[0] // padding days match zero-contribution days
                          : COLORS[Math.min(day.level, 4)];
                      return (
                        <div
                          key={di}
                          style={{
                            width: CELL,
                            height: CELL,
                            borderRadius: 2,
                            background: bg,
                            cursor: day && !day.empty ? "pointer" : "default",
                          }}
                          onMouseEnter={(e) => {
                            if (!day || day.empty) return;
                            const cnt = day.count;
                            const date = new Date(day.date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            );
                            setTooltip({
                              text:
                                cnt === 0
                                  ? `No contributions on ${date}`
                                  : `${cnt} contribution${cnt !== 1 ? "s" : ""} on ${date}`,
                              x: e.clientX + 12,
                              y: e.clientY - 34,
                            });
                          }}
                          onMouseMove={(e) =>
                            setTooltip((t) =>
                              t
                                ? { ...t, x: e.clientX + 12, y: e.clientY - 34 }
                                : t,
                            )
                          }
                          onMouseLeave={() => setTooltip(null)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
                minWidth: "100%",
              }}
            >
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 12,
                  color: "var(--dim-foreground)",
                  textDecoration: "none",
                }}
              >
                {total.toLocaleString()} contributions in the last year
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 11,
                  color: "var(--dim-foreground)",
                }}
              >
                Less
                {COLORS.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: CELL,
                      height: CELL,
                      borderRadius: 2,
                      background: c,
                    }}
                  />
                ))}
                More
              </div>
            </div>
          </div>
        </div>
      )}

      {/* tooltip */}
      {tooltip && (
        <div
          ref={tooltipRef}
          style={{
            position: "fixed",
            left: tooltip.x,
            top: tooltip.y,
            background: isLight ? "#ffffff" : "#18181b",
            border: `0.5px solid ${isLight ? "#e4e4e7" : "#3f3f46"}`,
            color: isLight ? "#18181b" : "#f4f4f5",
            borderRadius: 6,
            padding: "5px 10px",
            fontSize: 12,
            pointerEvents: "none",
            zIndex: 9999,
            whiteSpace: "nowrap",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}

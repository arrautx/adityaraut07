import Link from "next/link";
import OpenSourceSection from "@/components/OpenSourceSection";

export default function ContributionsPage() {
  return (
    <main>
      {/* ── Header ── */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-5 pt-16 sm:pt-20 pb-8">
        <Link
          href="/"
          className="
            inline-flex
            items-center
            gap-2
            min-h-11
            text-sm
            text-dim-foreground
            hover:text-foreground
            transition-colors
            mb-6
            "
        >
          ← Home
        </Link>

        <p className="text-dim-foreground text-xs uppercase tracking-[0.2em] font-medium mb-1.5">
          Open Source
        </p>

        <h1
          className="text-3xl sm:text-4xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Contributions
        </h1>

        <p className="text-dim-foreground text-sm leading-relaxed mt-3 max-w-prose">
          Pull requests I&apos;ve opened in open source repositories — filter
          them by state.
        </p>
      </div>

      {/* ── List ── */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-5 pb-14">
        <OpenSourceSection showAll />
      </div>
    </main>
  );
}

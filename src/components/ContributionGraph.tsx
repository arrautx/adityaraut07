"use client";

import { cloneElement, useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import { useTheme } from "next-themes";

const GITHUB_USER = "arrautx";

/* Monochrome intensity ramps — the same zinc palette the portfolio already
   uses, so the graph reads as part of the design system instead of the
   default GitHub green. */
const CAL_THEME = {
  light: ["#e8e8ea", "#d4d4d8", "#a1a1aa", "#71717a", "#3f3f46"],
  dark: ["#18181b", "#27272a", "#3f3f46", "#52525b", "#71717a"],
};

export default function ContributionGraph() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isLight = mounted && resolvedTheme === "light";

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section>
      {/* Section header — same pattern as the other sections:
          serif heading + dashed rule + uppercase counter. */}
      <div className="flex items-center gap-0 sm:gap-2">
        <h2
          className="text-foreground text-xl sm:text-2xl leading-none tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Contributions
        </h2>

      </div>
      {/* Contribution graph */}
      <div className="mt-5 w-full overflow-x-auto">
        <div className="mx-auto w-fit">
          {mounted && (
            <>
              <GitHubCalendar
                username={GITHUB_USER}
                colorScheme={resolvedTheme === "light" ? "light" : "dark"}
                blockSize={isMobile ? 6 : 10}
                blockMargin={isMobile ? 2 : 3}
                fontSize={isMobile ? 10 : 12}
                theme={CAL_THEME}
                style={{ color: "var(--foreground)" }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                renderBlock={(block: any, activity: any) =>
                  cloneElement(block, {
                    "data-tooltip-id": "gh-contrib-tooltip",
                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                  })
                }
              />
              <Tooltip
                id="gh-contrib-tooltip"
                style={{
                  backgroundColor: isLight ? "#ffffff" : "#18181b",
                  color: isLight ? "#18181b" : "#f4f4f5",
                  border: isLight
                    ? "1px solid #e4e4e7"
                    : "1px solid #3f3f46",
                  borderRadius: "6px",
                  padding: "5px 10px",
                  fontSize: "12px",
                  opacity: 1,
                }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

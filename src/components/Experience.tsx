"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    company: "Open Source Contributions",
    role: "Full Stack Developer",
    duration: "May 2025 – Present",
    image: "/github.png",
    remote: true,
  },
  {
    company: "KodNest Technology",
    role: "Full Stack Developer Intern",
    duration: "Aug 2025 – Apr 2026",
    image: "/KodNest.jpg",
    remote: true,
  },
  {
    company: "Freelance",
    role: "Freelance",
    duration: "Nov 2025 – Nov 2025",
    image: "/upwork.png",
    remote: true,
  },
];

export default function Experience() {
  return (
    <section>
      {/* Section header — same left edge and heading typography as every
          other section; a thin dashed rule fills the space between the
          heading and the index counter on the right. */}
      <div className="flex items-center gap-4 sm:gap-5">
        <h2
          className="text-foreground text-xl sm:text-2xl leading-none tracking-wide whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
        >
          Experience
        </h2>

        <span
          aria-hidden="true"
          className="h-px min-w-6 flex-1 border-t border-dashed border-border-strong"
        />

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-dim-foreground whitespace-nowrap">
          02 Experiences
        </span>
      </div>

      {/* Rows — same row rhythm as the rest of the portfolio
          (rounded-[10px], px-3.5, min-h-11, gap-2) with a subtle
          dashed border instead of a solid card border. */}
      <div className="mt-5 flex flex-col gap-2">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            className="flex items-center gap-3 rounded-[10px] border border-dashed border-border bg-card/90 px-3.5 py-3 min-h-11 transition-all hover:border-border-strong hover:bg-accent/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            {/* Logo — same thumbnail treatment used across the portfolio */}
            <div className="size-10 rounded-[10px] border border-border bg-card overflow-hidden shrink-0">
              <img
                src={exp.image}
                alt={exp.company}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>

            {/* Content and date share one wrapping grid, so on mobile the
                date drops below the role — aligned with the content block,
                never cramped. */}
            <div className="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-3 gap-y-1.5">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="truncate text-sm sm:text-base font-semibold text-foreground">
                    {exp.company}
                  </p>
                  <ExternalLink
                    size={12}
                    aria-hidden="true"
                    className="shrink-0 text-dim-foreground"
                  />
                </div>

                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                  <p className="truncate text-sm text-muted-foreground">{exp.role}</p>

                  {exp.remote && (
                    <span className="shrink-0 rounded-sm border border-border bg-card-inset px-2 py-px text-xs text-muted-foreground">
                      Remote
                    </span>
                  )}
                </div>
              </div>

              <p className="inline-flex shrink-0 items-center gap-1.5 text-xs text-dim-foreground tabular-nums">
                <Calendar
                  size={12}
                  aria-hidden="true"
                  className="shrink-0"
                />
                {exp.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Same centered footer button pattern as Projects / Open Source */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 flex justify-center"
      >
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 min-h-11 rounded-lg border border-border bg-card text-muted-foreground text-sm font-medium px-5 py-2.5 hover:bg-accent transition-all duration-200"
        >
          View all experience
          <ArrowUpRight size={12} />
        </Link>
      </motion.div>
    </section>
  );
}

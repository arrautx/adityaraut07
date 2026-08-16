"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const experiences = [
  {
    company: "KodNest",
    role: "Full Stack Developer Intern",
    duration: "Aug, 2025 - May, 2026",
    location: "Bangalore, India · Remote",
    image: "./KodNest.jpg",
  },
  {
    company: "Personal Work",
    role: "Freelance",
    duration: "Nov, 2025 - Nov, 2025",
    location: "Bangalore, India · Remote",
    image: "./Freelance.jpg",
  },
];

export default function Experience() {
  return (
    <div>
      <div className="relative flex flex-col gap-5 rounded-xl border border-border bg-card/90 p-4 sm:p-5">
        {/* vertical rail connecting the entries */}
        <div
          aria-hidden="true"
          className="absolute left-[41px] top-6 bottom-6 w-px bg-accent"
        />

        {experiences.map((exp) => (
          <div key={exp.company} className="relative flex items-start gap-4">
            <div className="relative z-10 size-10 rounded-[10px] border border-border bg-card-inset overflow-hidden shrink-0">
              <img
                src={exp.image}
                alt={exp.company}
                loading="lazy"
                decoding="async"
                className="size-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                <p className="text-base font-medium text-foreground truncate">
                  {exp.company}
                  <span className="text-dim-foreground font-normal">
                    {" "}
                    · {exp.role}
                  </span>
                </p>

                <p className="text-sm text-dim-foreground shrink-0">{exp.duration}</p>
              </div>

              <p className="text-sm text-dim-foreground mt-1">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 min-h-11 rounded-lg border border-border bg-card text-muted-foreground text-sm font-medium px-5 py-2.5 hover:bg-accent transition-all duration-200"
        >
          View all experience
          <ArrowUpRight size={12} />
        </Link>
      </div>
    </div>
  );
}

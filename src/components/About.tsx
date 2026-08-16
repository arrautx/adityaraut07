export default function AboutSection() {
  return (
    <section>
      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="flex gap-2.5">
          {/* <span className="select-none font-mono text-[11px] leading-[1.9] text-[#444]">
            01
          </span> */}
          <span>
            I love to <span className="font-medium text-foreground">build</span>{" "}
            and <span className="font-medium text-foreground">learn</span>,
            currently with{" "}
            {[
              {
                label: "Java",
                href: "https://www.java.com/",
                icon: (
                  <svg viewBox="0 0 128 128" className="size-3">
                    <path
                      fill="#f89820"
                      d="M76.3 96.5c0 7.4-17.3 13.4-38.6 13.4S-.9 103.9-.9 96.5c0-6.8 14.2-12.4 32.6-13.3-11.1 2-19 6.1-19 10.9 0 6.6 14.4 12 32.2 12s32.2-5.4 32.2-12c0-4.6-7-8.6-17.8-10.6 14.7 1.1 26 6.3 26 13z"
                    />
                    <path
                      fill="#5382a1"
                      d="M55.7 16.5s10.5 10.5-10 26.6c-16.5 13-3.8 20.4 0 28.9-9.8-8.8-17-16.5-12.2-23.7 7.1-10.5 26.7-15.6 22.2-31.8z"
                    />
                    <path
                      fill="#5382a1"
                      d="M71.5 55.5c13.9 8 7.5 13.9 0 16.3-14.3 4.6-59.6 6-72.2.2-4.5-2.1 3.9-5.1 6.5-5.6 2.7-.6 4.2-.5 4.2-.5-4.8-3.4-31.2 6.7-13.4 9.6 48.5 7.9 88.4-3.6 74.9-20z"
                    />
                  </svg>
                ),
              },

              {
                label: "TypeScript",
                href: "https://www.typescriptlang.org/",
                icon: (
                  <svg viewBox="0 0 128 128" className="size-3">
                    <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
                    <path
                      fill="#007acc"
                      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
                    />
                  </svg>
                ),
              },
              {
                label: "Next.js",
                href: "https://nextjs.org/",
                icon: (
                  <svg viewBox="0 0 128 128" className="size-3">
                    <circle cx="64" cy="64" r="64" />
                    <path
                      fill="url(#next-a)"
                      d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 006.763-5.209z"
                    />
                    <path
                      fill="url(#next-b)"
                      d="M81.778 38.4h8.533v51.2h-8.533z"
                    />
                    <defs>
                      <linearGradient
                        id="next-a"
                        x1="109"
                        x2="144.5"
                        y1="116.5"
                        y2="160.5"
                        gradientTransform="scale(.71111)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="next-b"
                        x1="121"
                        x2="120.799"
                        y1="54"
                        y2="106.875"
                        gradientTransform="scale(.71111)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
              },
              {
                label: "PostgreSQL",
                href: "https://postgresql.org/",
                icon: (
                  <svg viewBox="0 0 128 128" className="size-3">
                    <path
                      fill="#336791"
                      d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.543-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
                    />
                  </svg>
                ),
              },
            ]
              .map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/skill relative inline-flex items-baseline gap-1 font-semibold text-foreground underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-muted-foreground"
                >
                  <span className="inline-block size-3 shrink-0 translate-y-0.5 opacity-60 transition-opacity group-hover/skill:opacity-100">
                    {icon}
                  </span>
                  <span>{label}</span>
                </a>
              ))
              .reduce((acc: React.ReactNode[], el, i, arr) => {
                acc.push(el);
                if (i < arr.length - 1)
                  acc.push(i === arr.length - 2 ? ", and " : ", ");
                return acc;
              }, [])}
            .
          </span>
        </p>

        <p className="flex gap-2.5">
          {/* <span className="select-none font-mono text-[11px] leading-[1.9] text-[#444]">
            02
          </span> */}
          <span>
            Outside of code, I spend my time gaming — leveling up in virtual worlds while leveling up my development skills in the real one.
          </span>
        </p>
      </div>
    </section>
  );
}

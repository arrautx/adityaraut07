import Link from "next/link";

const DRIVE_PREVIEW_URL =
  "https://drive.google.com/file/d/1KcQDmrq0Arfzsa_etLZjpWA8eu2HfVTU/preview";

const YOUR_NAME = "Aditya Raut"; // Replace with your own name

export default function ResumePage() {
  return (
    <main id="main-content">
      {/* ── Header ── */}
      <div>
        <div>
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-5 animate-fade-in-blur pt-20 sm:pt-24 pb-6">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                min-h-11
                text-sm
                text-dim-foreground
                hover:text-muted-foreground
                transition-colors
                mb-6
                "
            >
              ← Home
            </Link>
            <p
              className="text-dim-foreground text-[11px] uppercase tracking-[0.2em] font-normal mb-1.5"
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                transition:
                  "opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              CV
            </p>

            <h1
              className="text-3xl sm:text-4xl tracking-tight text-foreground"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Resume
            </h1>

            <p className="text-dim-foreground text-sm leading-relaxed mt-3 max-w-prose">
              A concise snapshot of what I've built and where I've worked.
            </p>
          </div>
        </div>

        {/* ── PDF Preview ── */}
        <div className="animate-fade-in-blur">
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-5 pt-2 pb-10">
            <div className="overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-800">
              <iframe
                src={DRIVE_PREVIEW_URL}
                className="min-h-[75vh] w-full"
                title="Resume PDF"
                allow="autoplay"
              />
            </div>
          </div>
        </div>

        {/* ── Footer watermark ── */}
        <footer
          className="relative w-full overflow-hidden min-h-[30vh] sm:min-h-[36vh] md:min-h-[42vh] lg:min-h-[46vh]"
          style={{ opacity: 1 }}
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2 -translate-x-1/2
              -bottom-4 sm:-bottom-10 md:-bottom-16 lg:-bottom-20
              select-none
              whitespace-nowrap
              font-normal
              leading-none
              text-neutral-900 dark:text-neutral-100
              opacity-[0.06] dark:opacity-[0.09]
              text-[36vw] sm:text-[30vw] md:text-[24vw] lg:text-[20vw]
              blur-[0.5px]
              [text-shadow:0_0_40px_rgba(0,0,0,0.18)]
              dark:[text-shadow:0_0_50px_rgba(255,255,255,0.12)]
            "
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            {YOUR_NAME}
          </div>
        </footer>
      </div>
    </main>
  );
}

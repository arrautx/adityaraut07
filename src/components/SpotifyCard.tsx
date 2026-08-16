"use client";

type SpotifyCardProps = {
  title: string;
  artist: string;
  albumImage: string;
  songUrl: string;
};

export default function SpotifyCard({
  title,
  artist,
  albumImage,
  songUrl,
}: SpotifyCardProps) {
  return (
    <div className="w-full max-w-[430px]">
      <div className="flex items-center gap-3 rounded-2xl border border-neutral-800/80 bg-[#121212] px-3.5 py-2 transition-all duration-300 hover:border-neutral-700 hover:bg-[#171717]">
        {/* Album */}
        <div
          className="relative h-14 w-14 shrink-0 animate-spin-slow"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-700 via-neutral-900 to-black shadow-lg"></div>

          <div className="absolute inset-[4px] overflow-hidden rounded-full">
            <img
              src={albumImage}
              alt="Album art"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="absolute inset-0 rounded-full mix-blend-screen"
            style={{
              background:
                "conic-gradient(transparent 0%, rgba(255,255,255,0.06) 12%, transparent 24%, rgba(255,255,255,0.03) 36%, transparent 48%, rgba(255,255,255,0.08) 60%, transparent 72%, rgba(255,255,255,0.04) 84%, transparent 100%)",
            }}
          />

          <div className="absolute inset-0 rounded-full ring-1 ring-black/40"></div>
        </div>

        {/* Info */}
        <div className="flex min-w-0 flex-1 flex-col leading-tight">
          <span className="mb-1 flex items-center gap-1.5 text-[11px] text-dim-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Listening to
          </span>

          <a
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="overflow-hidden text-[15px] font-semibold text-neutral-100 leading-none">
              <span className="block truncate group-hover:underline">
                {title}
              </span>
            </div>
          </a>

          <div className="mt-1 overflow-hidden text-[12px] text-neutral-400">
            <span className="block truncate">{artist}</span>
          </div>
        </div>

        {/* Spotify */}
        <a
          href={songUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open in Spotify"
          className="shrink-0 text-dim-foreground transition-all duration-200 hover:scale-110 hover:text-green-500"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

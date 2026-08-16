type GamingCardProps = {
  artUrl: string;
  logoUrl: string;
  logoAlt: string;
  href: string;
  title?: string;
  isActive?: boolean;
};

export default function GamingCard({
  artUrl,
  logoUrl,
  logoAlt,
  href,
  title,    
  isActive = false,
}: GamingCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-[70px] w-full max-w-[430px] items-center overflow-hidden rounded-sm border border-border bg-card-inset/80 backdrop-blur-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_24px_rgba(0,0,0,0.6)] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/5 before:content-['']"
    >
      {/* Background */}
      <img
        src={artUrl}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[center_7%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-3 sm:gap-4 px-3 sm:px-4">
        <div className="rounded-md bg-white p-1 shrink-0">
          <img
            src={logoUrl}
            alt={logoAlt}
            className="h-9 sm:h-12 w-auto max-w-[130px] object-contain"
          />
        </div>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{title}</p>

          <p className="text-xs text-muted-foreground">Currently Playing</p>
           <div className="flex items-center gap-2">
            <span
                className={`h-2 w-2 rounded-full ${
                isActive ? "bg-status-live" : "bg-status-idle"
                }`}
            />
            <p className="text-xs text-muted-foreground">
                {isActive ? "Currently Playing" : "Offline"}
            </p>
            </div>
        </div>
      </div>
    </a>
  );
}

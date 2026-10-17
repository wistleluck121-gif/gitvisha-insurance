export function RiskOrbit() {
  return (
    <div
      aria-hidden="true"
      className="relative isolate hidden aspect-square w-full max-w-md select-none overflow-hidden rounded-3xl lg:block"
    >
      {/* pale mint/cyan glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,color-mix(in_oklab,var(--primary)_16%,transparent),color-mix(in_oklab,var(--accent)_60%,transparent)_45%,transparent_75%)]" />

      {/* thin irregular concentric orbit rings */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full">
        <g fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="1">
          <ellipse cx="200" cy="200" rx="178" ry="160" className="orbit-spin-slow" style={{ transformOrigin: "200px 200px" }} />
          <ellipse cx="200" cy="204" rx="142" ry="128" stroke="var(--ink)" strokeOpacity="0.18" className="orbit-spin-rev" style={{ transformOrigin: "200px 204px" }} />
          <ellipse cx="198" cy="198" rx="108" ry="96" strokeOpacity="0.5" className="orbit-spin" style={{ transformOrigin: "198px 198px" }} />
          <ellipse cx="202" cy="200" rx="76" ry="68" strokeOpacity="0.6" strokeDasharray="4 6" className="orbit-spin-slow" style={{ transformOrigin: "202px 200px" }} />
        </g>
      </svg>

      {/* central glossy interlocking loop mark */}
      <svg viewBox="0 0 120 120" className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg sm:size-32">
        <defs>
          <linearGradient id="loop-cyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="loop-magenta" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e879c6" />
            <stop offset="1" stopColor="#9d4edd" />
          </linearGradient>
          <linearGradient id="loop-gloss" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="46" cy="60" r="30" fill="none" stroke="url(#loop-cyan)" strokeWidth="14" />
        <circle cx="74" cy="60" r="30" fill="none" stroke="url(#loop-magenta)" strokeWidth="14" strokeOpacity="0.9" />
        <circle cx="46" cy="60" r="30" fill="none" stroke="url(#loop-gloss)" strokeWidth="14" />
        <circle cx="74" cy="60" r="30" fill="none" stroke="url(#loop-gloss)" strokeWidth="14" />
      </svg>

      {/* floating labels */}
      <span className="orbit-float absolute left-[8%] top-[14%] rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
        Coverage structured
      </span>
      <span className="orbit-float-rev absolute bottom-[22%] right-[6%] rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
        Claims supported
      </span>
      <span className="absolute bottom-[6%] left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
        Risk Intelligence
      </span>
    </div>
  );
}

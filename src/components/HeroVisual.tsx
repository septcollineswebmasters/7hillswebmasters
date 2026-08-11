export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-5xl" aria-hidden="true">
      <div className="float-soft absolute -left-2 top-8 h-24 w-24 rounded-full bg-teal/15 blur-2xl md:h-36 md:w-36" />
      <div className="absolute -right-4 bottom-10 h-28 w-28 rounded-full bg-sand/60 blur-2xl md:h-40 md:w-40" />

      <svg
        viewBox="0 0 960 420"
        className="relative h-auto w-full drop-shadow-[0_30px_60px_rgba(18,32,51,0.12)]"
        role="img"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#dceef0" />
            <stop offset="55%" stopColor="#f4f8f7" />
            <stop offset="100%" stopColor="#e4eee8" />
          </linearGradient>
          <linearGradient id="hillA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a9b90" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="hillB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a3f55" />
            <stop offset="100%" stopColor="#122033" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#f2f7f6" stopOpacity="0.92" />
          </linearGradient>
        </defs>

        <rect width="960" height="420" rx="28" fill="url(#sky)" />

        <path
          d="M0 290C90 250 150 210 240 225C330 240 370 295 470 285C570 275 610 210 710 220C810 230 860 280 960 255V420H0V290Z"
          fill="url(#hillA)"
          opacity="0.85"
        />
        <path
          d="M0 330C110 300 170 270 270 280C370 290 410 340 520 330C630 320 670 270 780 280C890 290 930 330 960 320V420H0V330Z"
          fill="url(#hillB)"
          opacity="0.9"
        />

        {/* Seven hill peaks marker */}
        {[180, 260, 340, 420, 500, 580, 660].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={255 - (i % 3) * 10}
            r="4.5"
            fill="#ffffff"
            opacity="0.9"
          />
        ))}

        {/* Analytics panel */}
        <rect x="520" y="58" width="360" height="210" rx="18" fill="url(#panel)" />
        <rect x="520" y="58" width="360" height="210" rx="18" fill="none" stroke="#122033" strokeOpacity="0.08" />
        <text x="544" y="92" fill="#122033" fontSize="16" fontFamily="ui-sans-serif, system-ui" fontWeight="600">
          Conversion health
        </text>
        <text x="544" y="116" fill="#3a4a5c" fontSize="12" fontFamily="ui-sans-serif, system-ui">
          GA4 · GTM · Ads pixels
        </text>

        <path
          className="chart-line"
          d="M560 210 C600 200, 620 170, 650 165 C690 158, 710 190, 740 150 C770 112, 800 130, 840 118"
          fill="none"
          stroke="#0f766e"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="840" cy="118" r="6" fill="#0f766e" />

        <rect x="544" y="228" width="72" height="8" rx="4" fill="#0f766e" opacity="0.85" />
        <rect x="628" y="228" width="52" height="8" rx="4" fill="#122033" opacity="0.2" />
        <rect x="692" y="228" width="64" height="8" rx="4" fill="#c9d5c0" />
        <rect x="768" y="228" width="80" height="8" rx="4" fill="#0f766e" opacity="0.35" />

        <g opacity="0.9">
          <rect x="80" y="78" width="170" height="64" rx="14" fill="#ffffff" fillOpacity="0.88" />
          <text x="98" y="106" fill="#122033" fontSize="13" fontFamily="ui-sans-serif, system-ui" fontWeight="600">
            Tracking accuracy
          </text>
          <text x="98" y="126" fill="#0f766e" fontSize="18" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
            99.2%
          </text>
        </g>
      </svg>
    </div>
  );
}

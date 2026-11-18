const nodes = [
  { x: 300, y: 70, label: "数据" },
  { x: 120, y: 230, label: "本体" },
  { x: 480, y: 230, label: "智能体" },
  { x: 80, y: 90, label: "金融" },
  { x: 520, y: 90, label: "央国企" },
];

export function HeroVisual() {
  return (
    <svg viewBox="0 0 600 420" className="h-auto w-full" role="img" aria-label="统一数据底座与本体智能网络拓扑">
      <defs>
        <radialGradient id="core" cx="40%" cy="35%">
          <stop offset="0%" stopColor="var(--background)" />
          <stop offset="45%" stopColor="color-mix(in oklab, var(--primary) 55%, var(--background))" />
          <stop offset="100%" stopColor="var(--primary)" />
        </radialGradient>
        <radialGradient id="bubble" cx="40%" cy="35%">
          <stop offset="0%" stopColor="var(--background)" />
          <stop offset="100%" stopColor="var(--brand-soft)" />
        </radialGradient>
      </defs>
      {/* base platform */}
      {[150, 120, 90, 60].map((rx, i) => (
        <ellipse key={rx} cx="300" cy="320" rx={rx * 1.8} ry={rx * 0.42} fill="none" stroke="var(--primary)" strokeOpacity={0.12 + i * 0.08} />
      ))}
      <ellipse cx="300" cy="200" rx="250" ry="90" fill="none" stroke="var(--primary)" strokeOpacity=".25" strokeDasharray="2 6" className="spin-slow" />
      {nodes.map((n) => (
        <line key={n.label} x1="300" y1="200" x2={n.x} y2={n.y} stroke="var(--primary)" strokeOpacity=".5" strokeWidth="1.5" className="flow-line" />
      ))}
      <circle cx="300" cy="200" r="40" fill="none" stroke="var(--primary)" className="pulse-ring" />
      <g className="floaty">
        <circle cx="300" cy="200" r="58" fill="url(#core)" />
        <text x="300" y="212" textAnchor="middle" fontSize="34" fontWeight="700" fill="var(--primary-foreground)">AI</text>
      </g>
      {nodes.map((n, i) => {
        const big = i < 3;
        return (
          <g key={n.label} className="floaty" style={{ animationDelay: `${i * 0.6}s` }}>
            <circle cx={n.x} cy={n.y} r={big ? 40 : 22} fill="url(#bubble)" stroke="var(--primary)" strokeOpacity=".35" />
            {big && <circle cx={n.x} cy={n.y - 8} r="10" fill="var(--primary)" />}
            <text x={n.x} y={n.y + (big ? 22 : 4)} textAnchor="middle" fontSize={big ? 13 : 11} fontWeight="600" fill="var(--primary)">{n.label}</text>
          </g>
        );
      })}
      <text x="300" y="400" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--primary)" letterSpacing="3">统一数据底座 · 全链路智能</text>
    </svg>
  );
}

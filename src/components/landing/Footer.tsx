"use client";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Docs", href: "https://docs.loghaven.dev" },
      { label: "Architecture", href: "/#architecture" },
      { label: "Changelog", href: "https://github.com/The-True-Hooha/loghaven/releases" },
      { label: "GitHub", href: "https://github.com/The-True-Hooha/loghaven" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://github.com/The-True-Hooha/loghaven/discussions" },
      { label: "Roadmap", href: "https://github.com/The-True-Hooha/loghaven/projects" },
      { label: "Contributing", href: "https://github.com/The-True-Hooha/loghaven/blob/main/CONTRIBUTING.md" },
      { label: "Security", href: "https://github.com/The-True-Hooha/loghaven/security" },
    ],
  },
  {
    title: "Chains",
    links: [
      { label: "Ethereum", href: "https://docs.loghaven.dev/chains/ethereum" },
      { label: "Solana", href: "https://docs.loghaven.dev/chains/solana" },
      { label: "Stellar", href: "https://docs.loghaven.dev/chains/stellar" },
      { label: "Base", href: "https://docs.loghaven.dev/chains/base" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/The-True-Hooha/loghaven" },
  { label: "X / Twitter", href: "https://x.com/loghaven" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#070B0F",
        borderTop: "1px solid #1E2A35",
        padding: "56px 24px 32px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{ marginBottom: "48px" }}
          className="grid-footer"
        >
          {/* Col 1: Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "#E6E1D8",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#2BFFB0" }}>◈</span>
              LogHaven
            </div>
            <p
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontSize: "0.8125rem",
                color: "#3D4E5E",
                lineHeight: 1.6,
              }}
            >
              Local-first observability runtime.
            </p>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.6875rem",
                  color: "#3D4E5E",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{
                      fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                      fontSize: "0.8125rem",
                      color: "#7A8899",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#E6E1D8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8899")}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1E2A35",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.6875rem",
              color: "#3D4E5E",
            }}
          >
            © 2026 LogHaven · MIT License · Built in public
          </span>

          <div style={{ display: "flex", gap: "16px" }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.6875rem",
                  color: "#3D4E5E",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7A8899")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#3D4E5E")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

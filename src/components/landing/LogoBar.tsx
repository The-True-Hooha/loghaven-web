"use client";

const integrations = [
  {
    name: "Ethereum",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 4L7 16.5l9 5.5 9-5.5L16 4z" fill="#627EEA" opacity="0.9"/>
        <path d="M7 16.5L16 22l9-5.5-9-5.5-9 5.5z" fill="#627EEA" opacity="0.5"/>
        <path d="M16 22v6l9-13-9 7z" fill="#627EEA" opacity="0.7"/>
        <path d="M16 22v6L7 15l9 7z" fill="#627EEA"/>
      </svg>
    ),
  },
  {
    name: "Base",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="16" r="14" fill="#0052FF"/>
        <path d="M16 7C11.03 7 7 11.03 7 16s4.03 9 9 9c4.42 0 8.1-3.2 8.87-7.4H16v-3.2h11.9c.07.52.1 1.05.1 1.6 0 6.63-5.37 12-12 12S4 22.63 4 16 9.37 4 16 4c2.9 0 5.56 1.03 7.62 2.73l-2.27 2.48A8.77 8.77 0 0016 7z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Arbitrum",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="16" r="14" fill="#213147"/>
        <path d="M10 22l6-10 6 10H10z" fill="#28A0F0" opacity="0.9"/>
        <path d="M13 22l3-5 3 5h-6z" fill="white" opacity="0.8"/>
        <rect x="15" y="8" width="2" height="10" rx="1" fill="#28A0F0"/>
      </svg>
    ),
  },
  {
    name: "Optimism",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="16" r="14" fill="#FF0420"/>
        <text x="16" y="21" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="14" fill="white">OP</text>
      </svg>
    ),
  },
  {
    name: "Solana",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect x="4" y="8" width="18" height="3" rx="1.5" fill="#9945FF"/>
        <rect x="10" y="14.5" width="18" height="3" rx="1.5" fill="#9945FF"/>
        <rect x="4" y="21" width="18" height="3" rx="1.5" fill="#9945FF"/>
      </svg>
    ),
  },
  {
    name: "Stellar",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <circle cx="16" cy="16" r="14" fill="#000" stroke="#F5A623" strokeWidth="1"/>
        <path d="M16 6l2.47 7.6H26l-6.18 4.49 2.36 7.27L16 21l-6.18 4.36 2.36-7.27L6 13.6h7.53L16 6z" fill="#F5A623"/>
      </svg>
    ),
  },
  {
    name: "AWS S3",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M16 4L4 10v12l12 6 12-6V10L16 4z" fill="#FF9900" opacity="0.15" stroke="#FF9900" strokeWidth="1.5"/>
        <text x="16" y="20" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="9" fill="#FF9900">S3</text>
      </svg>
    ),
  },
  {
    name: "Cloudflare R2",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M22 20c0 2.2-1.8 4-4 4H9c-2.76 0-5-2.24-5-5 0-2.4 1.7-4.4 4-4.87V14c0-3.31 2.69-6 6-6 2.83 0 5.2 1.96 5.83 4.6C21.06 13.2 22 14.97 22 17v3z" fill="#F6821F" opacity="0.9"/>
        <path d="M26 17c0 1.1-.9 2-2 2h-2v-2c0-2.2-.9-4.18-2.34-5.6.22-.77.34-1.57.34-2.4 0-.34-.02-.67-.06-1H21c2.76 0 5 2.24 5 5v4z" fill="#F6821F" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "MinIO",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect x="4" y="4" width="11" height="24" rx="2" fill="#C72E49"/>
        <rect x="17" y="4" width="11" height="24" rx="2" fill="#C72E49" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "Local FS",
    logo: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect x="4" y="10" width="24" height="16" rx="2" stroke="#2BFFB0" strokeWidth="1.5" fill="none"/>
        <path d="M4 15h24" stroke="#2BFFB0" strokeWidth="1.5"/>
        <circle cx="8" cy="12.5" r="1" fill="#2BFFB0"/>
        <circle cx="12" cy="12.5" r="1" fill="#2BFFB0"/>
        <rect x="8" y="19" width="10" height="2" rx="1" fill="#2BFFB0" opacity="0.5"/>
      </svg>
    ),
  },
];

const doubled = [...integrations, ...integrations, ...integrations];

export default function LogoBar() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid #E8E3DB",
        borderBottom: "1px solid #E8E3DB",
        padding: "32px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "0.58rem",
          color: "#B0BAC4",
          textAlign: "center",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        // Supported chains &amp; integrations
      </p>

      {/* Single scrolling row */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: "120px",
            background: "linear-gradient(to right, #FFFFFF, transparent)",
            zIndex: 2, pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: "120px",
            background: "linear-gradient(to left, #FFFFFF, transparent)",
            zIndex: 2, pointerEvents: "none",
          }}
        />

        <div
          className="marquee-track"
          style={{ display: "flex", alignItems: "center", gap: "0", width: "max-content" }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "9px",
                padding: "6px 28px",
                borderRight: "1px solid #EDE9E2",
                whiteSpace: "nowrap",
                opacity: 0.7,
                transition: "opacity 0.2s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.opacity = "0.7")}
            >
              <span style={{ display: "inline-flex", alignItems: "center", flexShrink: 0 }}>
                {item.logo}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  color: "#1A202C",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

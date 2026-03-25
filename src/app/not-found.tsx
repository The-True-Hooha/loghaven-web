import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        backgroundColor: "#070B0F",
        color: "#E6E1D8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        textAlign: "center",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(43,255,176,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "480px" }}>
        {/* Error code */}
        <p
          style={{
            fontSize: "0.6875rem",
            color: "#3D4E5E",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          // ERROR 404
        </p>

        {/* Big number */}
        <div
          style={{
            fontFamily: "var(--font-display), 'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(72px, 16vw, 128px)",
            lineHeight: 1,
            color: "#2BFFB0",
            letterSpacing: "-0.04em",
            marginBottom: "16px",
          }}
        >
          404
        </div>

        {/* Terminal output */}
        <div
          style={{
            backgroundColor: "#0E1318",
            border: "1px solid #1E2A35",
            borderRadius: "8px",
            padding: "16px 20px",
            marginBottom: "36px",
            textAlign: "left",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#3D4E5E", marginBottom: "8px" }}>
            <span style={{ color: "#2BFFB0" }}>$</span> loghaven resolve --path &quot;{"{current_url}"}&quot;
          </p>
          <p style={{ fontSize: "0.78rem", color: "#FF6B35" }}>
            ✗ Route not found in daemon registry
          </p>
          <p style={{ fontSize: "0.78rem", color: "#7A8899", marginTop: "4px" }}>
            &nbsp;&nbsp;Suggestion: return to base
          </p>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "0.9rem",
              color: "#070B0F",
              textDecoration: "none",
              padding: "11px 24px",
              backgroundColor: "#FF6B35",
              borderRadius: "6px",
            }}
          >
            ← Back to Home
          </Link>
          <a
            href="https://docs.loghaven.dev"
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: "0.9rem",
              color: "#7A8899",
              textDecoration: "none",
              padding: "11px 24px",
              border: "1px solid #1E2A35",
              borderRadius: "6px",
            }}
          >
            Docs →
          </a>
        </div>
      </div>
    </main>
  );
}

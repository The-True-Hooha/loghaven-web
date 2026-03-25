"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const terminalLines = [
  { prompt: true, text: " loghaven start --profile prod" },
  { prompt: false, accent: true, text: "◈ LogHaven v0.3.0 starting..." },
  { prompt: false, check: true, text: " Config loaded        ~/.loghaven/config.toml" },
  { prompt: false, check: true, text: " Storage backend      r2://my-bucket/logs" },
  { prompt: false, check: true, text: " EVM adapter          mainnet, base, arbitrum" },
  { prompt: false, check: true, text: " Solana adapter       mainnet-beta" },
  { prompt: false, check: true, text: " Ingest endpoint      http://localhost:7430" },
  { prompt: false, accent: true, text: "● Agent running  •  Watching 4 chains  •  0 events buffered" },
];

const stats = [
  { value: "0", label: "Ingestion fees" },
  { value: "4+", label: "Chains supported" },
  { value: "100%", label: "Data ownership" },
];

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "clamp(80px, 12vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 96px)",
        paddingLeft: "clamp(16px, 5vw, 24px)",
        paddingRight: "clamp(16px, 5vw, 24px)",
      }}
    >
      {/* Dot grid */}
      <div
        className="dot-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "-160px",
          right: "-160px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,255,176,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="grid-2col"
      >
        {/* Left: copy */}
        <div>
          {/* OSS badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6875rem",
                color: "#2BFFB0",
                backgroundColor: "rgba(43,255,176,0.08)",
                border: "1px solid rgba(43,255,176,0.2)",
                padding: "4px 10px",
                borderRadius: "4px",
                letterSpacing: "0.06em",
              }}
            >
              ★ Open Source
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6875rem",
                color: "#7A8899",
                letterSpacing: "0.04em",
              }}
            >
              // LOCAL-FIRST OBSERVABILITY RUNTIME
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(40px, 5.5vw, 72px)",
              lineHeight: 1.06,
              marginBottom: "20px",
              letterSpacing: "-0.025em",
            }}
          >
            <span style={{ color: "#E6E1D8" }}>You own</span>
            <br />
            <span style={{ color: "#E6E1D8" }}>your data.</span>
            <br />
            <span
              style={{
                color: "#2BFFB0",
                position: "relative",
                display: "inline-block",
              }}
            >
              We provide
              <br />
              the runtime.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#7A8899",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "480px",
            }}
          >
            One agent. Any chain. Full control. Local-first observability for onchain and off-chain systems — no ingestion fees, no vendor lock-in, no surprises.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}
          >
            <a
              href="/#install"
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: "#070B0F",
                textDecoration: "none",
                padding: "13px 28px",
                backgroundColor: "#FF6B35",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "opacity 0.15s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Started Free →
            </a>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontWeight: 400,
                fontSize: "0.8125rem",
                color: "#E6E1D8",
                textDecoration: "none",
                padding: "13px 20px",
                border: "1px solid #2A3A48",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "border-color 0.15s ease, background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7A8899";
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#2A3A48";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              $ cargo install loghaven
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.5 }}
            style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display), 'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "#2BFFB0",
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#3D4E5E",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: terminal */}
        <motion.div
          initial={{ opacity: 0, x: 32, y: 16 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
        >
          <div
            style={{
              backgroundColor: "#0E1318",
              border: "1px solid #1E2A35",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(43,255,176,0.06), 0 0 60px rgba(43,255,176,0.1), 0 32px 64px rgba(0,0,0,0.5)",
            }}
          >
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "12px 16px",
                borderBottom: "1px solid #1E2A35",
                backgroundColor: "#151C24",
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#FEBC2E" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#28C840" }} />
              <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.6875rem",
                  color: "#3D4E5E",
                }}
              >
                loghaven — prod
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.6rem",
                  color: "#2BFFB0",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#2BFFB0", display: "inline-block" }} />
                LIVE
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: "18px 22px", overflowX: "auto" }}>
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.78rem",
                    lineHeight: 1.8,
                    whiteSpace: "pre",
                    display: "flex",
                    alignItems: "center",
                    gap: "0",
                  }}
                >
                  {line.prompt && (
                    <>
                      <span style={{ color: "#2BFFB0" }}>$</span>
                      <span style={{ color: "#E6E1D8" }}>{line.text}</span>
                    </>
                  )}
                  {line.check && (
                    <>
                      <span style={{ color: "#3D4E5E" }}>  </span>
                      <span style={{ color: "#2BFFB0" }}>✓</span>
                      <span style={{ color: "#7A8899" }}>{line.text}</span>
                    </>
                  )}
                  {!line.prompt && !line.check && (
                    <span style={{ color: line.accent ? "#2BFFB0" : "#7A8899" }}>{line.text}</span>
                  )}
                </div>
              ))}

              {/* Blinking cursor */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "4px",
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.78rem",
                }}
              >
                <span style={{ color: "#2BFFB0" }}>$ </span>
                <span className="cursor-blink" style={{ color: "#2BFFB0", marginLeft: "2px" }}>▋</span>
              </div>
            </div>

            {/* Footer status bar */}
            <div
              style={{
                borderTop: "1px solid #1E2A35",
                padding: "8px 22px",
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                backgroundColor: "#070B0F",
              }}
            >
              {[
                { dot: "#2BFFB0", label: "Agent active" },
                { dot: "#627EEA", label: "ETH + Base" },
                { dot: "#9945FF", label: "Solana" },
                { dot: "#F5A623", label: "0 errors" },
              ].map((item) => (
                <span
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: item.dot,
                      display: "inline-block",
                    }}
                  />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

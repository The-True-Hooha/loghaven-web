"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// Standard ASCII art using only safe characters (no Unicode box drawing)
// Generated in "Standard" figlet style for LOGHAVEN
const ASCII_LINES = [
  " _         ___     ____   _   _      _      __   _____  _   _ ",
  "| |       / _ \\   / ___| | | | |    / \\    \\ \\ / / ___|| \\ | |",
  "| |      | | | | | |  _  | |_| |   / _ \\    \\ V /| |_  |  \\| |",
  "| |___   | |_| | | |_| | |  _  |  / ___ \\    | | |  _| | |\\  |",
  "|_____|   \\___/   \\____| |_| |_| /_/   \\_\\   |_| |____||_| \\_|",
];

export default function AsciiSection() {
  return (
    <section
      style={{
        backgroundColor: "#030609",
        borderTop: "1px solid #1E2A35",
        padding: "clamp(48px, 8vw, 88px) 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow behind text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(43,255,176,0.035) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
          {ASCII_LINES.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.07 }}
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "clamp(7px, 1.1vw, 13px)",
                lineHeight: 1.35,
                color: "#2BFFB0",
                textShadow: "0 0 16px rgba(43,255,176,0.25)",
                whiteSpace: "pre",
                letterSpacing: "0.01em",
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          style={{
            width: "200px",
            height: "1px",
            backgroundColor: "#1E2A35",
            margin: "28px 0 20px",
          }}
        />

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.6875rem",
              color: "#3D4E5E",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            // LOCAL-FIRST OBSERVABILITY RUNTIME
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.625rem",
              color: "#1E2A35",
              letterSpacing: "0.08em",
            }}
          >
            v0.3.0-alpha &nbsp;·&nbsp; MIT License &nbsp;·&nbsp; Built in public
          </p>
        </motion.div>
      </div>
    </section>
  );
}

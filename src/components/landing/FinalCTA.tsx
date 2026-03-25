"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const secondaryLinks = [
  { label: "Read the Docs", href: "https://docs.loghaven.dev" },
  { label: "View on GitHub", href: "https://github.com/The-True-Hooha/loghaven" },
];

export default function FinalCTA() {
  const [copied, setCopied] = useState(false);
  const cmd = "cargo install loghaven";

  function handleCopy() {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section
      style={{
        padding: "120px 24px 100px",
        backgroundColor: "#070B0F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(43,255,176,0.055) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          style={{ marginBottom: "28px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.6875rem",
              color: "#2BFFB0",
              backgroundColor: "rgba(43,255,176,0.07)",
              border: "1px solid rgba(43,255,176,0.18)",
              padding: "5px 14px",
              borderRadius: "100px",
              letterSpacing: "0.06em",
            }}
          >
            ★ Free & Open Source Forever
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-display), 'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px, 6vw, 76px)",
            lineHeight: 1.06,
            color: "#E6E1D8",
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Observe freely.{" "}
          <br />
          <span style={{ color: "#2BFFB0" }}>Own everything.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-body), 'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "#7A8899",
            marginBottom: "44px",
            lineHeight: 1.75,
            maxWidth: "520px",
            margin: "0 auto 44px",
          }}
        >
          Install in under 60 seconds. No account. No credit card. No ingestion fees.
          The runtime runs on your machine — and your data never leaves it.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <a
            href="/#install"
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#070B0F",
              textDecoration: "none",
              padding: "14px 32px",
              backgroundColor: "#FF6B35",
              borderRadius: "6px",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "opacity 0.15s ease, transform 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Started Free →
          </a>

          <button
            onClick={handleCopy}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#0E1318",
              border: `1px solid ${copied ? "rgba(43,255,176,0.5)" : "#2A3A48"}`,
              borderRadius: "6px",
              padding: "14px 20px",
              cursor: "pointer",
              transition: "border-color 0.2s ease",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.875rem",
                color: "#E6E1D8",
              }}
            >
              $ {cmd}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.65rem",
                color: copied ? "#2BFFB0" : "#3D4E5E",
                transition: "color 0.2s ease",
                minWidth: "44px",
                textAlign: "left",
              }}
            >
              {copied ? "✓ copied" : "copy"}
            </span>
          </button>
        </motion.div>

        {/* Secondary links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.35 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            marginBottom: "56px",
          }}
        >
          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontSize: "0.875rem",
                color: "#7A8899",
                textDecoration: "none",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6E1D8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8899")}
            >
              {link.label} →
            </a>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: "0.6875rem",
            color: "#3D4E5E",
            letterSpacing: "0.04em",
          }}
        >
          MIT Licensed &nbsp;·&nbsp; Built in public &nbsp;·&nbsp; Your data never leaves your machine
        </motion.p>
      </div>
    </section>
  );
}

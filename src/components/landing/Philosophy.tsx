"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const beliefs = [
  {
    icon: "◈",
    title: "User-Owned",
    body: "Your data belongs to you, not a SaaS vendor. LogHaven writes to storage you control — and only you can access.",
  },
  {
    icon: "▣",
    title: "Cost-Predictable",
    body: "No surprise bills from ingestion spikes. Pay for storage, not for observing your own infrastructure.",
  },
  {
    icon: "◎",
    title: "Privacy-Respecting",
    body: "Sensitive production logs stay on your infrastructure. Client-side encryption by default, keys never leave your machine.",
  },
  {
    icon: "⬡",
    title: "Chain-Agnostic",
    body: "Web3 development spans multiple chains. LogHaven treats Ethereum, Solana, and Stellar as peers — not afterthoughts.",
  },
  {
    icon: "◉",
    title: "Composable",
    body: "Build custom workflows, not rigid dashboards. Connect it to your existing stack — Grafana, Prometheus, Slack, anything.",
  },
  {
    icon: "✦",
    title: "Open by Default",
    body: "The agent is open source. Every byte that flows through it is inspectable. No black boxes in your observability stack.",
  },
];

const notList = [
  {
    title: "A managed SaaS platform",
    body: "We don't host your data. We never will.",
  },
  {
    title: "A replacement for APM tools",
    body: "We complement Datadog, Grafana, and others. We don't replace them.",
  },
  {
    title: "Blockchain-only",
    body: "We support any chain via adapters. Off-chain logs are first-class citizens.",
  },
  {
    title: "A closed ecosystem",
    body: "Bring your own storage, your own tools, your own workflows.",
  },
];

export default function Philosophy() {
  return (
    <>
      {/* Belief section — white background */}
      <section
        className="section-pad"
        style={{
          backgroundColor: "#F7F6F2",
          borderTop: "1px solid #E8E5DE",
          borderBottom: "1px solid #E8E5DE",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            style={{ marginBottom: "56px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6875rem",
                color: "#1A9970",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              // PHILOSOPHY
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display), 'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 52px)",
                color: "#070B0F",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                maxWidth: "680px",
              }}
            >
              We believe observability
              <br />
              should belong to you.
            </h2>
          </motion.div>

          <div
            style={{ backgroundColor: "#E8E5DE", borderRadius: "8px", overflow: "hidden" }}
            className="grid-3col"
          >
            {beliefs.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "32px 28px",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "#F0EEE8";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FFFFFF";
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(26,153,112,0.1)",
                    borderRadius: "6px",
                    fontSize: "1rem",
                    color: "#1A9970",
                    marginBottom: "16px",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  }}
                >
                  {b.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display), 'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#070B0F",
                    marginBottom: "8px",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "#4A5568",
                    lineHeight: 1.65,
                  }}
                >
                  {b.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* "Not" section — dark background */}
      <section style={{ backgroundColor: "#0E1318", padding: "72px 24px", borderBottom: "1px solid #1E2A35" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            style={{ marginBottom: "40px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6875rem",
                color: "#3D4E5E",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              // TO BE CLEAR
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display), 'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(20px, 2.5vw, 32px)",
                color: "#E6E1D8",
                letterSpacing: "-0.02em",
              }}
            >
              LogHaven is{" "}
              <span style={{ color: "#FF6B35" }}>NOT</span>
              {" "}any of these things.
            </h3>
          </motion.div>

          <div
            style={{ backgroundColor: "#1E2A35", borderRadius: "8px", overflow: "hidden" }}
            className="grid-4col"
          >
            {notList.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.07 }}
                style={{
                  backgroundColor: "#0E1318",
                  padding: "24px 22px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.875rem",
                    color: "rgba(255,107,53,0.5)",
                    marginBottom: "10px",
                  }}
                >
                  ✗
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display), 'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    color: "#E6E1D8",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#7A8899",
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

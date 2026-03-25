"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const tabs = [
  { id: "developers", label: "Developers", icon: "⌨" },
  { id: "teams", label: "Engineering Teams", icon: "◈" },
  { id: "startups", label: "Startups", icon: "▲" },
  { id: "blockchains", label: "Blockchain Protocols", icon: "⬡" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const content: Record<
  TabId,
  {
    headline: string;
    sub: string;
    features: string[];
    terminal: Array<{ type: "cmd" | "check" | "accent" | "muted" | "spacer"; text: string }>;
  }
> = {
  developers: {
    headline: "Debug anything.\nIn minutes, not hours.",
    sub: "Trace a failed transaction, correlate on-chain failures with off-chain logs, and ask your local LLM what happened — without sending raw logs anywhere.",
    features: [
      "Trace any tx across chains with a single command",
      "Auto-correlates on-chain + off-chain events by hash",
      "CLI-first — fits your existing terminal workflow",
      "AI Copilot runs locally via Ollama or any model",
    ],
    terminal: [
      { type: "cmd", text: " loghaven trace 0x4a3f...b92d" },
      { type: "accent", text: "◈ Fetching trace for 0x4a3f...b92d..." },
      { type: "muted", text: "  Chain:          Ethereum Mainnet" },
      { type: "muted", text: "  Status:         REVERTED" },
      { type: "accent", text: "  Revert reason:  'InsufficientLiquidity'" },
      { type: "muted", text: "  Gas used:       89,234 / 200,000" },
      { type: "spacer", text: "" },
      { type: "check", text: " 3 correlated off-chain logs found" },
      { type: "check", text: " Similar failure pattern: 2024-11-03" },
    ],
  },
  teams: {
    headline: "Shared context.\nNo shared costs.",
    sub: "Version-control your observation rules, deploy them as code, and share dashboards without per-seat SaaS pricing eating your infrastructure budget.",
    features: [
      "Alert rules in YAML — commit, review, deploy",
      "Team dashboards from shared config, not SaaS seats",
      "Role-based access without an enterprise contract",
      "Works alongside your existing Grafana / Prometheus stack",
    ],
    terminal: [
      { type: "cmd", text: " loghaven deploy --config observe.yaml" },
      { type: "accent", text: "◈ Deploying observation rules..." },
      { type: "check", text: " solana-error-spike    (active)" },
      { type: "check", text: " evm-gas-anomaly       (active)" },
      { type: "check", text: " bridge-latency-p99    (active)" },
      { type: "spacer", text: "" },
      { type: "muted", text: "  Notifying 4 team channels" },
      { type: "accent", text: "● 3 rules active across 4 chains" },
    ],
  },
  startups: {
    headline: "Scale without\nthe $4k debug bill.",
    sub: "Start on local filesystem for free, migrate to S3 or R2 when you grow. Pay only for storage you actually use — never per byte ingested.",
    features: [
      "Zero ingestion fees — period",
      "Start local, migrate to cloud storage anytime",
      "Open source core — no license costs",
      "Enterprise features only when you actually need them",
    ],
    terminal: [
      { type: "cmd", text: " loghaven stats --period 30d" },
      { type: "accent", text: "◈ Usage report — last 30 days" },
      { type: "muted", text: "  Events ingested:    4,847,293" },
      { type: "muted", text: "  Storage used:       2.3 GB" },
      { type: "spacer", text: "" },
      { type: "check", text: " Ingestion cost:   $0.00" },
      { type: "muted", text: "  Storage (R2):      $0.04" },
      { type: "accent", text: "  vs. Datadog est.:  $3,847/mo  → save $3,846.96" },
    ],
  },
  blockchains: {
    headline: "Every chain.\nOne runtime.",
    sub: "From Ethereum to Solana to Stellar — unified observability across your entire protocol, including bridge flows and off-chain infrastructure.",
    features: [
      "Plugin-based adapters for any EVM, Solana, Stellar chain",
      "Trace bridge flows end-to-end across ecosystems",
      "Transaction-centric: one hash, full system context",
      "Custom adapter SDK — add your L2 in hours",
    ],
    terminal: [
      { type: "cmd", text: " loghaven correlate --tx 0x4a3f...b92d" },
      { type: "accent", text: "◈ Cross-chain correlation engine..." },
      { type: "muted", text: "  ETH:     0x4a3f...b92d  (bridge deposit)" },
      { type: "check", text: " Base:    0x91bc...42f1  +2.3s  (mint)" },
      { type: "check", text: " Arbitrum: 0x3fe2...881a  +4.1s" },
      { type: "muted", text: "  Off-chain: /api/bridge  200 OK  +0.8s" },
      { type: "spacer", text: "" },
      { type: "accent", text: "● Total flow: 4.1s end-to-end  ✓ No gaps" },
    ],
  },
};

export default function UseCases() {
  const [active, setActive] = useState<TabId>("developers");
  const data = content[active];

  return (
    <section className="section-pad" style={{ backgroundColor: "#070B0F" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.6875rem",
              color: "#2BFFB0",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            // USE CASES
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            Built for every layer
            <br />
            of the stack.
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div
          className="usecases-tabs"
          style={{
            marginBottom: "32px",
            backgroundColor: "#0E1318",
            border: "1px solid #1E2A35",
            borderRadius: "8px",
            padding: "4px",
            gap: "4px",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "10px 16px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px",
                transition: "background-color 0.2s ease, color 0.2s ease",
                backgroundColor: active === tab.id ? "#151C24" : "transparent",
                color: active === tab.id ? "#E6E1D8" : "#7A8899",
                boxShadow: active === tab.id ? "0 0 0 1px #2A3A48" : "none",
                width: "100%",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: active === tab.id ? "#2BFFB0" : "#3D4E5E", flexShrink: 0 }}>
                {tab.icon}
              </span>
              <span style={{ whiteSpace: "nowrap" }}>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="grid-2col"
            style={{ alignItems: "start" }}
          >
            {/* Left: copy */}
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display), 'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 3vw, 36px)",
                  color: "#E6E1D8",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                  whiteSpace: "pre-line",
                }}
              >
                {data.headline}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontSize: "0.9375rem",
                  color: "#7A8899",
                  lineHeight: 1.7,
                  marginBottom: "28px",
                }}
              >
                {data.sub}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {data.features.map((feat, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <span
                      style={{
                        color: "#2BFFB0",
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        marginTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      ◈
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                        fontSize: "0.875rem",
                        color: "#E6E1D8",
                        lineHeight: 1.55,
                      }}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: terminal */}
            <div
              style={{
                backgroundColor: "#0E1318",
                border: "1px solid #1E2A35",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 0 40px rgba(43,255,176,0.06), 0 20px 40px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 16px",
                  borderBottom: "1px solid #1E2A35",
                  backgroundColor: "#151C24",
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FEBC2E" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#28C840" }} />
                <span
                  style={{
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                  }}
                >
                  loghaven — {active}
                </span>
              </div>
              <div style={{ padding: "16px 20px", overflowX: "auto" }}>
                {data.terminal.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "0.74rem",
                      lineHeight: line.type === "spacer" ? "0.8rem" : "1.75",
                      whiteSpace: "pre",
                    }}
                  >
                    {line.type === "cmd" && (
                      <>
                        <span style={{ color: "#2BFFB0" }}>$</span>
                        <span style={{ color: "#E6E1D8" }}>{line.text}</span>
                      </>
                    )}
                    {line.type === "check" && (
                      <>
                        <span style={{ color: "#2BFFB0" }}>  ✓</span>
                        <span style={{ color: "#7A8899" }}>{line.text}</span>
                      </>
                    )}
                    {line.type === "accent" && (
                      <span style={{ color: "#2BFFB0" }}>{line.text}</span>
                    )}
                    {line.type === "muted" && (
                      <span style={{ color: "#7A8899" }}>{line.text}</span>
                    )}
                    {line.type === "spacer" && <span>&nbsp;</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

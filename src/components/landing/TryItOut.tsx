"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type Scenario = {
  label: string;
  description: string;
  lines: Array<{ type: "cmd" | "check" | "accent" | "muted" | "spacer"; text: string }>;
};

const scenarios: Scenario[] = [
  {
    label: "Debug a failed tx",
    description: "Trace a reverted transaction and get root cause in seconds",
    lines: [
      { type: "cmd", text: " loghaven trace 0x4a3f...b92d --explain" },
      { type: "accent", text: "◈ Fetching trace..." },
      { type: "muted", text: "  Chain:   Ethereum Mainnet · Block 21,847,302" },
      { type: "accent", text: "  Status:  REVERTED — InsufficientLiquidity" },
      { type: "spacer", text: "" },
      { type: "check", text: " Root cause identified" },
      { type: "muted", text: "  Pool liquidity dropped 94% at block 21,847,298" },
      { type: "muted", text: "  3 correlated off-chain logs found" },
      { type: "spacer", text: "" },
      { type: "accent", text: "◈ AI analysis: Sandwich attack pattern detected" },
      { type: "muted", text: "  Similar incident: 2024-11-03 (see history)" },
    ],
  },
  {
    label: "Monitor chains live",
    description: "Set up live alerts triggered by on-chain conditions",
    lines: [
      { type: "cmd", text: " loghaven watch --config observe.yaml" },
      { type: "accent", text: "◈ Starting live chain monitor..." },
      { type: "check", text: " solana-error-spike    watching" },
      { type: "check", text: " evm-gas-anomaly       watching" },
      { type: "check", text: " bridge-latency-p99    watching" },
      { type: "spacer", text: "" },
      { type: "muted", text: "  [14:32:07] ETH gas: 112 gwei (normal)" },
      { type: "muted", text: "  [14:32:19] SOL error rate: 0.3% (normal)" },
      { type: "accent", text: "  [14:33:01] ⚠ SOL error rate: 2.4% — ALERT" },
      { type: "check", text: " Debug logs enabled for 15m on solana" },
      { type: "muted", text: "  Webhook notified: ALERT_WEBHOOK" },
    ],
  },
  {
    label: "Correlate cross-chain",
    description: "Follow a single user action across multiple chains",
    lines: [
      { type: "cmd", text: " loghaven flow --origin 0x4a3f...b92d" },
      { type: "accent", text: "◈ Tracing cross-chain flow..." },
      { type: "spacer", text: "" },
      { type: "muted", text: "  [0ms]   ETH  0x4a3f...b92d  bridge deposit" },
      { type: "check", text: " [800ms]  API  /bridge  200 OK" },
      { type: "check", text: " [2300ms] Base 0x91bc...42f1  mint" },
      { type: "check", text: " [4100ms] ARB  0x3fe2...881a  finalized" },
      { type: "spacer", text: "" },
      { type: "accent", text: "● Complete: 4.1s end-to-end · 0 gaps · 0 errors" },
    ],
  },
  {
    label: "Ask the AI Copilot",
    description: "Query your logs in plain language — locally, with no data leaving",
    lines: [
      { type: "cmd", text: " loghaven ask 'what caused the spike at 14:32?'" },
      { type: "accent", text: "◈ Running local analysis via Ollama..." },
      { type: "spacer", text: "" },
      { type: "muted", text: "  Analyzed 847 transactions across 3 chains." },
      { type: "muted", text: "  Timeframe: 14:28 – 14:36 UTC" },
      { type: "spacer", text: "" },
      { type: "accent", text: "  Root cause: nonce gap on Arbitrum deployer" },
      { type: "check", text: " 12 txs affected in a 4-minute window" },
      { type: "muted", text: "  Similar pattern: 2024-11-03 deploy (see diff)" },
      { type: "muted", text: "  Suggested fix: reset deployer nonce to 847" },
    ],
  },
];

export default function TryItOut() {
  const [active, setActive] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function runScenario(idx: number) {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActive(idx);
    setVisibleLines(0);
    setRunning(true);

    const lines = scenarios[idx].lines;
    let i = 0;

    function showNext() {
      i++;
      setVisibleLines(i);
      if (i < lines.length) {
        timerRef.current = setTimeout(showNext, i === 0 ? 400 : 180);
      } else {
        setRunning(false);
      }
    }
    timerRef.current = setTimeout(showNext, 300);
  }

  useEffect(() => {
    runScenario(0);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  const currentLines = scenarios[active].lines.slice(0, visibleLines);

  return (
    <section
      className="section-pad"
      style={{
        backgroundColor: "#070B0F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(43,255,176,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: "center", marginBottom: "48px" }}
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
            // TRY IT OUT
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "12px",
            }}
          >
            See it in action.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: "0.9375rem",
              color: "#7A8899",
            }}
          >
            Pick a scenario and watch the agent work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="grid-tryitout"
          style={{
            gap: "0",
            backgroundColor: "#0E1318",
            border: "1px solid #1E2A35",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(43,255,176,0.06), 0 32px 64px rgba(0,0,0,0.4)",
          }}
          className="grid-cols-1 lg:grid-cols-scenario"
        >
          {/* Left: scenario list */}
          <div
            style={{
              borderRight: "1px solid #1E2A35",
              backgroundColor: "#070B0F",
            }}
          >
            <div
              style={{
                padding: "14px 16px",
                borderBottom: "1px solid #1E2A35",
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "#3D4E5E",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Select scenario
            </div>
            {scenarios.map((s, i) => (
              <button
                key={i}
                onClick={() => runScenario(i)}
                style={{
                  width: "100%",
                  padding: "16px 18px",
                  border: "none",
                  borderBottom: "1px solid #1E2A35",
                  borderLeft: `2px solid ${active === i ? "#2BFFB0" : "transparent"}`,
                  backgroundColor: active === i ? "#0E1318" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background-color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (active !== i) (e.currentTarget).style.backgroundColor = "rgba(255,255,255,0.02)";
                }}
                onMouseLeave={(e) => {
                  if (active !== i) (e.currentTarget).style.backgroundColor = "transparent";
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.8125rem",
                    color: active === i ? "#E6E1D8" : "#7A8899",
                    marginBottom: "4px",
                    transition: "color 0.15s ease",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "#3D4E5E",
                    lineHeight: 1.4,
                  }}
                >
                  {s.description}
                </div>
              </button>
            ))}
          </div>

          {/* Right: terminal output */}
          <div>
            {/* Title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "12px 18px",
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
                loghaven — interactive demo
              </span>
              {running && (
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#2BFFB0",
                  }}
                >
                  running...
                </span>
              )}
            </div>

            {/* Output */}
            <div style={{ padding: "20px 24px", minHeight: "280px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentLines.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.775rem",
                        lineHeight: line.type === "spacer" ? "0.75rem" : "1.75",
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
                      {line.type === "accent" && <span style={{ color: "#2BFFB0" }}>{line.text}</span>}
                      {line.type === "muted" && <span style={{ color: "#7A8899" }}>{line.text}</span>}
                      {line.type === "spacer" && <span>&nbsp;</span>}
                    </motion.div>
                  ))}
                  {running && (
                    <span className="cursor-blink" style={{ color: "#2BFFB0", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                      ▋
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* CTA below terminal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.3 }}
          style={{ textAlign: "center", marginTop: "36px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: "0.9375rem",
              color: "#7A8899",
              marginBottom: "20px",
            }}
          >
            Ready to run this on your own infrastructure?
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: "#070B0F",
                textDecoration: "none",
                padding: "12px 28px",
                backgroundColor: "#FF6B35",
                borderRadius: "6px",
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
              Install LogHaven →
            </a>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontWeight: 400,
                fontSize: "0.9375rem",
                color: "#7A8899",
                textDecoration: "none",
                padding: "12px 28px",
                border: "1px solid #2A3A48",
                borderRadius: "6px",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#E6E1D8";
                e.currentTarget.style.borderColor = "#7A8899";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7A8899";
                e.currentTarget.style.borderColor = "#2A3A48";
              }}
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

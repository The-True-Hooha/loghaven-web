"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

function TxCard() {
  const fields = [
    { label: "Tx", value: "0x4a3f...b92d", valueColor: "#2BFFB0" },
    { label: "Chain", value: "Ethereum Mainnet", valueColor: "#627EEA" },
    { label: "Status", value: "✓ Confirmed", valueColor: "#2BFFB0" },
    { label: "Block", value: "21,847,302", valueColor: "#E6E1D8" },
    { label: "Gas", value: "142,847", valueColor: "#E6E1D8" },
    { label: "Logs", value: "3 events", valueColor: "#7A8899" },
    { label: "Traces", value: "7 spans", valueColor: "#7A8899" },
  ];
  return (
    <div
      style={{
        backgroundColor: "#151C24",
        borderRadius: "6px",
        padding: "14px 16px",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        fontSize: "0.72rem",
      }}
    >
      {fields.map((f) => (
        <div key={f.label} style={{ display: "flex", justifyContent: "space-between", padding: "3px 0" }}>
          <span style={{ color: "#3D4E5E" }}>{f.label}</span>
          <span style={{ color: f.valueColor }}>{f.value}</span>
        </div>
      ))}
    </div>
  );
}

function CrossChainCard() {
  const steps = [
    { label: "ETH tx", color: "#627EEA" },
    { label: "Bridge", color: "#2A3A48" },
    { label: "Base tx", color: "#0052FF" },
    { label: "Off-chain log", color: "#F5A623" },
  ];
  return (
    <div
      style={{
        backgroundColor: "#151C24",
        borderRadius: "6px",
        padding: "20px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0",
        flexWrap: "wrap",
      }}
    >
      {steps.map((step, i) => (
        <div key={step.label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <div
            style={{
              border: `1px solid ${step.color}`,
              borderRadius: "4px",
              padding: "6px 10px",
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.68rem",
              color: step.color,
              whiteSpace: "nowrap",
            }}
          >
            {step.label}
          </div>
          {i < steps.length - 1 && (
            <span style={{ color: "#3D4E5E", fontSize: "0.75rem", margin: "0 2px" }}>──→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function ObsAsCodeCard() {
  const lines = [
    { text: "observe:", color: "#2BFFB0" },
    { text: "  chain: ", color: "#7A8899", accent: "solana", accentColor: "#9945FF" },
    { text: "  when:", color: "#7A8899" },
    { text: "    tx_error_rate: ", color: "#7A8899", accent: '"> 2%"', accentColor: "#FF6B35" },
    { text: "  then:", color: "#7A8899" },
    { text: "    enable:", color: "#7A8899" },
    { text: "      logs: ", color: "#7A8899", accent: "debug", accentColor: "#2BFFB0" },
    { text: "      traces: ", color: "#7A8899", accent: "full", accentColor: "#2BFFB0" },
    { text: "    duration: ", color: "#7A8899", accent: "15m", accentColor: "#E6E1D8" },
  ];
  return (
    <div
      style={{
        backgroundColor: "#151C24",
        borderRadius: "6px",
        padding: "14px 16px",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        fontSize: "0.72rem",
        lineHeight: 1.75,
      }}
    >
      {lines.map((line, i) => (
        <div key={i}>
          <span style={{ color: line.color }}>{line.text}</span>
          {line.accent && <span style={{ color: line.accentColor }}>{line.accent}</span>}
        </div>
      ))}
    </div>
  );
}

function AICopilotCard() {
  return (
    <div
      style={{
        backgroundColor: "#151C24",
        borderRadius: "6px",
        padding: "14px 16px",
        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
        fontSize: "0.72rem",
        lineHeight: 1.7,
      }}
    >
      <div style={{ marginBottom: "10px" }}>
        <span style={{ color: "#3D4E5E" }}>You: </span>
        <span style={{ color: "#7A8899" }}>What caused the spike at 14:32?</span>
      </div>
      <div style={{ borderLeft: "2px solid #2BFFB0", paddingLeft: "10px" }}>
        <div style={{ color: "#2BFFB0", marginBottom: "4px" }}>◈  Analyzed 847 transactions across 3 chains.</div>
        <div style={{ color: "#7A8899" }}>   Root cause: nonce gap on Arbitrum deployer.</div>
        <div style={{ color: "#7A8899" }}>   Affected: 12 txs in 4-minute window.</div>
        <div style={{ color: "#3D4E5E" }}>   Similar pattern: 2024-11-03 deploy.</div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Transaction-Centric",
    body: "Every log, trace, and metric anchored to a transaction hash. One tx → full system context, across chains.",
    visual: <TxCard />,
  },
  {
    title: "Cross-Chain Correlation",
    body: "Link an Ethereum transaction to a Solana instruction to an off-chain API trace. Built for bridges and multi-chain apps.",
    visual: <CrossChainCard />,
  },
  {
    title: "Observability as Code",
    body: "Define what to watch, when to watch it, and for how long. Version-controlled. Reproducible. Zero config drift.",
    visual: <ObsAsCodeCard />,
  },
  {
    title: "AI Copilot — Your Data Stays Local",
    body: "Explain failures, cluster errors, compare deploys. Works with local LLMs (Ollama) or hosted models — raw logs never leave your machine by default.",
    visual: <AICopilotCard />,
  },
];

export default function Features() {
  return (
    <section className="section-pad" style={{ backgroundColor: "#0E1318" }}>
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
              color: "#2BFFB0",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            // WHAT IT DOES
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
            }}
          >
            Your agent is smart.
            <br />
            Your data should stay home.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid-features"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={item}
              style={{
                backgroundColor: "#0E1318",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#151C24";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor = "#0E1318";
              }}
            >
              {/* Visual panel */}
              <div style={{ marginBottom: "4px" }}>{feat.visual}</div>

              <h3
                style={{
                  fontFamily: "var(--font-display), 'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#E6E1D8",
                  letterSpacing: "-0.01em",
                }}
              >
                {feat.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontSize: "0.875rem",
                  color: "#7A8899",
                  lineHeight: 1.65,
                }}
              >
                {feat.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

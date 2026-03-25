"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const tableRows = [
  { label: "Storage", bad: "Vendor cloud", good: "Your storage" },
  { label: "Ingestion cost", bad: "Per GB", good: "Free" },
  { label: "Chain support", bad: "Single", good: "Multi-chain" },
  { label: "Data ownership", bad: "Vendor", good: "You" },
  { label: "Lock-in", bad: "High", good: "Zero" },
];

export default function ProblemStatement() {
  return (
    <section className="section-pad">
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}
        className="grid-2col"
      >
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontSize: "0.6875rem",
              color: "#2BFFB0",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            // THE PROBLEM
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.15,
              color: "#E6E1D8",
              marginBottom: "32px",
              letterSpacing: "-0.02em",
            }}
          >
            Observability tooling
            <br />
            broke the contract.
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              "Modern tools charge per byte ingested and per day retained. Debug a production incident and get a $4,000 bill.",
              "They store your production logs — and your users' data — in infrastructure you don't control.",
              "LogHaven flips the model. The runtime is ours. The data is yours. Forever.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontSize: "0.9375rem",
                  color: i === 2 ? "#E6E1D8" : "#7A8899",
                  lineHeight: 1.7,
                  fontWeight: i === 2 ? 500 : 400,
                }}
              >
                {text}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right: comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          <div
            style={{
              backgroundColor: "#0E1318",
              border: "1px solid #1E2A35",
              borderRadius: "8px",
              overflow: "auto",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "14px 20px",
                borderBottom: "1px solid #1E2A35",
                backgroundColor: "#151C24",
              }}
            >
              {["", "Existing Tools", "LogHaven"].map((col, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6875rem",
                    color: i === 2 ? "#2BFFB0" : "#3D4E5E",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    fontWeight: 500,
                  }}
                >
                  {col}
                </span>
              ))}
            </div>

            {/* Table rows */}
            {tableRows.map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  padding: "14px 20px",
                  borderBottom: i < tableRows.length - 1 ? "1px solid #1E2A35" : "none",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "#7A8899",
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#3D4E5E",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ color: "#3D4E5E" }}>✗</span>
                  {row.bad}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontSize: "0.8125rem",
                    color: "#E6E1D8",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span style={{ color: "#2BFFB0" }}>✓</span>
                  {row.good}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  "Daemon-based runtime",
  "IPC via Unix socket / named pipe",
  "Plugin chain adapters",
  "Pluggable storage backends",
];

export default function ArchitectureDiagram() {
  return (
    <section className="section-pad">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: "center", marginBottom: "56px" }}
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
            // ARCHITECTURE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            One runtime.
            <br />
            Wired to everything.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: "0.875rem",
              color: "#7A8899",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A long-running daemon handles all ingestion. Your CLI, TUI, and dashboard talk to it via IPC — lightweight, crash-tolerant, and always on.
          </p>
        </motion.div>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto", overflowX: "auto" }}>

            {/* Row 1: User Interface layer */}
            <div style={{ marginBottom: "0" }}>
              <div
                style={{
                  backgroundColor: "#0E1318",
                  border: "1px solid #1E2A35",
                  borderRadius: "8px 8px 0 0",
                  padding: "14px 20px",
                  textAlign: "center",
                  borderBottom: "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  USER INTERFACES
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap" }}>
                  {["CLI", "TUI", "Dashboard", "REST API"].map((ui) => (
                    <span
                      key={ui}
                      style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.75rem",
                        color: "#E6E1D8",
                        border: "1px solid #2A3A48",
                        padding: "5px 14px",
                        borderRadius: "4px",
                        backgroundColor: "#151C24",
                      }}
                    >
                      {ui}
                    </span>
                  ))}
                </div>
              </div>

              {/* IPC connector */}
              <div
                style={{
                  backgroundColor: "#070B0F",
                  border: "1px solid #1E2A35",
                  borderTop: "none",
                  borderBottom: "none",
                  padding: "10px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <DashedLine />
                <span
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                    backgroundColor: "#0E1318",
                    border: "1px solid #1E2A35",
                    padding: "3px 10px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  IPC — Unix Socket / Named Pipe
                </span>
                <DashedLine />
              </div>
            </div>

            {/* Row 2: Daemon Runtime (highlighted) */}
            <div
              style={{
                backgroundColor: "#0E1318",
                border: "1px solid #2BFFB0",
                borderTop: "1px solid #1E2A35",
                padding: "20px 24px",
                boxShadow: "0 0 32px rgba(43,255,176,0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.55rem",
                  color: "#070B0F",
                  backgroundColor: "#2BFFB0",
                  padding: "2px 10px",
                  letterSpacing: "0.1em",
                }}
              >
                DAEMON RUNTIME — CORE
              </div>

              <div className="arch-inner-2col" style={{ marginBottom: "12px" }}>
                {[
                  { label: "Ingestion Pipeline", desc: "Normalize · Buffer · Validate" },
                  { label: "Transaction Indexer", desc: "Hash · Correlate · Store" },
                ].map((box) => (
                  <div
                    key={box.label}
                    style={{
                      backgroundColor: "#151C24",
                      border: "1px solid #2A3A48",
                      borderRadius: "6px",
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.72rem",
                        color: "#E6E1D8",
                        marginBottom: "4px",
                      }}
                    >
                      {box.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.62rem",
                        color: "#3D4E5E",
                      }}
                    >
                      {box.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Event Processing Engine */}
              <div
                style={{
                  backgroundColor: "#070B0F",
                  border: "1px solid #2A3A48",
                  borderRadius: "6px",
                  padding: "10px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.72rem",
                    color: "#2BFFB0",
                  }}
                >
                  Event Processing Engine
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                    marginTop: "3px",
                  }}
                >
                  Filter · Enrich · Route · Alert
                </div>
              </div>
            </div>

            {/* Connector row */}
            <div
              className="arch-inner-2col"
              style={{ gap: "0", borderLeft: "1px solid #1E2A35", borderRight: "1px solid #1E2A35" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "12px 0",
                  borderRight: "1px solid #1E2A35",
                }}
              >
                <svg width="2" height="28">
                  <line x1="1" y1="0" x2="1" y2="28" stroke="#2A3A48" strokeWidth="2" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "center", padding: "12px 0" }}>
                <svg width="2" height="28">
                  <line x1="1" y1="0" x2="1" y2="28" stroke="#2A3A48" strokeWidth="2" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
            </div>

            {/* Row 3: Chain Adapters + Storage */}
            <div className="arch-inner-2col" style={{ gap: "0" }}>
              <div
                style={{
                  backgroundColor: "#0E1318",
                  border: "1px solid #1E2A35",
                  borderRight: "none",
                  borderRadius: "0 0 0 8px",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Chain Adapters
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { label: "Ethereum", color: "#627EEA" },
                    { label: "Solana", color: "#9945FF" },
                    { label: "Stellar", color: "#F5A623" },
                    { label: "Base · Arbitrum · ...", color: "#7A8899" },
                  ].map((c) => (
                    <div
                      key={c.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                        color: c.color,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          backgroundColor: c.color,
                          flexShrink: 0,
                        }}
                      />
                      {c.label}
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#0E1318",
                  border: "1px solid #1E2A35",
                  borderRadius: "0 0 8px 0",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Storage Engine
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { label: "Local Filesystem", color: "#2BFFB0" },
                    { label: "AWS S3", color: "#FF9900" },
                    { label: "Cloudflare R2", color: "#F6821F" },
                    { label: "MinIO", color: "#C72E49" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        fontSize: "0.7rem",
                        color: s.color,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "2px",
                          backgroundColor: s.color,
                          flexShrink: 0,
                        }}
                      />
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat) => (
            <span
              key={stat}
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#7A8899",
                backgroundColor: "#0E1318",
                border: "1px solid #1E2A35",
                padding: "5px 12px",
                borderRadius: "4px",
              }}
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DashedLine() {
  return (
    <svg width="80" height="2" style={{ flexShrink: 0 }}>
      <line
        x1="0" y1="1" x2="80" y2="1"
        stroke="#2A3A48"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
    </svg>
  );
}

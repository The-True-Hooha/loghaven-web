"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

type OS = "linux" | "macos" | "windows" | "cargo" | "sdk";

const tabs: { id: OS; label: string; icon: string }[] = [
  { id: "linux", label: "Linux", icon: "🐧" },
  { id: "macos", label: "macOS", icon: "" },
  { id: "windows", label: "Windows", icon: "⊞" },
  { id: "cargo", label: "Cargo", icon: "◈" },
  { id: "sdk", label: "SDK / API", icon: "◉" },
];

type Step = { comment?: string; cmd: string; os?: "unix" | "windows" };

const steps: Record<OS, Step[]> = {
  linux: [
    { comment: "# Download and install via shell script", cmd: "curl -sSL https://install.loghaven.dev | sh" },
    { comment: "# Or with wget", cmd: "wget -qO- https://install.loghaven.dev | sh" },
    { comment: "# Verify installation", cmd: "loghaven --version" },
    { comment: "# Initialize your config", cmd: "loghaven init" },
    { comment: "# Start the daemon", cmd: "loghaven run" },
  ],
  macos: [
    { comment: "# Install via Homebrew (recommended)", cmd: "brew install loghaven/tap/loghaven" },
    { comment: "# Or via shell script", cmd: "curl -sSL https://install.loghaven.dev | sh" },
    { comment: "# Verify installation", cmd: "loghaven --version" },
    { comment: "# Initialize with default config", cmd: "loghaven init" },
    { comment: "# Config location", cmd: "cat ~/.config/loghaven/config.toml" },
  ],
  windows: [
    { comment: "# Install via winget", cmd: "winget install LogHaven.LogHaven" },
    { comment: "# Or via PowerShell", cmd: "irm https://install.loghaven.dev/win | iex" },
    { comment: "# Verify installation", cmd: "loghaven --version" },
    { comment: "# Initialize config", cmd: "loghaven init" },
    { comment: "# Config location (PowerShell)", cmd: "Get-Content $env:APPDATA\\loghaven\\config.toml" },
  ],
  cargo: [
    { comment: "# Requires Rust toolchain (rustup.rs)", cmd: "cargo install loghaven" },
    { comment: "# Or build from source", cmd: "git clone https://github.com/The-True-Hooha/loghaven.git" },
    { cmd: "cd loghaven && cargo build --release" },
    { comment: "# Run the binary", cmd: "./target/release/loghaven --version" },
    { comment: "# Initialize", cmd: "./target/release/loghaven init" },
  ],
  sdk: [
    { comment: "# TypeScript / JavaScript (npm)", cmd: "npm install @loghaven/sdk" },
    { comment: "# TypeScript / JavaScript (pnpm)", cmd: "pnpm add @loghaven/sdk" },
    { comment: "# Python", cmd: "pip install loghaven" },
    { comment: "# Rust SDK (Cargo.toml)", cmd: 'loghaven-sdk = "0.3"' },
    { comment: "# Go", cmd: "go get github.com/loghaven/loghaven-go" },
  ],
};

const configExample = `[meta]
version = 1

[agent]
name    = "loghaven-agent"
log_level = "info"

[storage]
backend = "local"
primary = "local"

[storage.local]
path       = "~/.loghaven/data"
max_size_gb = 10

[chains]
enabled = ["ethereum", "solana"]

[chains.ethereum]
rpc_url = "https://eth-mainnet.g.alchemy.com/v2/YOUR-KEY"

[chains.solana]
rpc_url = "https://api.mainnet-beta.solana.com"`;

export default function InstallSection() {
  const [activeOS, setActiveOS] = useState<OS>("linux");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [configCopied, setConfigCopied] = useState(false);

  function copyCmd(cmd: string, idx: number) {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1800);
    });
  }

  function copyConfig() {
    navigator.clipboard.writeText(configExample).then(() => {
      setConfigCopied(true);
      setTimeout(() => setConfigCopied(false), 1800);
    });
  }

  return (
    <section
      className="section-pad"
      style={{
        backgroundColor: "#F7F6F2",
        borderTop: "1px solid #E8E5DE",
        borderBottom: "1px solid #E8E5DE",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          style={{ marginBottom: "52px" }}
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
            // GET STARTED
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#070B0F",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Install on any platform.
            <br />
            Running in under a minute.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: "0.9375rem",
              color: "#4A5568",
              lineHeight: 1.7,
              maxWidth: "540px",
            }}
          >
            LogHaven runs natively on Windows, macOS, and Linux. Install via your preferred method — package manager, shell script, or build from source with Cargo.
          </p>
        </motion.div>

        <div
          style={{ alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Left: install commands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            {/* OS tabs */}
            <div
              style={{
                display: "flex",
                gap: "3px",
                marginBottom: "0",
                flexWrap: "wrap",
              }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveOS(tab.id)}
                  style={{
                    padding: "8px 14px",
                    border: "1px solid",
                    borderBottomColor: activeOS === tab.id ? "#070B0F" : "#D4D0C8",
                    borderTopColor: activeOS === tab.id ? "#D4D0C8" : "#D4D0C8",
                    borderLeftColor: activeOS === tab.id ? "#D4D0C8" : "#D4D0C8",
                    borderRightColor: activeOS === tab.id ? "#D4D0C8" : "#D4D0C8",
                    borderRadius: "6px 6px 0 0",
                    backgroundColor: activeOS === tab.id ? "#070B0F" : "#EDEBE4",
                    cursor: "pointer",
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    color: activeOS === tab.id ? "#E6E1D8" : "#7A8899",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "all 0.15s ease",
                  }}
                >
                  <span style={{ fontSize: "0.75rem" }}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Command panel */}
            <div
              style={{
                backgroundColor: "#070B0F",
                borderRadius: "0 6px 6px 6px",
                border: "1px solid #1E2A35",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "10px 16px",
                  borderBottom: "1px solid #1E2A35",
                  backgroundColor: "#0E1318",
                }}
              >
                <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#FEBC2E" }} />
                <div style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#28C840" }} />
                <span
                  style={{
                    marginLeft: "8px",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: "#3D4E5E",
                  }}
                >
                  terminal — {activeOS}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOS}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ padding: "16px 20px" }}
                >
                  {steps[activeOS].map((step, i) => (
                    <div key={i} style={{ marginBottom: "12px" }}>
                      {step.comment && (
                        <div
                          style={{
                            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                            fontSize: "0.72rem",
                            color: "#3D4E5E",
                            marginBottom: "3px",
                            lineHeight: 1.4,
                          }}
                        >
                          {step.comment}
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "8px",
                          backgroundColor: "#151C24",
                          border: "1px solid #1E2A35",
                          borderRadius: "4px",
                          padding: "8px 12px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                            fontSize: "0.775rem",
                            color: "#E6E1D8",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            flex: 1,
                          }}
                        >
                          <span style={{ color: "#2BFFB0", marginRight: "6px" }}>$</span>
                          {step.cmd}
                        </div>
                        <button
                          onClick={() => copyCmd(step.cmd, i)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                            fontSize: "0.6rem",
                            color: copiedIdx === i ? "#2BFFB0" : "#3D4E5E",
                            flexShrink: 0,
                            transition: "color 0.15s ease",
                            padding: "2px 4px",
                          }}
                        >
                          {copiedIdx === i ? "copied" : "copy"}
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: config file preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
          >
            <div
              style={{
                backgroundColor: "#070B0F",
                border: "1px solid #1E2A35",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              {/* File header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                  borderBottom: "1px solid #1E2A35",
                  backgroundColor: "#0E1318",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      fontSize: "0.6875rem",
                      color: "#2BFFB0",
                      backgroundColor: "#151C24",
                      border: "1px solid #1E2A35",
                      padding: "2px 8px",
                      borderRadius: "3px",
                    }}
                  >
                    ~/.config/loghaven/config.toml
                  </span>
                </div>
                <button
                  onClick={copyConfig}
                  style={{
                    background: "none",
                    border: "1px solid #1E2A35",
                    borderRadius: "3px",
                    cursor: "pointer",
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    fontSize: "0.6rem",
                    color: configCopied ? "#2BFFB0" : "#3D4E5E",
                    padding: "3px 8px",
                    transition: "color 0.15s ease, border-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#2A3A48";
                    e.currentTarget.style.color = "#7A8899";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#1E2A35";
                    e.currentTarget.style.color = configCopied ? "#2BFFB0" : "#3D4E5E";
                  }}
                >
                  {configCopied ? "✓ copied" : "copy config"}
                </button>
              </div>

              {/* Config content */}
              <pre
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.73rem",
                  lineHeight: 1.7,
                  color: "#7A8899",
                  margin: 0,
                  padding: "16px 20px",
                  overflowX: "auto",
                  maxHeight: "400px",
                  overflowY: "auto",
                }}
              >
                {configExample.split("\n").map((line, i) => {
                  if (line.startsWith("#")) {
                    return (
                      <div key={i} style={{ color: "#3D4E5E" }}>{line}</div>
                    );
                  }
                  if (line.startsWith("[")) {
                    return (
                      <div key={i} style={{ color: "#2BFFB0" }}>{line}</div>
                    );
                  }
                  const eqIdx = line.indexOf("=");
                  if (eqIdx > -1) {
                    return (
                      <div key={i}>
                        <span style={{ color: "#E6E1D8" }}>{line.slice(0, eqIdx + 1)}</span>
                        <span style={{ color: "#FF6B35" }}>{line.slice(eqIdx + 1)}</span>
                      </div>
                    );
                  }
                  return <div key={i}>{line || "\u00A0"}</div>;
                })}
              </pre>
            </div>

            {/* Profile note */}
            <div
              style={{
                marginTop: "12px",
                padding: "12px 16px",
                backgroundColor: "rgba(43,255,176,0.06)",
                border: "1px solid rgba(43,153,112,0.2)",
                borderRadius: "6px",
                display: "flex",
                gap: "10px",
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "#1A9970", fontSize: "0.875rem", flexShrink: 0 }}>◈</span>
              <p
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontSize: "0.8125rem",
                  color: "#4A5568",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Use{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    backgroundColor: "rgba(0,0,0,0.08)",
                    padding: "1px 5px",
                    borderRadius: "3px",
                    color: "#1A9970",
                  }}
                >
                  loghaven init --profile prod
                </code>{" "}
                to create named profiles for different environments. Config files live in{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    backgroundColor: "rgba(0,0,0,0.08)",
                    padding: "1px 5px",
                    borderRadius: "3px",
                    color: "#1A9970",
                  }}
                >
                  ~/.config/loghaven/
                </code>{" "}
                on Unix and{" "}
                <code
                  style={{
                    fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                    backgroundColor: "rgba(0,0,0,0.08)",
                    padding: "1px 5px",
                    borderRadius: "3px",
                    color: "#1A9970",
                  }}
                >
                  %APPDATA%\loghaven\
                </code>{" "}
                on Windows.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

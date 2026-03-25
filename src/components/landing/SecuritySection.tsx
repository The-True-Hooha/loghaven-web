"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    value: "encryption",
    title: "Client-Side Encryption",
    body: "Data is encrypted before it leaves the agent. You hold the keys. We never see plaintext.",
  },
  {
    value: "tokens",
    title: "Short-Lived Tokens",
    body: "Ingest endpoints are ephemeral. Rotate or destroy them anytime. No permanent exposed surfaces.",
  },
  {
    value: "retention",
    title: "Zero Raw Data Retention",
    body: "LogHaven stores nothing. Your storage backend is the only copy. Delete it yourself.",
  },
  {
    value: "audit",
    title: "Fully Auditable Pipeline",
    body: "The agent is open source. Every byte that flows through it is inspectable.",
  },
];

export default function SecuritySection() {
  const [open, setOpen] = useState<string>("encryption");

  return (
    <section className="section-pad">
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}
        className="grid-2col-reverse"
      >
        {/* Left: abstract visual */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <EncryptionVisual />
        </motion.div>

        {/* Right: text + accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
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
            // SECURITY & TRUST
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(24px, 3.5vw, 40px)",
              lineHeight: 1.2,
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
              marginBottom: "36px",
            }}
          >
            Even if compromised,
            <br />
            we can't read your logs.
          </h2>

          <Accordion.Root
            type="single"
            value={open}
            onValueChange={(v) => setOpen(v || "")}
            style={{ display: "flex", flexDirection: "column", gap: "1px" }}
          >
            {items.map((acc) => (
              <Accordion.Item
                key={acc.value}
                value={acc.value}
                style={{
                  borderBottom: "1px solid #1E2A35",
                }}
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "16px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.9375rem",
                        color: open === acc.value ? "#E6E1D8" : "#7A8899",
                        transition: "color 0.2s ease",
                      }}
                    >
                      {acc.title}
                    </span>
                    <span
                      style={{
                        color: open === acc.value ? "#2BFFB0" : "#3D4E5E",
                        fontSize: "1rem",
                        transition: "transform 0.2s ease, color 0.2s ease",
                        transform: open === acc.value ? "rotate(45deg)" : "rotate(0deg)",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  style={{
                    overflow: "hidden",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                      fontSize: "0.875rem",
                      color: "#7A8899",
                      lineHeight: 1.7,
                      paddingBottom: "16px",
                    }}
                  >
                    {acc.body}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}

function EncryptionVisual() {
  const layers = [
    { offset: 0, opacity: 1, accentEdge: true },
    { offset: 12, opacity: 0.6, accentEdge: false },
    { offset: 24, opacity: 0.35, accentEdge: false },
    { offset: 36, opacity: 0.18, accentEdge: false },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: "340px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {layers.map((layer, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${300 - i * 28}px`,
            height: `${200 - i * 20}px`,
            border: `1px solid ${layer.accentEdge ? "#2BFFB0" : "#1E2A35"}`,
            borderRadius: "8px",
            backgroundColor: `rgba(14, 19, 24, ${layer.opacity * 0.8})`,
            boxShadow: layer.accentEdge ? "0 0 32px var(--color-accent-glow)" : "none",
            transform: `translateX(${layer.offset}px) translateY(${layer.offset}px)`,
          }}
        />
      ))}

      {/* Center icon */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: "2rem",
            color: "#2BFFB0",
            marginBottom: "8px",
          }}
        >
          ◈
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#3D4E5E",
            letterSpacing: "0.1em",
          }}
        >
          ENCRYPTED
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "#1E2A35",
            letterSpacing: "0.1em",
            marginTop: "4px",
          }}
        >
          ════ KEY: [YOU] ════
        </div>
      </div>

      {/* Corner labels */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "0.6rem",
          color: "#2BFFB0",
        }}
      >
        CLIENT
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
          fontSize: "0.6rem",
          color: "#3D4E5E",
        }}
      >
        NEVER PLAINTEXT
      </div>
    </div>
  );
}

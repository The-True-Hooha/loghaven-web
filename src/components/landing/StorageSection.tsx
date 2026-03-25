"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const providers = [
  {
    name: "Cloudflare R2",
    glyph: "◈",
    color: "#F6821F",
    desc: "Zero egress fees. Global edge storage.",
    config: `[storage]\nbackend = "r2"\nbucket  = "my-logs"`,
  },
  {
    name: "AWS S3",
    glyph: "▣",
    color: "#FF9900",
    desc: "Battle-tested. Lifecycle policies built-in.",
    config: `[storage]\nbackend = "s3"\nbucket  = "prod-logs"\nregion  = "us-east-1"`,
  },
  {
    name: "MinIO",
    glyph: "▦",
    color: "#C72E49",
    desc: "Self-hosted. Full S3 compatibility.",
    config: `[storage]\nbackend  = "minio"\nendpoint = "http://minio:9000"\nbucket   = "logs"`,
  },
  {
    name: "Local Filesystem",
    glyph: "◉",
    color: "#2BFFB0",
    desc: "Fastest option. Zero config. Air-gapped.",
    config: `[storage]\nbackend = "local"\npath    = "~/.loghaven/data"`,
  },
];

export default function StorageSection() {
  return (
    <section className="section-pad" style={{ backgroundColor: "#0E1318" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}
        className="grid-2col"
      >
        {/* Left text */}
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
            // BRING YOUR OWN STORAGE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            Your bucket.
            <br />
            Your rules.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: "0.9375rem",
              color: "#7A8899",
              lineHeight: 1.7,
            }}
          >
            LogHaven writes directly to storage you control. S3, R2, MinIO, or local disk. No raw data ever touches our infrastructure. Add lifecycle policies to auto-delete. Rotate keys anytime.
          </p>
        </motion.div>

        {/* Right: provider grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid-2col-sm"
        >
          {providers.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              style={{
                backgroundColor: "#070B0F",
                border: "1px solid #1E2A35",
                borderRadius: "8px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#2A3A48";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "#1E2A35";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: p.color, fontSize: "1rem" }}>{p.glyph}</span>
                <span
                  style={{
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.875rem",
                    color: "#E6E1D8",
                  }}
                >
                  {p.name}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontSize: "0.75rem",
                  color: "#7A8899",
                  lineHeight: 1.5,
                }}
              >
                {p.desc}
              </p>
              <pre
                style={{
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#3D4E5E",
                  backgroundColor: "#0E1318",
                  border: "1px solid #1E2A35",
                  borderRadius: "4px",
                  padding: "8px 10px",
                  margin: 0,
                  overflowX: "auto",
                  lineHeight: 1.6,
                }}
              >
                {p.config}
              </pre>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

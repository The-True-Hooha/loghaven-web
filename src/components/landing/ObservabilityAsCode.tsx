import { CodeBlock } from "@/components/ui/CodeBlock";

const obsCode = `# loghaven.observe.yaml
observations:
  - name: solana-error-spike
    chain: solana
    trigger:
      metric: tx_error_rate
      threshold: "> 2%"
      window: 5m
    response:
      enable:
        logs: debug
        traces: full
      duration: 15m
      notify:
        - channel: stderr
        - webhook: "\${ALERT_WEBHOOK}"

  - name: evm-gas-anomaly
    chain: evm
    trigger:
      metric: avg_gas_price
      threshold: "> 150 gwei"
    response:
      enable:
        logs: warn
      duration: 30m`;

const pills = ["Version-controlled", "Reproducible", "No SaaS required"];

export default async function ObservabilityAsCode() {
  return (
    <section
      className="section-pad"
      style={{
        backgroundColor: "#0E1318",
        borderTop: "1px solid #1E2A35",
        borderBottom: "1px solid #1E2A35",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            // OBSERVABILITY AS CODE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), 'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.15,
              color: "#E6E1D8",
              letterSpacing: "-0.02em",
              marginBottom: "20px",
            }}
          >
            Define it once.
            <br />
            Run it anywhere.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), 'DM Sans', sans-serif",
              fontSize: "0.9375rem",
              color: "#7A8899",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Declare observation rules in YAML. Commit them to your repo. The agent enforces them automatically. No dashboards to configure. No SaaS to log into.
          </p>
        </div>

        {/* Code block */}
        <div
          style={{
            backgroundColor: "#151C24",
            border: "1px solid #1E2A35",
            borderRadius: "8px",
            overflow: "hidden",
            maxWidth: "800px",
            margin: "0 auto 36px",
          }}
        >
          {/* File tab */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              borderBottom: "1px solid #1E2A35",
              backgroundColor: "#0E1318",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                color: "#2BFFB0",
                backgroundColor: "#151C24",
                border: "1px solid #1E2A35",
                padding: "2px 10px",
                borderRadius: "4px 4px 0 0",
              }}
            >
              loghaven.observe.yaml
            </span>
          </div>
          <div style={{ padding: "20px 24px", overflowX: "auto" }}>
            <CodeBlock code={obsCode} lang="yaml" />
          </div>
        </div>

        {/* Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                color: "#2BFFB0",
                backgroundColor: "#151C24",
                border: "1px solid #1E2A35",
                padding: "6px 14px",
                borderRadius: "4px",
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

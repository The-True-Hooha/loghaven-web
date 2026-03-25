import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs — LogHaven",
  description: "LogHaven documentation — installation, configuration, chain adapters, and storage backends.",
};

const sidebar = [
  {
    group: "Getting Started",
    items: [
      { label: "Overview", anchor: "#overview", active: true },
      { label: "Installation", anchor: "#installation" },
      { label: "Quick Start", anchor: "#quick-start" },
    ],
  },
  {
    group: "Configuration",
    items: [
      { label: "Config File", anchor: "#config-file" },
      { label: "Profiles", anchor: "#profiles" },
      { label: "Environment Variables", anchor: "#env-vars" },
    ],
  },
  {
    group: "Chain Adapters",
    items: [
      { label: "Ethereum / EVM", anchor: "#ethereum" },
      { label: "Solana", anchor: "#solana" },
      { label: "Stellar", anchor: "#stellar" },
      { label: "Adding Custom Chains", anchor: "#custom-chains" },
    ],
  },
  {
    group: "Storage Backends",
    items: [
      { label: "Local Filesystem", anchor: "#local-fs" },
      { label: "AWS S3", anchor: "#aws-s3" },
      { label: "Cloudflare R2", anchor: "#cloudflare-r2" },
      { label: "MinIO", anchor: "#minio" },
    ],
  },
  {
    group: "Architecture",
    items: [
      { label: "Design Philosophy", anchor: "#design-philosophy" },
      { label: "Daemon Runtime", anchor: "#daemon" },
      { label: "IPC Layer", anchor: "#ipc" },
    ],
  },
];

const mono = "var(--font-mono), 'JetBrains Mono', monospace";
const display = "var(--font-display), 'Space Grotesk', sans-serif";
const body = "var(--font-body), 'DM Sans', sans-serif";

function Code({ children }: { children: string }) {
  return (
    <code
      style={{
        fontFamily: mono,
        fontSize: "0.8125rem",
        backgroundColor: "#151C24",
        border: "1px solid #1E2A35",
        padding: "2px 6px",
        borderRadius: "3px",
        color: "#2BFFB0",
      }}
    >
      {children}
    </code>
  );
}

function CodeBlock({ children, lang = "bash" }: { children: string; lang?: string }) {
  const lines = children.trim().split("\n");
  return (
    <div
      style={{
        backgroundColor: "#0E1318",
        border: "1px solid #1E2A35",
        borderRadius: "8px",
        overflow: "hidden",
        margin: "16px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          borderBottom: "1px solid #1E2A35",
          backgroundColor: "#151C24",
        }}
      >
        <span style={{ fontFamily: mono, fontSize: "0.6rem", color: "#3D4E5E", letterSpacing: "0.08em" }}>
          {lang}
        </span>
      </div>
      <pre
        style={{
          margin: 0,
          padding: "16px 20px",
          overflowX: "auto",
          fontFamily: mono,
          fontSize: "0.8rem",
          lineHeight: 1.7,
          color: "#E6E1D8",
        }}
      >
        {lines.map((line, i) => (
          <div key={i}>
            {line.startsWith("#") ? (
              <span style={{ color: "#3D4E5E" }}>{line}</span>
            ) : line.startsWith("[") ? (
              <span style={{ color: "#2BFFB0" }}>{line}</span>
            ) : line.includes("=") && !line.startsWith(" ") && !line.startsWith("$") ? (
              <>
                <span style={{ color: "#E6E1D8" }}>{line.slice(0, line.indexOf("=") + 1)}</span>
                <span style={{ color: "#FF6B35" }}>{line.slice(line.indexOf("=") + 1)}</span>
              </>
            ) : line.startsWith("$") ? (
              <>
                <span style={{ color: "#2BFFB0" }}>$</span>
                <span>{line.slice(1)}</span>
              </>
            ) : (
              <span>{line || "\u00A0"}</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: display,
        fontWeight: 700,
        fontSize: "1.5rem",
        color: "#E6E1D8",
        letterSpacing: "-0.02em",
        marginTop: "48px",
        marginBottom: "12px",
        paddingTop: "16px",
        borderTop: "1px solid #1E2A35",
      }}
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: display,
        fontWeight: 600,
        fontSize: "1.0625rem",
        color: "#E6E1D8",
        marginTop: "28px",
        marginBottom: "8px",
      }}
    >
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: body,
        fontSize: "0.9375rem",
        color: "#7A8899",
        lineHeight: 1.75,
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

function Callout({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warn" }) {
  const isWarn = type === "warn";
  return (
    <div
      style={{
        margin: "16px 0",
        padding: "14px 16px",
        backgroundColor: isWarn ? "rgba(255,107,53,0.06)" : "rgba(43,255,176,0.06)",
        border: `1px solid ${isWarn ? "rgba(255,107,53,0.2)" : "rgba(43,255,176,0.15)"}`,
        borderRadius: "6px",
        display: "flex",
        gap: "10px",
      }}
    >
      <span style={{ color: isWarn ? "#FF6B35" : "#2BFFB0", flexShrink: 0, fontSize: "0.875rem" }}>
        {isWarn ? "⚠" : "◈"}
      </span>
      <div style={{ fontFamily: body, fontSize: "0.875rem", color: "#7A8899", lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
}

export default function DocsPage() {
  return (
    <div style={{ backgroundColor: "#070B0F", minHeight: "100vh", color: "#E6E1D8" }}>

      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          height: "56px",
          backgroundColor: "rgba(7,11,15,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1E2A35",
          display: "flex",
          alignItems: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
          gap: "16px",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: mono,
            fontWeight: 500,
            fontSize: "0.875rem",
            color: "#E6E1D8",
            textDecoration: "none",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: "7px",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#2BFFB0" }}>◈</span>
          LogHaven
        </Link>

        <span style={{ color: "#1E2A35", fontSize: "1rem" }}>/</span>

        <span
          style={{
            fontFamily: body,
            fontSize: "0.875rem",
            color: "#7A8899",
          }}
        >
          Documentation
        </span>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="https://github.com/The-True-Hooha/loghaven"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: mono,
              fontSize: "0.75rem",
              color: "#7A8899",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E6E1D8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8899")}
          >
            GitHub →
          </a>
          <Link
            href="/"
            style={{
              fontFamily: body,
              fontWeight: 500,
              fontSize: "0.8125rem",
              color: "#070B0F",
              textDecoration: "none",
              padding: "6px 14px",
              backgroundColor: "#FF6B35",
              borderRadius: "6px",
            }}
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "0",
          minHeight: "calc(100vh - 56px)",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            borderRight: "1px solid #1E2A35",
            padding: "32px 0",
            position: "sticky",
            top: "56px",
            height: "calc(100vh - 56px)",
            overflowY: "auto",
          }}
        >
          {/* Mintlify notice */}
          <div
            style={{
              margin: "0 16px 24px",
              padding: "10px 12px",
              backgroundColor: "#0E1318",
              border: "1px solid #1E2A35",
              borderRadius: "6px",
            }}
          >
            <p style={{ fontFamily: mono, fontSize: "0.6rem", color: "#3D4E5E", margin: 0, lineHeight: 1.5 }}>
              Full docs via Mintlify coming soon. This is a preview.
            </p>
          </div>

          {sidebar.map((section) => (
            <div key={section.group} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: "0.6rem",
                  color: "#3D4E5E",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0 16px 8px",
                }}
              >
                {section.group}
              </div>
              {section.items.map((item) => (
                <a
                  key={item.label}
                  href={item.anchor}
                  style={{
                    display: "block",
                    fontFamily: body,
                    fontSize: "0.875rem",
                    color: item.active ? "#2BFFB0" : "#7A8899",
                    textDecoration: "none",
                    padding: "6px 16px",
                    borderLeft: item.active ? "2px solid #2BFFB0" : "2px solid transparent",
                    transition: "color 0.15s ease, border-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.color = "#E6E1D8";
                      e.currentTarget.style.borderLeftColor = "#2A3A48";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.active) {
                      e.currentTarget.style.color = "#7A8899";
                      e.currentTarget.style.borderLeftColor = "transparent";
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main style={{ padding: "40px 48px", maxWidth: "800px" }}>

          {/* Page header */}
          <div style={{ marginBottom: "40px", paddingBottom: "32px", borderBottom: "1px solid #1E2A35" }}>
            <span
              style={{
                fontFamily: mono,
                fontSize: "0.6875rem",
                color: "#2BFFB0",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              // DOCUMENTATION
            </span>
            <h1
              style={{
                fontFamily: display,
                fontWeight: 700,
                fontSize: "2.25rem",
                color: "#E6E1D8",
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                marginBottom: "12px",
              }}
            >
              LogHaven Docs
            </h1>
            <P>
              LogHaven is a local-first, chain-agnostic observability runtime. This documentation covers installation, configuration, chain adapters, and storage backends.
            </P>
            <Callout>
              Full documentation is being migrated to Mintlify. This page contains the essentials to get started. See the{" "}
              <a href="https://github.com/The-True-Hooha/loghaven" style={{ color: "#2BFFB0" }} target="_blank" rel="noopener noreferrer">
                GitHub repository
              </a>{" "}
              for the latest source.
            </Callout>
          </div>

          {/* Overview */}
          <section id="overview">
            <H2 id="overview">Overview</H2>
            <P>
              LogHaven gives you full control over your observability data. Unlike SaaS platforms that charge per byte ingested and store your logs on vendor infrastructure, LogHaven runs a local daemon on your machine and writes to storage you own.
            </P>
            <P>Key properties:</P>
            <ul style={{ fontFamily: body, fontSize: "0.9375rem", color: "#7A8899", lineHeight: 2, paddingLeft: "20px", marginBottom: "16px" }}>
              <li><strong style={{ color: "#E6E1D8" }}>Local-first</strong> — the daemon runs on your infrastructure, no external services required</li>
              <li><strong style={{ color: "#E6E1D8" }}>Chain-agnostic</strong> — unified observability across Ethereum, Solana, Stellar, and more</li>
              <li><strong style={{ color: "#E6E1D8" }}>Bring Your Own Storage</strong> — local FS, S3, Cloudflare R2, or MinIO</li>
              <li><strong style={{ color: "#E6E1D8" }}>Zero ingestion fees</strong> — you pay only for the storage you use</li>
              <li><strong style={{ color: "#E6E1D8" }}>Open source</strong> — MIT licensed, every byte is inspectable</li>
            </ul>
          </section>

          {/* Installation */}
          <section id="installation">
            <H2 id="installation">Installation</H2>

            <H3>macOS</H3>
            <CodeBlock lang="bash">{`# Homebrew (recommended)
$ brew install loghaven/tap/loghaven

# Or via shell script
$ curl -sSL https://install.loghaven.dev | sh`}</CodeBlock>

            <H3>Linux</H3>
            <CodeBlock lang="bash">{`$ curl -sSL https://install.loghaven.dev | sh

# Or with wget
$ wget -qO- https://install.loghaven.dev | sh`}</CodeBlock>

            <H3>Windows</H3>
            <CodeBlock lang="powershell">{`# winget
$ winget install LogHaven.LogHaven

# Or via PowerShell
$ irm https://install.loghaven.dev/win | iex`}</CodeBlock>

            <H3>Cargo (build from source)</H3>
            <CodeBlock lang="bash">{`$ cargo install loghaven

# Or build from source
$ git clone https://github.com/The-True-Hooha/loghaven.git
$ cd loghaven
$ cargo build --release`}</CodeBlock>

            <H3>Verify</H3>
            <CodeBlock lang="bash">{`$ loghaven --version
loghaven 0.3.0-alpha`}</CodeBlock>
          </section>

          {/* Quick Start */}
          <section id="quick-start">
            <H2 id="quick-start">Quick Start</H2>
            <CodeBlock lang="bash">{`# 1. Initialize config
$ loghaven init

# 2. Edit your config (Linux/macOS)
$ $EDITOR ~/.config/loghaven/config.toml

# 2. Edit your config (Windows)
$ notepad $env:APPDATA\loghaven\config.toml

# 3. Start the daemon
$ loghaven run

# 4. Check status
$ loghaven status`}</CodeBlock>
            <Callout>
              On first run, LogHaven creates a default config using local filesystem storage with no chains enabled. Add chains in the config file to start ingesting.
            </Callout>
          </section>

          {/* Config File */}
          <section id="config-file">
            <H2 id="config-file">Configuration File</H2>
            <P>
              Config files are in TOML format. Location depends on your OS:
            </P>
            <ul style={{ fontFamily: body, fontSize: "0.9375rem", color: "#7A8899", lineHeight: 2, paddingLeft: "20px", marginBottom: "16px" }}>
              <li><strong style={{ color: "#E6E1D8" }}>Linux/macOS:</strong> <Code>~/.config/loghaven/config.toml</Code></li>
              <li><strong style={{ color: "#E6E1D8" }}>Windows:</strong> <Code>%APPDATA%\loghaven\config.toml</Code></li>
            </ul>
            <CodeBlock lang="toml">{`[meta]
version = 1

[agent]
name      = "loghaven-agent"
log_level = "info"  # trace | debug | info | warn | error

[daemon]
socket_path = "~/.loghaven/loghaven.sock"
tcp_port    = 9090

[storage]
backend = "local"
primary = "local"

[storage.local]
path        = "~/.loghaven/data"
max_size_gb = 10

[chains]
enabled = []  # e.g. ["ethereum", "solana"]`}</CodeBlock>
          </section>

          {/* Profiles */}
          <section id="profiles">
            <H2 id="profiles">Profiles</H2>
            <P>Create named profiles for different environments:</P>
            <CodeBlock lang="bash">{`# Create a profile
$ loghaven init --profile dev
$ loghaven init --profile prod --storage s3

# Run with a profile
$ loghaven run --profile dev
$ loghaven run --profile prod`}</CodeBlock>
            {/* <P>Profile files live at <Code>~/.config/loghaven/{"{profile}"}.toml</Code>.</P> */}
          </section>

          {/* Env vars */}
          <section id="env-vars">
            <H2 id="env-vars">Environment Variables</H2>
            <CodeBlock lang="bash">{`# Linux/macOS
$ export LOGHAVEN_STORAGE_BACKEND=s3
$ export LOGHAVEN_LOG_LEVEL=debug
$ export LOGHAVEN_DAEMON_PORT=9091
$ loghaven run

# Windows (PowerShell)
$ $env:LOGHAVEN_STORAGE_BACKEND="s3"
$ $env:LOGHAVEN_LOG_LEVEL="debug"
$ loghaven run`}</CodeBlock>
          </section>

          {/* Chain Adapters */}
          <section id="ethereum">
            <H2 id="ethereum">Ethereum / EVM</H2>
            <P>
              Supports all EVM-compatible chains: Ethereum mainnet, Base, Arbitrum, Optimism, and any custom EVM network.
            </P>
            <CodeBlock lang="toml">{`[chains]
enabled = ["ethereum"]

[chains.ethereum]
rpc_url = "https://eth-mainnet.g.alchemy.com/v2/YOUR-KEY"
ws_url  = "wss://eth-mainnet.g.alchemy.com/v2/YOUR-KEY"`}</CodeBlock>
          </section>

          <section id="solana">
            <H2 id="solana">Solana</H2>
            <CodeBlock lang="toml">{`[chains]
enabled = ["solana"]

[chains.solana]
rpc_url = "https://api.mainnet-beta.solana.com"
ws_url  = "wss://api.mainnet-beta.solana.com"`}</CodeBlock>
          </section>

          <section id="stellar">
            <H2 id="stellar">Stellar</H2>
            <CodeBlock lang="toml">{`[chains]
enabled = ["stellar"]

[chains.stellar]
horizon_url = "https://horizon.stellar.org"`}</CodeBlock>
          </section>

          <section id="custom-chains">
            <H2 id="custom-chains">Adding Custom Chains</H2>
            <P>
              LogHaven uses a plugin-based adapter system. Each chain is an independent module that normalizes events into a common format. See the{" "}
              <a href="https://github.com/The-True-Hooha/loghaven" style={{ color: "#2BFFB0" }} target="_blank" rel="noopener noreferrer">
                GitHub repository
              </a>{" "}
              for the adapter SDK and contributing guide.
            </P>
          </section>

          {/* Storage */}
          <section id="local-fs">
            <H2 id="local-fs">Local Filesystem</H2>
            <CodeBlock lang="toml">{`[storage.local]
path        = "~/.loghaven/data"
max_size_gb = 10`}</CodeBlock>
          </section>

          <section id="aws-s3">
            <H2 id="aws-s3">AWS S3</H2>
            <CodeBlock lang="toml">{`[storage.s3]
bucket = "my-logs"
region = "us-east-1"
prefix = "loghaven/"`}</CodeBlock>
          </section>

          <section id="cloudflare-r2">
            <H2 id="cloudflare-r2">Cloudflare R2</H2>
            <CodeBlock lang="toml">{`[storage.r2]
account_id = "your-account-id"
bucket     = "my-logs"
prefix     = "loghaven/"`}</CodeBlock>
            <Callout>
              R2 has zero egress fees, making it the recommended cloud backend for most use cases.
            </Callout>
          </section>

          <section id="minio">
            <H2 id="minio">MinIO</H2>
            <CodeBlock lang="toml">{`[storage.minio]
endpoint   = "http://localhost:9000"
bucket     = "loghaven"
access_key = "minioadmin"
secret_key = "minioadmin"`}</CodeBlock>
          </section>

          {/* Architecture */}
          <section id="design-philosophy">
            <H2 id="design-philosophy">Design Philosophy</H2>
            <P>LogHaven is built on four core principles:</P>
            <ol style={{ fontFamily: body, fontSize: "0.9375rem", color: "#7A8899", lineHeight: 2, paddingLeft: "20px", marginBottom: "16px" }}>
              <li><strong style={{ color: "#E6E1D8" }}>Local-First by Default</strong> — agent runs on your infrastructure, no external services required for core functionality</li>
              <li><strong style={{ color: "#E6E1D8" }}>Daemon-Based Runtime</strong> — long-running process handles data ingestion; CLI communicates via IPC</li>
              <li><strong style={{ color: "#E6E1D8" }}>Pluggable Storage</strong> — abstract storage interface, multiple simultaneous backends</li>
              <li><strong style={{ color: "#E6E1D8" }}>Chain Adapters as Plugins</strong> — each blockchain is an independent module; adding chains doesn't require core changes</li>
            </ol>
          </section>

          <section id="daemon">
            <H2 id="daemon">Daemon Runtime</H2>
            <P>
              The daemon is a long-running background process that owns all stateful operations — storage, processing, and indexing. The CLI is a lightweight client that sends commands over IPC.
            </P>
            <CodeBlock lang="bash">{`# Start daemon in foreground
$ loghaven run

# Start as background service
$ loghaven run --detach

# Check daemon status
$ loghaven status

# Stop daemon
$ loghaven stop`}</CodeBlock>
          </section>

          <section id="ipc">
            <H2 id="ipc">IPC Layer</H2>
            <P>
              The CLI communicates with the daemon via a Unix socket on Linux/macOS (<Code>~/.loghaven/loghaven.sock</Code>) or a named pipe / TCP port on Windows (<Code>localhost:9090</Code>).
            </P>
            <Callout type="warn">
              The socket path can be changed in config via <Code>daemon.socket_path</Code>. All CLI commands require the daemon to be running first.
            </Callout>
          </section>

          {/* Footer */}
          <div
            style={{
              marginTop: "64px",
              paddingTop: "32px",
              borderTop: "1px solid #1E2A35",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span style={{ fontFamily: mono, fontSize: "0.6875rem", color: "#3D4E5E" }}>
              LogHaven Docs · MIT License · Built in public
            </span>
            <a
              href="https://github.com/The-True-Hooha/loghaven"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: body, fontSize: "0.8125rem", color: "#7A8899", textDecoration: "none" }}
            >
              Edit on GitHub →
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

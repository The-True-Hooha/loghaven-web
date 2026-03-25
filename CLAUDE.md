# LogHaven Landing Page — Build Spec

## Project Context

LogHaven is a **local-first, composable observability runtime** for both onchain and off-chain systems. It is infrastructure — neutral, professional, minimalist, and Web3-aware without being crypto-gimmicky.

Stack: **Next.js 16 · Tailwind CSS · Framer Motion · Radix UI · Shiki · Lucide React**

---

## Brand Guidelines

### Identity

- **What it is**: Private observability infrastructure. Boring by design. Powerful by nature.
- **Tone**: Like the terminal prompt you trust. Quiet confidence. No hype.
- **Avoid**: Meme aesthetics, "Web3-only" language, magic metaphors, purple gradients, anything that looks like a DeFi protocol.

---

### Color Palette

All colors must be defined as CSS variables in `globals.css`. Use these exclusively — no arbitrary Tailwind values for brand colors.

```css
:root {
  /* Backgrounds */
  --color-bg:          #070B0F;   /* page background — near-black with a cold blue tint */
  --color-surface:     #0E1318;   /* card / panel surfaces */
  --color-surface-2:   #151C24;   /* elevated surface, code blocks */
  --color-border:      #1E2A35;   /* subtle border */
  --color-border-2:    #2A3A48;   /* slightly more visible border */

  /* Text */
  --color-text-primary:   #E6E1D8; /* warm off-white — main text */
  --color-text-secondary: #7A8899; /* muted secondary */
  --color-text-tertiary:  #3D4E5E; /* very muted, labels */

  /* Accent */
  --color-accent:      #2BFFB0;   /* terminal teal-green — primary accent */
  --color-accent-dim:  #1A9970;   /* dimmer accent for backgrounds */
  --color-accent-glow: rgba(43, 255, 176, 0.12); /* for glow effects */

  /* Highlight */
  --color-highlight:   #FF6B35;   /* warm orange — CTAs, warnings, heat */
  --color-highlight-dim: rgba(255, 107, 53, 0.15);

  /* Chain indicator colors (used in feature sections) */
  --color-evm:    #627EEA;  /* Ethereum blue */
  --color-solana: #9945FF;  /* Solana purple */
  --color-infra:  #F5A623;  /* Off-chain amber */
}
```

---

### Typography

Use Google Fonts (via `next/font/google`). Load these two families:

| Role | Font | Weights |
|---|---|---|
| **Display / Headlines** | `Syne` | 600, 700, 800 |
| **Body / UI** | `DM Sans` | 400, 500 |
| **Monospace / Code / Labels** | `JetBrains Mono` | 400, 500 |

**Rules:**

- All section headlines: `Syne`, weight 700–800
- Hero headline: `Syne` 800, large (clamp 48px → 80px)
- All code blocks, CLI output, metric labels, chain IDs: `JetBrains Mono`
- Body copy: `DM Sans` 400
- Button labels: `DM Sans` 500
- Section labels / eyebrows (e.g. `// WHY LOGHAVEN`): `JetBrains Mono` uppercase, small, `--color-accent`

---

### Visual Language

- **Background texture**: Subtle dot-grid pattern on the hero using a CSS `radial-gradient` mask. Very low opacity (3–5%).
- **Glow effects**: Use `box-shadow` with `--color-accent-glow` on cards, accent elements. Never overdo it — one glow per "hero moment."
- **Borders**: 1px solid `--color-border`. Cards use `border-radius: 8px`. Never rounded-full on large elements.
- **Code blocks**: Shiki-highlighted, dark background `--color-surface-2`, accent color on keywords. Always show realistic LogHaven-style snippets.
- **Terminal aesthetic**: Small `>_` prefix decorations, blinking cursor elements in hero, monospace labels.
- **Animations**: Framer Motion for entrance animations (fade up + slight Y offset). Staggered reveals on feature grids. No bouncy spring physics — use `ease: [0.16, 1, 0.3, 1]` (expo ease out). Duration: 0.5–0.8s.
- **No stock photos.** No hero images with people. Visual content = code, terminal output, architecture diagrams, data visualizations.

---

## Page Structure

Build the entire landing page in `app/page.tsx` (or `pages/index.tsx` depending on structure). Each section should be a separate component in `components/landing/`.

```
components/landing/
  Hero.tsx
  LogoBar.tsx
  ProblemStatement.tsx
  Features.tsx
  ArchitectureDiagram.tsx
  StorageSection.tsx
  ObservabilityAsCode.tsx
  SecuritySection.tsx
  Pricing.tsx
  FinalCTA.tsx
  Nav.tsx
  Footer.tsx
```

---

## Section Specifications

---

### 1. `Nav.tsx` — Top Navigation

**Layout**: Fixed top, full-width, height 56px. Backdrop blur + semi-transparent bg on scroll.

**Left**: `LOG HAVEN` in `JetBrains Mono` 500, with a small `◈` glyph prefix in `--color-accent`.

**Center links**: `Docs · Architecture · Pricing · GitHub`

**Right**:

- `Star on GitHub` — ghost button, small
- `Get Started` — filled button, `--color-highlight` background, dark text

**Scroll behavior**: On scroll > 50px, add `border-bottom: 1px solid var(--color-border)` and `background: rgba(7, 11, 15, 0.9)`.

---

### 2. `Hero.tsx` — Hero Section

**Layout**: Full-viewport height, centered content, dot-grid background.

**Eyebrow label** (top center):

```
// LOCAL-FIRST OBSERVABILITY RUNTIME
```

`JetBrains Mono`, small, `--color-accent`, with a blinking cursor `▋` after it.

**Headline** (two lines, centered):

```
You own your data.
We provide the runtime.
```

`Syne` 800. First line: `--color-text-primary`. Second line: `--color-accent`.

**Subheadline** (below, centered, max-width 560px):

```
One agent. Any chain. Full control.
Local-first observability for onchain and off-chain systems — no vendor lock-in, no ingestion fees, no surprises.
```

`DM Sans` 400, `--color-text-secondary`.

**CTA Row**:

- Primary: `Get Started` → filled, `--color-highlight`
- Secondary: `Read the Docs` → outlined, `--color-border-2`

**Below CTAs**: A floating terminal/code window showing a fake CLI session:

```bash
$ loghaven start --profile prod
◈ LogHaven v0.3.0 starting...
  ✓ Config loaded        (~/.loghaven/config.toml)
  ✓ Storage backend      r2://my-bucket/logs
  ✓ EVM adapter          mainnet, base, arbitrum
  ✓ Solana adapter       mainnet-beta
  ✓ Daemon socket        /tmp/loghaven.sock
  ✓ Ingest endpoint      http://localhost:7430

● Agent running  •  Watching 4 chains  •  0 events buffered
```

Style this as a dark terminal panel with a subtle border and a faint glow. Use Shiki or manual span coloring. Add a subtle entrance animation (fade in from below, 0.6s delay).

**Background**: Dot-grid SVG pattern at 4% opacity. Optional: a large, very subtle radial gradient blob of `--color-accent-glow` in the upper right.

---

### 3. `LogoBar.tsx` — Trusted By / Chains Supported

**Layout**: Full width, centered. Single row, subtle separator lines top and bottom.

**Label**: `// SUPPORTED CHAINS & INTEGRATIONS` in monospace, small, `--color-text-tertiary`

**Content row** (logos with names, muted opacity 50% → 100% on hover):

- Ethereum `◆`
- Base
- Arbitrum
- Optimism
- Solana `◎`
- Stellar `✦`
- AWS S3
- Cloudflare R2
- MinIO

Use SVG icons where possible (simple geometric stand-ins are fine if real SVGs aren't available). All in `--color-text-secondary`.

---

### 4. `ProblemStatement.tsx` — Why LogHaven

**Layout**: Two-column. Left: headline + body. Right: comparison table.

**Eyebrow**: `// THE PROBLEM`

**Headline**:

```
Observability tooling
broke the contract.
```

`Syne` 700, large.

**Body** (3 short paragraphs):

1. "Modern tools charge per byte ingested and per day retained. Debug a production incident and get a $4,000 bill."
2. "They store your production logs — and your users' data — in infrastructure you don't control."
3. "LogHaven flips the model. The runtime is ours. The data is yours. Forever."

**Right: Comparison table** — styled as a dark card with `--color-surface` bg.

| | Existing Tools | LogHaven |
|---|---|---|
| Storage | Vendor cloud | Your storage |
| Ingestion cost | Per GB | Free |
| Chain support | Single | Multi-chain |
| Data ownership | Vendor | You |
| Lock-in | High | Zero |

Use `--color-accent` checkmark icons for LogHaven column. Use muted `✗` for existing tools column.

---

### 5. `Features.tsx` — Core Capabilities

**Layout**: Eyebrow label + headline at top, then a 2×2 grid of feature cards (on desktop). Each card has a visual panel on top and text below.

**Eyebrow**: `// WHAT IT DOES`

**Headline**:

```
Your agent is smart.
Your data should stay home.
```

**4 Feature Cards**:

---

**Card 1 — Transaction-Centric Observability**

Visual: A fake "transaction explorer" UI — a card showing:

```
Tx  0x4a3f...b92d
Chain     Ethereum Mainnet
Status    ✓ Confirmed
Block     21,847,302
Gas       142,847
Logs      3 events
Traces    7 spans
```

With colored spans for each field. No real data needed, just realistic-looking.

Title: `Transaction-Centric`
Body: "Every log, trace, and metric anchored to a transaction hash. One tx → full system context, across chains."

---

**Card 2 — Cross-Chain Correlation**

Visual: A minimal flow diagram (SVG or CSS) showing:

```
[ETH tx] ──→ [Bridge] ──→ [Base tx] ──→ [Off-chain log]
```

With chain color dots (EVM blue, orange for off-chain).

Title: `Cross-Chain Correlation`
Body: "Link an Ethereum transaction to a Solana instruction to an off-chain API trace. Built for bridges and multi-chain apps."

---

**Card 3 — Observability as Code**

Visual: A Shiki-highlighted YAML code block:

```yaml
observe:
  chain: solana
  when:
    tx_error_rate: "> 2%"
  then:
    enable:
      logs: debug
      traces: full
    duration: 15m
```

Title: `Observability as Code`
Body: "Define what to watch, when to watch it, and for how long. Version-controlled. Reproducible. Zero config drift."

---

**Card 4 — Privacy-First AI Copilot**

Visual: A fake chat UI snippet:

```
You: What caused the spike at 14:32?

◈  Analyzed 847 transactions across 3 chains.
   Root cause: nonce gap on Arbitrum deployer.
   Affected: 12 txs in 4-minute window.
   Similar pattern: 2024-11-03 deploy.
```

Title: `AI Copilot — Your Data Stays Local`
Body: "Explain failures, cluster errors, compare deploys. Works with local LLMs (Ollama) or hosted models — raw logs never leave your machine by default."

---

### 6. `ArchitectureDiagram.tsx` — How It Works

**Layout**: Full-width section. Centered headline + a large architecture diagram (SVG or CSS-drawn).

**Eyebrow**: `// ARCHITECTURE`

**Headline**:

```
One runtime.
Wired to everything.
```

**Diagram** (build as SVG or styled divs):

```
┌─────────────────────────────────────────┐
│            CHAINS & SOURCES             │
│  [ETH]  [Base]  [Solana]  [Stellar]     │
│                [Off-chain logs]         │
└──────────────────┬──────────────────────┘
                   │
                   ▼
         ┌─────────────────┐
         │  Chain Adapters │   ← plugin-based
         │  (normalize)    │
         └────────┬────────┘
                  │
                  ▼
         ┌─────────────────┐
         │   Local Agent   │
         │  Auth · Buffer  │
         │  Encrypt · Index│
         └────────┬────────┘
          ┌───────┴───────┐
          ▼               ▼
  ┌──────────────┐  ┌───────────────┐
  │ Your Storage │  │  Dashboard +  │
  │ S3/R2/MinIO  │  │  AI Copilot   │
  └──────────────┘  └───────────────┘
```

Style each block as a dark card with `--color-surface` background. Connecting lines with `--color-border-2`. The "Local Agent" block gets a subtle `--color-accent-glow` border. Animate connections with a subtle dashed-line flow animation (CSS `stroke-dashoffset` animation on SVG paths).

Below diagram, add 3 stat pills:

- `4+ chains supported`
- `0 ingestion fees`
- `100% data ownership`

Each pill: `JetBrains Mono`, small, `--color-surface-2` bg, `--color-accent` text.

---

### 7. `StorageSection.tsx` — Bring Your Own Storage

**Layout**: Split. Left: text. Right: storage provider grid.

**Eyebrow**: `// BRING YOUR OWN STORAGE`

**Headline**:

```
Your bucket.
Your rules.
```

**Body**: "LogHaven writes directly to storage you control. S3, R2, MinIO, or local disk. No raw data ever touches our infrastructure. Add lifecycle policies to auto-delete. Rotate keys anytime."

**Right panel**: 4 storage provider cards in a 2×2 grid.

Each card:

- Provider name + simple icon
- One-line description
- A config snippet (monospace):

```toml
# Cloudflare R2
[storage]
backend = "r2"
bucket  = "my-logs"
```

Providers: `Cloudflare R2` · `AWS S3` · `MinIO` · `Local Filesystem`

---

### 8. `ObservabilityAsCode.tsx` — Feature Deep-Dive

**Layout**: Dark full-bleed section (slight bg color shift to `--color-surface`). Centered content, wide code block.

**Eyebrow**: `// OBSERVABILITY AS CODE`

**Headline**:

```
Define it once.
Run it anywhere.
```

**Body**: "Declare observation rules in YAML. Commit them to your repo. The agent enforces them automatically. No dashboards to configure. No SaaS to log into."

**Large code block** (use Shiki, `loghaven-dark` theme or `github-dark-dimmed`):

```yaml
# loghaven.observe.yaml
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
        - webhook: "${ALERT_WEBHOOK}"

  - name: evm-gas-anomaly
    chain: evm
    trigger:
      metric: avg_gas_price
      threshold: "> 150 gwei"
    response:
      enable:
        logs: warn
      duration: 30m
```

Below code block: 3 benefit pills — `Version-controlled` · `Reproducible` · `No SaaS required`

---

### 9. `SecuritySection.tsx` — Security & Trust

**Layout**: Full-width. Left: visual (abstract geometric panel — CSS-drawn layered rectangles suggesting encryption/privacy). Right: accordion list.

**Eyebrow**: `// SECURITY & TRUST`

**Headline**:

```
Even if compromised,
we can't read your logs.
```

Use Radix UI `Accordion` for the right side. 4 items:

1. **Client-Side Encryption** — "Data is encrypted before it leaves the agent. You hold the keys. We never see plaintext."
2. **Short-Lived Tokens** — "Ingest endpoints are ephemeral. Rotate or destroy them anytime. No permanent exposed surfaces."
3. **Zero Raw Data Retention** — "LogHaven stores nothing. Your storage backend is the only copy. Delete it yourself."
4. **Fully Auditable Pipeline** — "The agent is open source. Every byte that flows through it is inspectable."

Left visual: A dark panel with layered semi-transparent rectangles and subtle lines — like an abstract cross-section of an encrypted envelope. Pure CSS / SVG. Add `--color-accent` highlight on one edge.

---

### 10. `Pricing.tsx` — Pricing Philosophy

**Layout**: Centered, simple. Not a traditional pricing grid.

**Eyebrow**: `// PRICING`

**Headline**:

```
No ingestion fees.
Ever.
```

**Body**: "The runtime is open source. You bring your own storage. You pay nothing to ingest."

**3-column card row**:

| OSS Core | Cloud Features | Enterprise |
|---|---|---|
| Free forever | Usage-based | Contact us |
| Local agent | AI Copilot | Team controls |
| All chain adapters | Hosted Dashboard | SSO + Audit logs |
| CLI + TUI | Team collaboration | SLA + Support |

Style as 3 dark cards. Middle card gets `--color-accent` border + a `POPULAR` badge.

Below cards: small text — `"We charge for intelligence and collaboration — not for the data you already own."`

---

### 11. `FinalCTA.tsx` — Bottom CTA

**Layout**: Full-width, centered. Subtle background — use a large, very low opacity radial gradient of `--color-accent-glow`.

**Headline**:

```
Your runtime is ready.
Are you?
```

`Syne` 800, large.

**Subtext**: "Start in under 2 minutes. No account required."

**CTA Row**:

- `cargo install loghaven` — copy-to-clipboard code pill (monospace, dark bg)
- `Read the Docs →` — text link

---

### 12. `Footer.tsx`

**Layout**: Dark, full-width. 4-column grid.

**Col 1**: LogHaven logo + one-liner: `"Local-first observability runtime."`

**Col 2 — Product**: Docs · Architecture · Changelog · GitHub

**Col 3 — Resources**: Blog · Roadmap · Contributing · Security

**Col 4 — Chains**: Ethereum · Solana · Stellar · Base

**Bottom bar**: `© 2025 LogHaven · MIT License · Built in public` + social icons (GitHub, X/Twitter)

---

## Implementation Notes

### Animations

Use Framer Motion `motion.div` with `viewport={{ once: true }}` for all section entrance animations. Standard pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
>
```

Stagger children with `variants` and `staggerChildren: 0.08`.

### Shiki Code Blocks

Use `codeToHtml` from `shiki` with theme `github-dark-dimmed` or `vesper`. Wrap in a component:

```tsx
// components/ui/CodeBlock.tsx
import { codeToHtml } from 'shiki'

export async function CodeBlock({ code, lang }: { code: string; lang: string }) {
  const html = await codeToHtml(code, { lang, theme: 'vesper' })
  return (
    <div
      className="rounded-lg overflow-hidden text-sm"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
```

### Tailwind Config

Extend Tailwind with CSS variable references:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      bg:        'var(--color-bg)',
      surface:   'var(--color-surface)',
      'surface-2': 'var(--color-surface-2)',
      border:    'var(--color-border)',
      accent:    'var(--color-accent)',
      highlight: 'var(--color-highlight)',
      primary:   'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
    },
    fontFamily: {
      display: ['Syne', 'sans-serif'],
      body:    ['DM Sans', 'sans-serif'],
      mono:    ['JetBrains Mono', 'monospace'],
    },
  },
}
```

### Dot Grid Background

Add to `Hero.tsx`:

```css
.dot-grid {
  background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
  background-size: 28px 28px;
  opacity: 0.4;
}
```

### Responsive Breakpoints

- Mobile: single column throughout
- `md` (768px): 2 columns for feature cards, comparison table side-by-side
- `lg` (1024px): full desktop layout
- Max content width: `1200px`, centered with `mx-auto px-6`

---

## Explicit Don'ts

- No purple color anywhere
- No hero images with people or stock photos
- No generic card hover effects (scale up) — use border color change + subtle glow instead
- No rounded-full buttons — use `rounded-md` (6–8px) only
- No Inter or Roboto
- No cookie-cutter SaaS pricing tables
- No Web3 jargon (no "WAGMI", no "alpha", no moon references)
- Don't invent features not in the blueprint

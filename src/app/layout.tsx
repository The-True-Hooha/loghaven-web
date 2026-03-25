import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const BASE_URL = "https://loghaven.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "LogHaven — Local-First Observability Runtime",
    template: "%s | LogHaven",
  },
  description:
    "One agent. Any chain. Full control. Local-first observability for onchain and off-chain systems — no vendor lock-in, no ingestion fees, no surprises.",
  keywords: [
    "observability",
    "blockchain",
    "local-first",
    "ethereum",
    "solana",
    "monitoring",
    "open source",
    "logs",
    "traces",
  ],
  authors: [{ name: "LogHaven", url: BASE_URL }],
  creator: "LogHaven",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "LogHaven",
    title: "LogHaven — Local-First Observability Runtime",
    description:
      "One agent. Any chain. Full control. Local-first observability for onchain and off-chain systems — no vendor lock-in, no ingestion fees, no surprises.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "LogHaven — Local-First Observability Runtime",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LogHaven — Local-First Observability Runtime",
    description:
      "One agent. Any chain. Full control. Local-first observability for onchain and off-chain systems — no vendor lock-in, no ingestion fees, no surprises.",
    images: ["/og.png"],
    creator: "@loghaven",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}

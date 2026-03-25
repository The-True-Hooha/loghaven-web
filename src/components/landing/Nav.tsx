"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Docs", href: "https://docs.loghaven.dev" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Install", href: "/#install" },
];

interface NavProps {
  stars?: number;
}

export default function Nav({ stars }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function formatStars(n: number): string {
    if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
    return String(n);
  }

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "56px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          backgroundColor:
            scrolled || menuOpen ? "rgba(7, 11, 15, 0.95)" : "transparent",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid #1E2A35"
              : "1px solid transparent",
          transition: "background-color 0.25s ease, border-color 0.25s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: "#E6E1D8",
              textDecoration: "none",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: "7px",
              zIndex: 51,
            }}
          >
            <span style={{ color: "#2BFFB0", fontSize: "1rem" }}>◈</span>
            LogHaven
          </Link>

          {/* Center links — desktop only */}
          <div
            style={{
              alignItems: "center",
              gap: "28px",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  color: "#7A8899",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E6E1D8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7A8899")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right — desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* OSS badge */}
            <span
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6875rem",
                color: "#2BFFB0",
                backgroundColor: "rgba(43,255,176,0.08)",
                border: "1px solid rgba(43,255,176,0.2)",
                padding: "3px 8px",
                borderRadius: "4px",
                letterSpacing: "0.04em",
              }}
              className="hidden sm:inline"
            >
              Open Source
            </span>

            {/* GitHub star count */}
            <a
              href="https://github.com/The-True-Hooha/loghaven"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontWeight: 400,
                fontSize: "0.8125rem",
                color: "#7A8899",
                textDecoration: "none",
                padding: "6px 12px",
                border: "1px solid #1E2A35",
                borderRadius: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.15s ease, border-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#E6E1D8";
                e.currentTarget.style.borderColor = "#2A3A48";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#7A8899";
                e.currentTarget.style.borderColor = "#1E2A35";
              }}
              className="hidden sm:inline-flex"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ opacity: 0.7 }}
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              {stars != null ? (
                <span>{formatStars(stars)} ★</span>
              ) : (
                <span>GitHub ★</span>
              )}
            </a>

            {/* CTA — desktop */}
            <Link
              href="/#install"
              style={{
                fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.8125rem",
                color: "#070B0F",
                textDecoration: "none",
                padding: "7px 16px",
                backgroundColor: "#FF6B35",
                borderRadius: "2px",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              className="hidden sm:inline-flex"
            >
              Get Started →
            </Link>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex sm:hidden cursor-pointer p-1.5 flex-col gap-1.25 z-51 bg-none border-0"
            >
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  backgroundColor: "#E6E1D8",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? "translateY(6.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  backgroundColor: "#E6E1D8",
                  transition: "opacity 0.2s ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  backgroundColor: "#E6E1D8",
                  transition: "transform 0.2s ease, opacity 0.2s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "56px",
              left: 0,
              right: 0,
              zIndex: 49,
              backgroundColor: "rgba(7, 11, 15, 0.97)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid #1E2A35",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
            className="flex sm:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    color: "#7A8899",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "1px solid #1E2A35",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E6E1D8")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#7A8899")
                  }
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTAs */}
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "16px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/#install"
                onClick={() => setMenuOpen(false)}
                style={{
                  flex: 1,
                  fontFamily: "var(--font-body), 'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#070B0F",
                  textDecoration: "none",
                  padding: "11px 20px",
                  backgroundColor: "#FF6B35",
                  borderRadius: "6px",
                  textAlign: "center",
                }}
              >
                Get Started →
              </Link>
              <a
                href="https://github.com/The-True-Hooha/loghaven"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                  fontSize: "0.8125rem",
                  color: "#7A8899",
                  textDecoration: "none",
                  padding: "11px 20px",
                  border: "1px solid #1E2A35",
                  borderRadius: "6px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub ★
              </a>
            </div>

            {/* OSS tag */}
            <p
              style={{
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "#3D4E5E",
                letterSpacing: "0.08em",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              MIT Licensed · Free & Open Source
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

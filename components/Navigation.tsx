"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import EZEEmblemSVG from "./3D/EZEEmblemSVG";
import Button from "./UI/Button";
import { links } from "@/config/links";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "STREAM", href: "#stream" },
  { label: "WATCH", href: "#watch" },
  { label: "SHOP", href: "#gear" },
  { label: "APP", href: "#fitmate" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${scrolled
            ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-border/50"
            : "bg-transparent"
          }
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="#home"
              className="flex items-center gap-2.5 group"
              aria-label="EZE IRL Home"
            >
              <EZEEmblemSVG size={32} color="#c9a84c" animated={false} />
              <span
                className="text-brand-white font-display text-xl tracking-widest group-hover:text-brand-gold transition-colors duration-200"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" }}
              >
                EZE IRL
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8" role="list" aria-hidden={menuOpen}>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-brand-muted hover:text-brand-white text-xs font-semibold tracking-widest transition-colors duration-200 uppercase"
                  role="listitem"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="primary" size="sm" href={links.joinMovement}>
                JOIN IRL
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-brand-white p-2"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              <div className="flex flex-col gap-1.5 w-6">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block h-px bg-brand-white origin-center"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-px bg-brand-white"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block h-px bg-brand-white origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-brand-black/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-4 text-brand-white p-2 hover:text-brand-gold transition-colors"
              aria-label="Close mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-brand-white text-3xl font-display tracking-widest hover:text-brand-gold transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08 }}
              className="mt-4"
            >
              <Button
                variant="primary"
                size="lg"
                href={links.joinMovement}
                onClick={() => setMenuOpen(false)}
              >
                JOIN IRL
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

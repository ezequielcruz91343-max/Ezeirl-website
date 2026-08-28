"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import Button from "./UI/Button";

const gearCategories = [
  {
    id: "apparel",
    title: "APPAREL",
    subtitle: "PERFORMANCE CLOTHING",
    accent: "#c9a84c",
    items: ["Performance Shirts", "Hoodies", "Shorts", "Hats"],
    description:
      "Built for the gym. Worn everywhere else. Performance fabrics that move with you and look like they belong on a set.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M4 8L11 4H21L28 8V12L24 14V28H8V14L4 12V8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "training",
    title: "TRAINING GEAR",
    subtitle: "PERFORMANCE ACCESSORIES",
    accent: "#cc0000",
    items: ["Lifting Straps", "Wraps", "Belts", "Bottles", "Gym Bags"],
    description:
      "The tools that make the training possible. Everything in this category has been used, tested, and earned its place in the routine.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="26" y="14" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="6" y="10" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="22" y="10" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "accessories",
    title: "IRL ACCESSORIES",
    subtitle: "LIFESTYLE GEAR",
    accent: "#c9a84c",
    items: ["Daily-Carry", "Lifestyle Gear", "Future Branded Items"],
    description:
      "Beyond the gym. Products built around how EZE IRL actually lives — from training to travel to everything in between.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M16 8V16L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

function TiltCard({ category, index }: { category: typeof gearCategories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${category.accent}15`
            : "0 4px 20px rgba(0,0,0,0.3)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative border border-brand-border bg-brand-card/20 p-6 sm:p-8 overflow-hidden cursor-default h-full transition-shadow duration-300"
      >
        {/* Corner accent bar */}
        <div
          className="absolute top-0 left-0 w-full h-0.5"
          style={{
            background: `linear-gradient(to right, ${category.accent}, transparent)`,
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.3s",
          }}
          aria-hidden="true"
        />

        {/* Icon */}
        <div
          className="mb-5 transition-all duration-300"
          style={{ color: category.accent }}
        >
          {category.icon}
        </div>

        {/* Title */}
        <h3
          className="text-brand-white text-2xl sm:text-3xl mb-1 font-display tracking-widest"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {category.title}
        </h3>
        <p
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: category.accent }}
        >
          {category.subtitle}
        </p>

        {/* Description */}
        <p className="text-brand-muted text-sm leading-relaxed mb-6">
          {category.description}
        </p>

        {/* Item list */}
        <ul className="space-y-1.5 mb-6" aria-label={`${category.title} items`}>
          {category.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs text-brand-subtle font-mono uppercase tracking-wider"
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: category.accent }}
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        {/* Coming soon badge */}
        <div
          className="inline-flex items-center gap-2 border px-3 py-1.5 text-xs font-mono tracking-widest uppercase"
          style={{
            borderColor: `${category.accent}40`,
            color: category.accent,
            background: `${category.accent}08`,
          }}
          aria-label="Coming soon"
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: category.accent }} aria-hidden="true" />
          COMING SOON
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GearSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      id="gear"
      className="py-24 sm:py-32 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #0d0d0d, #0a0a0a)" }}
      aria-labelledby="gear-heading"
    >
      {/* Section top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }}
        aria-hidden="true"
      />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={headerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="block text-brand-gold text-xs font-mono tracking-[0.3em] uppercase mb-4"
            >
              EZE GEAR
            </motion.span>
            <motion.h2
              id="gear-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-brand-white leading-[0.92] font-display"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(40px, 8vw, 90px)",
                letterSpacing: "0.02em",
              }}
            >
              BUILT FOR
              <br />
              <span className="text-brand-gold">REAL LIFE.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-brand-muted text-sm max-w-xs leading-relaxed sm:text-right"
          >
            Every product in the EZE IRL line is tested in real training and real life before it
            earns a spot in the catalog.
          </motion.p>
        </div>

        {/* Product cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          role="list"
          aria-label="EZE Gear categories"
        >
          {gearCategories.map((cat, i) => (
            <div key={cat.id} role="listitem">
              <TiltCard category={cat} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-brand-subtle text-xs font-mono tracking-widest uppercase mb-6">
            Full catalog launching soon — be first to know
          </p>
          <Button variant="gold" size="lg" href="#community">
            JOIN THE WAITLIST
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

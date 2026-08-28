"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import Button from "./UI/Button";
import { links } from "@/config/links";

const appScreens = [
  { id: "dashboard", label: "WORKOUT DASHBOARD", color: "#cc0000" },
  { id: "coach", label: "AI COACH", color: "#c9a84c" },
  { id: "analytics", label: "PROGRESS ANALYTICS", color: "#888" },
];

const features = [
  { label: "Personalized Programs", description: "Training built around your goals, equipment, and recovery." },
  { label: "AI Coaching", description: "Real-time form feedback and adaptive programming." },
  { label: "Progress Tracking", description: "Volume, strength, and body composition over time." },
  { label: "Muscle Visualization", description: "See exactly what you trained and what needs work." },
  { label: "Challenges & Streaks", description: "Compete. Stay accountable. Get rewarded." },
];

function PhoneMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 25 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 25 });

  const [activeScreen, setActiveScreen] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
      className="flex justify-center"
    >
      <motion.div
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Phone shell */}
        <div
          className="relative w-52 sm:w-64 rounded-[2.5rem] border border-brand-border/80 overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1e1e1e, #111111)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-brand-black rounded-b-2xl z-10" aria-hidden="true" />

          {/* Screen */}
          <div className="aspect-[9/19.5] relative overflow-hidden bg-brand-black pt-7">
            {/* App screen placeholder */}
            <div
              className="absolute inset-0 flex flex-col items-start p-4 pt-10"
              data-placeholder={`app-screen-${appScreens[activeScreen].id}`}
            >
              {/* Status bar */}
              <div className="flex justify-between w-full mb-4 opacity-40">
                <span className="text-brand-white text-[8px] font-mono">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-1.5 bg-brand-white rounded-sm" />
                  <div className="w-1 h-1.5 bg-brand-white/50 rounded-sm" />
                </div>
              </div>

              {/* App header */}
              <div className="w-full mb-4">
                <p className="text-[9px] font-mono tracking-widest uppercase" style={{ color: appScreens[activeScreen].color }}>
                  EZE IRL APP
                </p>
                <p className="text-brand-white text-sm font-display tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {appScreens[activeScreen].label}
                </p>
              </div>

              {/* Placeholder screen content */}
              <div className="w-full space-y-2 flex-1">
                {/* Metric cards */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-brand-card/80 rounded-lg p-2">
                    <p className="text-brand-muted text-[7px] font-mono uppercase tracking-wider mb-1">Volume</p>
                    <p className="text-brand-white text-sm font-bold">—</p>
                  </div>
                  <div className="bg-brand-card/80 rounded-lg p-2">
                    <p className="text-brand-muted text-[7px] font-mono uppercase tracking-wider mb-1">PRs</p>
                    <p className="text-brand-white text-sm font-bold">—</p>
                  </div>
                </div>

                {/* Progress bar placeholder */}
                <div className="bg-brand-card/80 rounded-lg p-3">
                  <p className="text-brand-muted text-[7px] font-mono uppercase tracking-wider mb-2">Week Progress</p>
                  <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: appScreens[activeScreen].color }}
                      initial={{ width: "0%" }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Exercise list placeholder */}
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-brand-card/40 rounded-lg p-2 flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-brand-border/40 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="h-1.5 bg-brand-border/60 rounded w-3/4 mb-1" />
                      <div className="h-1 bg-brand-border/30 rounded w-1/2" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom nav */}
              <div className="w-full flex justify-around pt-3 border-t border-brand-border/30 mt-3">
                {["◉", "◈", "◆", "◇"].map((icon, i) => (
                  <span
                    key={i}
                    className="text-xs"
                    style={{ color: i === 0 ? appScreens[activeScreen].color : "#555" }}
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="h-6 flex items-center justify-center" aria-hidden="true">
            <div className="w-20 h-0.5 bg-brand-white/20 rounded-full" />
          </div>
        </div>

        {/* Glow under phone */}
        <div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-2xl opacity-40"
          style={{ background: "#cc0000" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Screen selector dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {appScreens.map((screen, i) => (
          <button
            key={screen.id}
            onClick={() => setActiveScreen(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-200"
            style={{
              backgroundColor: i === activeScreen ? "#cc0000" : "#333",
              transform: i === activeScreen ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`View ${screen.label} screen`}
            aria-pressed={i === activeScreen}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function AppSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="fitmate"
      ref={sectionRef}
      className="py-24 sm:py-32 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0a0a0a, #0c0809, #0a0a0a)" }}
      aria-labelledby="app-heading"
    >
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(139,0,0,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-0 left-0 right-0 h-px opacity-15"
        style={{ background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-16 sm:mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="block text-brand-red text-xs font-mono tracking-[0.3em] uppercase mb-4"
          >
            EZE FITNESS APP
          </motion.span>
          <motion.h2
            id="app-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-brand-white leading-[0.92] font-display mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 8vw, 90px)",
              letterSpacing: "0.02em",
            }}
          >
            TRAIN WITH EZE
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <p className="text-brand-muted text-base sm:text-lg font-light">
              YOUR TRAINING. YOUR PROGRESS. YOUR AI COACH.
            </p>
          </motion.div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center relative pb-12"
          >
            <PhoneMockup />
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <ul className="space-y-5 mb-10" aria-label="App features">
              {features.map((f, i) => (
                <motion.li
                  key={f.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex gap-4 items-start group"
                >
                  <div
                    className="flex-shrink-0 w-1 h-1 rounded-full mt-2 bg-brand-red group-hover:scale-150 transition-transform duration-200"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-brand-white text-sm font-semibold mb-0.5">{f.label}</p>
                    <p className="text-brand-muted text-sm leading-relaxed">{f.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            {/* Coming soon badge */}
            <div
              className="inline-flex items-center gap-2 border border-brand-red/40 px-3 py-1.5 mb-6"
              aria-label="App status"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" aria-hidden="true" />
              <span className="text-brand-red text-xs font-mono tracking-widest uppercase">
                COMING SOON
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href={links.joinBeta}>
                JOIN THE BETA
              </Button>
              <Button variant="ghost" size="lg" href={links.seeApp}>
                SEE THE APP
              </Button>
            </div>

            <p className="mt-6 text-brand-subtle text-xs font-mono leading-relaxed">
              App screenshots and store links will be added at launch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

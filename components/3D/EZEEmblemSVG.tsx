"use client";

import { motion } from "framer-motion";

interface EZEEmblemSVGProps {
  size?: number;
  color?: string;
  className?: string;
  animated?: boolean;
}

export default function EZEEmblemSVG({
  size = 120,
  color = "#f5f5f5",
  className = "",
  animated = true,
}: EZEEmblemSVGProps) {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const svgContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="EZE IRL Emblem"
      role="img"
    >
      {/* Outer hexagonal ring */}
      <polygon
        points="50,4 92,27 92,73 50,96 8,73 8,27"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.15"
      />
      {/* Inner hexagon */}
      <polygon
        points="50,14 84,32 84,68 50,86 16,68 16,32"
        stroke={color}
        strokeWidth="0.5"
        fill="none"
        opacity="0.1"
      />

      {/* Bold E letterform — geometric, clean */}
      {/* Vertical spine */}
      <rect x="30" y="28" width="8" height="44" fill={color} />
      {/* Top bar */}
      <rect x="30" y="28" width="32" height="8" fill={color} />
      {/* Middle bar */}
      <rect x="30" y="46" width="26" height="8" fill={color} />
      {/* Bottom bar */}
      <rect x="30" y="64" width="32" height="8" fill={color} />

      {/* Corner accents */}
      <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.4" />
    </svg>
  );

  if (!animated) return svgContent;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {svgContent}
    </motion.div>
  );
}

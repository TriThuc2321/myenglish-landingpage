"use client";

import { motion } from "motion/react";

export function Star({
  className,
  size = 28,
  color = "var(--sunshine)",
  stroke = "var(--ink)",
}: {
  className?: string;
  size?: number;
  color?: string;
  stroke?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z"
        fill={color}
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({
  className,
  size = 18,
  color = "var(--brand-red)",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z"
        fill={color}
      />
    </svg>
  );
}

export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 120"
      fill="none"
      aria-hidden
    >
      <motion.path
        d="M6 10 C 40 28, 60 58, 50 92 C 44 112, 74 118, 110 96 C 128 84, 140 66, 148 44"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <motion.path
        d="M136 30 L 150 44 L 134 52"
        stroke="var(--ink)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export function Underline({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 24"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 14 C 60 4, 140 22, 258 8"
        stroke="var(--brand-red)"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function CircleBadge({
  text,
  className,
  size = 160,
}: {
  text: string;
  className?: string;
  size?: number;
}) {
  const id = `circlePath-${text.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 rounded-full bg-[var(--ink)]" />
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full animate-spin-slow"
        >
          <defs>
            <path
              id={id}
              d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
            />
          </defs>
          <text
            fill="var(--paper)"
            fontSize="18"
            fontFamily="var(--font-display)"
            fontStyle="italic"
            letterSpacing="2"
          >
            <textPath href={`#${id}`}>{text}</textPath>
          </text>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <Sparkle size={32} color="var(--sunshine)" />
        </div>
      </div>
    </div>
  );
}

export function Tape({
  className,
  rotate = 0,
  color = "var(--sunshine)",
}: {
  className?: string;
  rotate?: number;
  color?: string;
}) {
  return (
    <div
      className={className}
      style={{
        transform: `rotate(${rotate}deg)`,
        background: color,
      }}
    >
      <div
        aria-hidden
        className="h-full w-full opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.1) 0 6px, transparent 6px 12px)",
        }}
      />
    </div>
  );
}

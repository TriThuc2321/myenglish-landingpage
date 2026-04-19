"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import logo from "@/assets/images/logo.png";

const NAV_ITEMS = [
  { label: "Về MyEnglish", href: "#about" },
  { label: "Chương trình", href: "#programs" },
  { label: "Hoạt động", href: "#activities" },
  { label: "Vinh danh", href: "#honor" },
  { label: "Khai giảng", href: "#openings" },
  { label: "Liên hệ", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="sticky top-0 z-50"
    >
      <div
        className={`transition-[padding,background,backdrop-filter] duration-300 ${
          scrolled
            ? "py-2 bg-[color:var(--paper)]/85 backdrop-blur-md border-b border-[color:var(--ink)]/10"
            : "py-4 bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-5 lg:px-10 flex items-center justify-between gap-6">
          <Link
            href="#top"
            className="group flex items-center gap-3 shrink-0"
          >
            <span className="relative inline-block h-11 w-11 overflow-hidden rounded-full ring-2 ring-[color:var(--ink)] bg-white">
              <Image
                src={logo}
                alt="MyEnglish"
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display italic text-xl text-[color:var(--brand-red)]">
                MyEnglish
              </span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--ink-soft)]">
                Better English · Better Life
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 rounded-full border border-[color:var(--ink)]/15 bg-[color:var(--paper-soft)]/70 backdrop-blur px-2 py-1.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative inline-flex items-center px-3.5 py-1.5 text-sm font-medium text-[color:var(--ink)] transition-colors hover:text-[color:var(--brand-red)]"
                >
                  <span className="absolute inset-0 scale-90 rounded-full bg-[color:var(--ink)] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-10" />
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-5 py-2.5 text-sm font-semibold text-[color:var(--paper)] shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--ink)] active:translate-y-0"
            >
              Đăng ký
              <span aria-hidden className="text-[color:var(--sunshine)]">
                ★
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Mở menu"
              aria-expanded={open}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ink)]/20 bg-[color:var(--paper-soft)]"
            >
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                aria-hidden
              >
                <motion.path
                  animate={open ? { d: "M2 2 L 18 12" } : { d: "M2 2 L 18 2" }}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <motion.path
                  animate={
                    open ? { opacity: 0 } : { opacity: 1, d: "M2 7 L 18 7" }
                  }
                  d="M2 7 L 18 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <motion.path
                  animate={
                    open ? { d: "M2 12 L 18 2" } : { d: "M2 12 L 18 12" }
                  }
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <ul className="mx-5 mt-3 rounded-2xl border border-[color:var(--ink)]/15 bg-[color:var(--paper-soft)] p-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 font-medium hover:bg-[color:var(--paper-deep)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-display italic text-sm text-[color:var(--brand-red)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.header>
  );
}

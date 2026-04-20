"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { logos, site } from "@/app/_data/assets";

const links = [
  { id: "programs", label: "Chương trình" },
  { id: "activities", label: "Hoạt động" },
  { id: "posters", label: "Khai giảng" },
  { id: "honor", label: "Vinh danh" },
  { id: "about", label: "Về MyEnglish" },
  { id: "contact", label: "Liên hệ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-[0_4px_20px_-12px_rgba(15,16,32,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 py-3">
        <a
          href="#top"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label={site.name}
        >
          <div className="relative h-10 w-10 rounded-full grid place-items-center overflow-hidden transition">
            <Image
              src={logos.horizontal}
              alt=""
              className="h-8 w-8 object-contain"
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-secondary">
              {site.name}
            </span>
            <span className="font-script text-[13px] text-primary -mt-0.5">
              Better English, Better Life
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="px-3 py-2 text-sm font-medium text-secondary/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.hotlines[0].replace(/\s/g, "")}`}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary transition-colors"
          >
            <span className="grid place-items-center h-9 w-9 rounded-full bg-primary/10 text-primary">
              <PhoneIcon />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] font-normal text-secondary/60 uppercase tracking-wider">
                Hotline
              </span>
              {site.hotlines[0]}
            </span>
          </a>

          <Button
            as="a"
            href="#contact"
            color="primary"
            radius="full"
            className="font-semibold shadow-[0_8px_24px_-8px_rgba(207,36,44,0.6)] hidden sm:inline-flex"
          >
            Đăng ký học thử
          </Button>

          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-secondary/15 text-secondary"
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-2 text-secondary font-medium border-b border-black/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${site.hotlines[0].replace(/\s/g, "")}`}
                className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <PhoneIcon /> {site.hotlines.join(" — ")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={open ? "M6 6L18 18M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Nav;

"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { SITE } from "@/data/site";
import { logo } from "@/lib/images";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const links = SITE.navigation;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#") || href === "#") return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerOffset = headerRef.current?.offsetHeight ?? 0;
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", href);
      }
      setOpen(false);
    },
    []
  );

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-[0_4px_20px_-12px_rgba(15,16,32,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 py-3 gap-3">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.replaceState(null, "", " ");
            setOpen(false);
          }}
          className="flex items-center gap-2.5 group shrink-0"
          aria-label={SITE.brand.name}
        >
          <div className="relative h-10 w-10 rounded-full grid place-items-center overflow-hidden transition">
            <Image
              src={logo}
              alt=""
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
              style={{ width: "auto", height: "2rem" }}
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col leading-none min-w-0">
            <span className="font-display text-lg font-bold tracking-tight text-secondary truncate">
              {SITE.brand.name}
            </span>
            <span className="font-script text-[13px] text-primary -mt-0.5 truncate">
              {SITE.brand.tagline}
            </span>
          </div>
        </a>

        <nav className="hidden xl:flex items-center flex-wrap justify-end gap-x-0.5 gap-y-1 max-w-[60%] 2xl:max-w-none">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="px-2.5 py-1.5 text-sm font-medium text-secondary/80 hover:text-primary transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-2.5 right-2.5 -bottom-0.5 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Button
            as="a"
            href="#contact"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick={((e: any) => handleNavClick(e, "#contact")) as any}
            color="primary"
            radius="full"
            className="font-semibold shadow-[0_8px_24px_-8px_rgba(207,36,44,0.6)] hidden sm:inline-flex"
          >
            Đăng ký ngay
          </Button>

          <button
            type="button"
            aria-label="Mở menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden grid place-items-center h-10 w-10 rounded-full border border-secondary/15 text-secondary"
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
            className="xl:hidden overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur"
          >
            <div className="container mx-auto py-4 flex flex-col gap-0.5 max-h-[70vh] overflow-y-auto">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="py-2.5 px-2 text-secondary font-medium border-b border-black/5 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`tel:${SITE.contact.hotlines[0].replace(/\s/g, "")}`}
                className="mt-2 flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <PhoneIcon /> {SITE.contact.hotlines.join(" — ")}
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

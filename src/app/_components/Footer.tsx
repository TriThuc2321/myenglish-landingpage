"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import logoVertical from "@/assets/images/logo_vertical.png";

export function Footer() {
  return (
    <footer className="relative bg-[color:var(--ink)] text-[color:var(--paper)] pt-20 pb-10 overflow-hidden">
      {/* Giant background type */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-x-0 -bottom-8 text-center font-display italic text-[18vw] leading-[0.8] text-[color:var(--paper)]/[0.06] whitespace-nowrap"
      >
        MyEnglish
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <Link href="#top" className="inline-flex items-center gap-4">
              <span className="relative h-16 w-16 rounded-2xl bg-[color:var(--paper)] overflow-hidden">
                <Image
                  src={logoVertical}
                  alt="MyEnglish"
                  fill
                  sizes="64px"
                  className="object-contain p-1.5"
                />
              </span>
              <span className="font-display italic text-3xl">MyEnglish</span>
            </Link>
            <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-[color:var(--paper)]/70">
              Trung tâm Anh ngữ MyEnglish — nơi các em tiểu học ở Cần Thơ gặp
              tiếng Anh lần đầu, yêu tiếng Anh trọn đời.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--paper)]/60">
              Khám phá
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { href: "#about", label: "Về MyEnglish" },
                { href: "#programs", label: "Chương trình" },
                { href: "#activities", label: "Hoạt động" },
                { href: "#honor", label: "Vinh danh" },
                { href: "#openings", label: "Khai giảng" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[color:var(--paper)]/80 hover:text-[color:var(--sunshine)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--paper)]/60">
              Liên hệ
            </p>
            <ul className="mt-4 space-y-3 text-[color:var(--paper)]/80">
              <li>
                <Link
                  href="tel:0907188212"
                  className="font-display italic text-xl hover:text-[color:var(--sunshine)]"
                >
                  0907 188 212
                </Link>
                <span className="mx-2 opacity-40">/</span>
                <Link
                  href="tel:0939039947"
                  className="font-display italic text-xl hover:text-[color:var(--sunshine)]"
                >
                  0939 039 947
                </Link>
              </li>
              <li className="text-sm leading-relaxed">
                37A Lê Hồng Phong, p. Thới An Đông,
                <br />
                TP. Cần Thơ
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/mye2021"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[color:var(--brand-red)] decoration-2 underline-offset-4 hover:text-[color:var(--sunshine)]"
                >
                  facebook.com/mye2021
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[color:var(--paper)]/15 pt-8 text-xs text-[color:var(--paper)]/55">
          <p>© {new Date().getFullYear()} MyEnglish — Better English, Better Life.</p>
          <p className="font-script text-base text-[color:var(--sunshine)]">
            made with ♥ in Cần Thơ
          </p>
        </div>
      </div>
    </footer>
  );
}

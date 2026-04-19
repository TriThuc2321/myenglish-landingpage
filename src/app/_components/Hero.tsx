"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import activity1 from "@/assets/images/hoat_dong/1.jpg";
import activity2 from "@/assets/images/hoat_dong/2.jpg";
import activity4 from "@/assets/images/hoat_dong/4.jpg";
import { CircleBadge, ScribbleArrow, Sparkle, Star, Tape } from "./Decor";

const headlineWords = [
  { text: "Better", italic: false, color: "var(--ink)" },
  { text: "English.", italic: false, color: "var(--ink)" },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};
const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative color blocks */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-20 h-[420px] w-[420px] rounded-full bg-[color:var(--brand-red)]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-[440px] w-[440px] rounded-full bg-[color:var(--brand-indigo)]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10 pt-10 lg:pt-16 pb-20 lg:pb-32">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.32em] text-[color:var(--ink-soft)]"
        >
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" />
            Est. 2021 · Cần Thơ
          </span>
          <span className="hidden sm:inline">N° 001 — Ấn phẩm khai giảng</span>
          <span className="hidden md:inline">Mùa học 2026 · Tập 01</span>
          <span className="ml-auto hidden lg:flex items-center gap-2">
            <span>Tiếng Anh Tiểu Học</span>
            <span className="font-display italic text-[color:var(--brand-red)] text-base normal-case tracking-normal">
              &mdash; since day one
            </span>
          </span>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left: Headline + copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="col-span-12 lg:col-span-7 relative"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/20 bg-[color:var(--paper-soft)] px-3 py-1.5 text-xs font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-[color:var(--brand-red)] animate-pulse" />
              Tuyển sinh khóa mới · Giảm 20% học phí kỳ đầu
            </motion.div>

            <h1 className="mt-6 font-display text-[clamp(3.2rem,9vw,8rem)] leading-[0.92] tracking-[-0.03em] text-[color:var(--ink)]">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={i}
                  variants={item}
                  className="block"
                  style={{ color: w.color }}
                >
                  {w.text}
                </motion.span>
              ))}
              <motion.span
                variants={item}
                className="block italic text-[color:var(--brand-red)]"
                style={{ fontVariationSettings: '"SOFT" 100, "opsz" 144' }}
              >
                Better Life.
                <motion.span
                  aria-hidden
                  initial={{ scale: 0, rotate: -60 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 1.2,
                    type: "spring",
                    stiffness: 160,
                    damping: 12,
                  }}
                  className="inline-block ml-3 align-middle"
                >
                  <Star size={42} />
                </motion.span>
              </motion.span>
            </h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-[1.7] text-[color:var(--ink-soft)]"
            >
              Trung tâm Anh ngữ{" "}
              <span className="font-display italic text-[color:var(--brand-red)]">
                MyEnglish
              </span>{" "}
              tại Cần Thơ — nơi các em nhỏ khám phá ngôn ngữ qua trải nghiệm,
              chạm tới thế giới bằng sự tự tin và nuôi dưỡng tình yêu học tập
              trọn đời.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--ink)] px-7 py-4 text-base font-semibold text-[color:var(--paper)] shadow-[5px_5px_0_0_var(--brand-red)] transition-all hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--brand-red)]"
              >
                Đăng ký học thử miễn phí
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M1 7 L 16 7 M 10 1 L 16 7 L 10 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--ink)] px-6 py-[14px] text-base font-semibold text-[color:var(--ink)] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]"
              >
                Xem chương trình
              </Link>

              <div className="relative hidden md:block w-[140px] h-[92px]">
                <ScribbleArrow className="absolute inset-0 -rotate-6" />
                <span className="absolute -right-1 top-0 font-script text-xl text-[color:var(--ink)]">
                  bắt đầu ở đây!
                </span>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="mt-14 grid grid-cols-3 gap-4 max-w-xl border-t border-[color:var(--ink)]/15 pt-8"
            >
              {[
                { k: "500+", v: "Học viên mỗi năm" },
                { k: "4.9", v: "Điểm hài lòng PH" },
                { k: "5", v: "Năm bén duyên Cần Thơ" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl md:text-5xl text-[color:var(--brand-indigo)] tabular">
                    {s.k}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image composition */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[520px] lg:min-h-[640px]">
            {/* Main banner card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{
                duration: 1.1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="absolute top-0 left-0 right-0 mx-auto w-[88%] aspect-[4/5] rounded-3xl overflow-hidden border-[3px] border-[color:var(--ink)] bg-[color:var(--paper-soft)] shadow-bumper"
            >
              <Image
                src={activity2}
                alt="MyEnglish banner"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent p-5 text-[color:var(--paper)]">
                <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">
                  Chapter 01
                </p>
                <p className="font-display italic text-2xl leading-tight">
                  Một lớp học. <br />
                  Một gia đình.
                </p>
              </div>
              <Tape
                className="absolute -top-4 left-10 h-7 w-28"
                rotate={-6}
                color="var(--sunshine)"
              />
            </motion.div>

            {/* Polaroid 1 */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 12 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 1.1, delay: 0.8 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="absolute -right-2 lg:-right-8 top-16 w-[42%] max-w-[240px] p-2 pb-12 bg-[color:var(--paper-soft)] border border-[color:var(--ink)]/15 shadow-bumper-red"
            >
              <div className="relative aspect-square overflow-hidden bg-[color:var(--ink)]">
                <Image
                  src={activity1}
                  alt="Lớp học MyEnglish"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-script text-xl text-[color:var(--ink)] text-center">
                lớp của chúng mình ✦
              </p>
            </motion.div>

            {/* Polaroid 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 1.1, delay: 1.1 }}
              whileHover={{ rotate: -2, scale: 1.04 }}
              className="absolute left-0 bottom-0 w-[48%] max-w-[260px] p-2 pb-10 bg-[color:var(--paper-soft)] border border-[color:var(--ink)]/15 shadow-bumper-indigo"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--ink)]">
                <Image
                  src={activity4}
                  alt="Hoạt động trải nghiệm"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2 font-script text-lg text-[color:var(--ink)] text-center">
                học + chơi = vui!
              </p>
            </motion.div>

            {/* Circular badge */}
            <motion.div
              initial={{ scale: 0, rotate: -80 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 1.3,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              className="absolute right-4 lg:right-2 bottom-2 lg:bottom-10"
            >
              <CircleBadge
                text="MYENGLISH ★ BETTER ENGLISH ★ BETTER LIFE ★ "
                size={140}
              />
            </motion.div>

            {/* Floating sparkles */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8"
            >
              <Sparkle size={22} color="var(--sunshine)" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute top-40 left-2"
            >
              <Sparkle size={16} color="var(--brand-indigo)" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

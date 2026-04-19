"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Sparkle, Tape } from "./Decor";

import p1 from "@/assets/images/posters_khai_giang/1.jpg";
import p2 from "@/assets/images/posters_khai_giang/2.jpg";

const POSTERS = [
  {
    src: p1,
    eyebrow: "Khóa mới · Tiểu học",
    title: "Khai giảng mùa Xuân",
    meta: ["Lớp 1 — Lớp 3", "Thứ 2 · 4 · 6 · 17h30–19h00"],
    accent: "var(--brand-red)",
    rotate: -2,
  },
  {
    src: p2,
    eyebrow: "Khóa mới · Pre-A2",
    title: "Lớp bổ trợ kỹ năng",
    meta: ["Lớp 4 — Lớp 5", "Thứ 3 · 5 · 7 · 18h00–19h30"],
    accent: "var(--brand-indigo)",
    rotate: 2,
  },
];

export function Openings() {
  return (
    <section id="openings" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--ink-soft)]">
                <span className="h-px w-8 bg-[color:var(--ink)]" />§ 05 — Khai
                giảng
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.02em]">
                Giữ chỗ sớm —{" "}
                <span className="italic text-[color:var(--brand-red)]">
                  suất học giới hạn.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[17px] leading-[1.8] text-[color:var(--ink-soft)]">
              Mỗi lớp chỉ nhận <b>tối đa 12 em</b> để đảm bảo chất lượng học
              tập. Đăng ký sớm để nhận ưu đãi kỳ đầu và lộ trình riêng cho con.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {POSTERS.map((poster, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: poster.rotate }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 0, y: -6 }}
              className="group relative rounded-[28px] overflow-hidden border-2 border-[color:var(--ink)] bg-[color:var(--paper-soft)]"
              style={{
                boxShadow: `10px 10px 0 0 ${poster.accent}`,
              }}
            >
              <Tape
                className="absolute -top-3 left-16 h-6 w-28 z-10"
                rotate={i === 0 ? -6 : 6}
                color="var(--sunshine)"
              />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={poster.src}
                  alt={poster.title}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-3 py-1.5 text-xs font-semibold border-2 border-[color:var(--ink)]">
                  <Sparkle size={12} color={poster.accent} />
                  {poster.eyebrow}
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-display italic text-3xl lg:text-[40px] leading-[1] tracking-[-0.01em]">
                  {poster.title}
                </h3>
                <ul className="mt-5 space-y-2 text-[15px] text-[color:var(--ink-soft)]">
                  {poster.meta.map((m) => (
                    <li key={m} className="flex items-center gap-3">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: poster.accent }}
                      />
                      {m}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[color:var(--ink)] font-semibold group/link"
                  >
                    <span className="underline decoration-2 underline-offset-4 decoration-[color:var(--brand-red)] group-hover/link:decoration-[color:var(--ink)]">
                      Đăng ký lớp này
                    </span>
                    <span
                      aria-hidden
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                  <span className="font-script text-lg text-[color:var(--ink-soft)]">
                    còn {6 - i * 2} suất
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

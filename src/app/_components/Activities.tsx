"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Tape } from "./Decor";

import a1 from "@/assets/images/hoat_dong/1.jpg";
import a2 from "@/assets/images/hoat_dong/2.jpg";
import a3 from "@/assets/images/tieng_anh_tieu_hoc/1.jpg";
import a4 from "@/assets/images/hoat_dong/4.jpg";
import a6 from "@/assets/images/hoat_dong/6.jpg";

const ITEMS = [
  {
    src: a1,
    caption: "Storytelling Friday",
    rotate: -3,
    span: "col-span-6 row-span-2 lg:col-span-4 lg:row-span-2",
  },
  {
    src: a2,
    caption: "Halloween mini-play",
    rotate: 4,
    span: "col-span-6 lg:col-span-3",
  },
  {
    src: a3,
    caption: "Outdoor English",
    rotate: -2,
    span: "col-span-6 lg:col-span-5",
  },
  {
    src: a4,
    caption: "Reading corner",
    rotate: 3,
    span: "col-span-6 lg:col-span-3",
  },
  {
    src: a6,
    caption: "Field trip",
    rotate: -4,
    span: "col-span-6 lg:col-span-4",
  },
];

export function Activities() {
  return (
    <section id="activities" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--ink-soft)]">
                <span className="h-px w-8 bg-[color:var(--ink)]" />§ 03 — Hoạt
                động
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.95] tracking-[-0.02em]">
                Học vui —{" "}
                <span className="italic text-[color:var(--brand-red)]">
                  nhớ lâu.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="max-w-md">
            <p className="text-lg leading-[1.75] text-[color:var(--ink-soft)]">
              Mỗi tháng một chủ đề. Mỗi tuần một hoạt động. Những khoảnh khắc
              học trò ở MyEnglish — được lưu lại như một cuốn album tuổi thơ.
            </p>
          </Reveal>
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-12 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[240px] gap-4 lg:gap-5">
          {ITEMS.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 40, rotate: 0, scale: 0.96 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: it.rotate,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ rotate: 0, scale: 1.02, zIndex: 10 }}
              className={`group relative ${it.span} overflow-hidden rounded-2xl border-2 border-[color:var(--ink)] bg-paper-soft shadow-bumper`}
            >
              <Image
                src={it.src}
                alt={it.caption}
                fill
                sizes="(min-width:1024px) 30vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0 opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between text-[color:var(--paper)]">
                <span className="font-script text-xl leading-none">
                  {it.caption}
                </span>
                <span className="font-display italic text-sm opacity-80">
                  N° {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
              {i === 0 && (
                <Tape
                  className="absolute -top-3 left-8 h-6 w-24 z-10"
                  rotate={-6}
                />
              )}
              {i === 2 && (
                <Tape
                  className="absolute -top-3 right-8 h-6 w-20 z-10"
                  rotate={6}
                  color="var(--brand-red)"
                />
              )}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

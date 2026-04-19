"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Star } from "./Decor";

import v1 from "@/assets/images/vinh_danh/1.jpg";
import v2 from "@/assets/images/vinh_danh/2.jpg";
import v3 from "@/assets/images/vinh_danh/3.jpg";
import v4 from "@/assets/images/vinh_danh/4.jpg";
import v5 from "@/assets/images/vinh_danh/5.jpg";
import v6 from "@/assets/images/vinh_danh/6.jpg";
import v7 from "@/assets/images/vinh_danh/7.jpg";
import v8 from "@/assets/images/vinh_danh/8.jpg";

const HONORS = [v1, v2, v3, v4, v5, v6, v7, v8];
const TITLES = [
  "Cambridge Starters · 15/15",
  "Top 3 Spelling Bee",
  "IOE Cấp Tỉnh",
  "Flyers · Merit",
  "Movers · Distinction",
  "Lớp trưởng tiếng Anh",
  "Học sinh xuất sắc",
  "Best Storyteller",
];

export function Honor() {
  const row1 = [...HONORS, ...HONORS];
  return (
    <section
      id="honor"
      className="relative py-24 lg:py-32 bg-[color:var(--brand-indigo)] text-[color:var(--paper)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--paper)]/65">
                <span className="h-px w-8 bg-[color:var(--paper)]/65" />§ 04 —
                Vinh danh
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
                Những{" "}
                <span className="italic text-[color:var(--sunshine)]">
                  ngôi sao nhỏ
                </span>
                ,<br />
                thành tích lớn.
              </h2>
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[17px] leading-[1.8] text-[color:var(--paper)]/75">
              Chúng tôi tin rằng thành tích không phải là đích đến — mà là lời
              chúc mừng cho một chặng đường dám học, dám thử và dám sai của mỗi
              bạn nhỏ ở MyEnglish.
            </p>
          </Reveal>
        </div>

        {/* Infinite marquee of honor photos */}
        <div className="mt-16 lg:mt-20 -mx-5 lg:-mx-10 overflow-hidden">
          <div className="flex w-[200%] animate-marquee-slow gap-5 px-5 lg:px-10">
            {row1.map((img, i) => (
              <figure
                key={i}
                className="group relative shrink-0 w-[220px] sm:w-[260px] lg:w-[460px] aspect-4/3 rounded-2xl overflow-hidden border-2 border-[color:var(--paper)]/20 bg-black"
              >
                <Image
                  src={img}
                  alt={TITLES[i % TITLES.length]}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-2 text-[color:var(--paper)]">
                    <Star
                      size={18}
                      color="var(--sunshine)"
                      stroke="var(--sunshine)"
                    />
                    <span className="font-display italic text-sm leading-tight">
                      {TITLES[i % TITLES.length]}
                    </span>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl italic text-[color:var(--sunshine)] tabular">
              200+
            </span>
            <span className="text-sm uppercase tracking-[0.22em] text-[color:var(--paper)]/70 text-left">
              Học viên được
              <br />
              vinh danh
            </span>
          </div>
          <span className="h-10 w-px bg-[color:var(--paper)]/20" />
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl italic text-[color:var(--sunshine)] tabular">
              18
            </span>
            <span className="text-sm uppercase tracking-[0.22em] text-[color:var(--paper)]/70 text-left">
              Giải thưởng
              <br />
              cấp tỉnh, quốc gia
            </span>
          </div>
          <span className="h-10 w-px bg-[color:var(--paper)]/20 hidden md:block" />
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl italic text-[color:var(--sunshine)] tabular">
              100%
            </span>
            <span className="text-sm uppercase tracking-[0.22em] text-[color:var(--paper)]/70 text-left">
              Đạt chứng chỉ
              <br />
              Cambridge YLE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

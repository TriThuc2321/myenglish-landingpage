"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Mousewheel,
  Navigation,
} from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { Reveal } from "./Reveal";
import { Sparkle, Tape } from "./Decor";

import elementary1 from "@/assets/images/tieng_anh_tieu_hoc/1.jpg";
import elementary2 from "@/assets/images/tieng_anh_tieu_hoc/2.jpg";
import elementary3 from "@/assets/images/tieng_anh_tieu_hoc/3.jpg";
import elementary4 from "@/assets/images/tieng_anh_tieu_hoc/4.jpg";
import elementary5 from "@/assets/images/tieng_anh_tieu_hoc/5.jpg";

const IMAGES = [
  elementary1,
  elementary2,
  elementary3,
  elementary4,
  elementary5,
];

const OUTCOMES = [
  { k: "4 kỹ năng", v: "Nghe · Nói · Đọc · Viết cân bằng" },
  { k: "A1 → A2", v: "Theo khung CEFR cho 6–11 tuổi" },
  { k: "2 buổi/tuần", v: "Nhịp học đều, không quá tải" },
  { k: "PBL", v: "Project-based & Role-play hàng tuần" },
];

export function Programs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = IMAGES.length;
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <section
      id="programs"
      className="relative py-24 lg:py-32 bg-[color:var(--ink)] text-[color:var(--paper)] overflow-hidden"
    >
      {/* Dotted backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-red)]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--paper)]/60">
                <span className="h-px w-8 bg-[color:var(--paper)]/60" />§ 02 —
                Chương trình chủ lực
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
                Tiếng Anh{" "}
                <span className="italic text-[color:var(--sunshine)]">
                  Tiểu Học
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-[1.8] text-[color:var(--paper)]/75">
                Hành trang vững vàng cho các em{" "}
                <span className="font-display italic text-[color:var(--sunshine)]">
                  6–11 tuổi
                </span>
                : tình yêu với ngôn ngữ, tư duy phản biện bằng tiếng Anh, và
                thói quen học tập bền bỉ sẽ theo các em suốt chặng đường phía
                trước.
              </p>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.2}>
              <ul className="grid grid-cols-2 gap-4">
                {OUTCOMES.map((o) => (
                  <li
                    key={o.k}
                    className="rounded-2xl border border-[color:var(--paper)]/15 bg-[color:var(--paper)]/5 p-5 backdrop-blur-sm"
                  >
                    <div className="font-display italic text-2xl text-[color:var(--sunshine)]">
                      {o.k}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--paper)]/75">
                      {o.v}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Swiper — coverflow editorial carousel */}
        <Reveal delay={0.3} className="mt-16 lg:mt-24">
          <div className="relative">
            {/* Edge fades */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20 bg-gradient-to-r from-[color:var(--ink)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20 bg-gradient-to-l from-[color:var(--ink)] to-transparent"
            />

            <Swiper
              modules={[
                Navigation,
                Autoplay,
                EffectCoverflow,
                Keyboard,
                Mousewheel,
              ]}
              effect="coverflow"
              grabCursor
              centeredSlides
              rewind
              speed={900}
              autoplay={{
                delay: 3800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              keyboard={{ enabled: true }}
              mousewheel={{ forceToAxis: true, sensitivity: 0.6 }}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 8,
                stretch: 0,
                depth: 180,
                modifier: 1.4,
                slideShadows: false,
              }}
              navigation={{
                prevEl: ".programs-prev",
                nextEl: ".programs-next",
              }}
              onSlideChange={(s: SwiperClass) => setActiveIndex(s.realIndex)}
              className="programs-swiper"
            >
              {IMAGES.map((img, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[260px] sm:!w-[320px] lg:!w-[380px]"
                >
                  <motion.figure
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="programs-slide-card relative aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[color:var(--paper)]/15 bg-black"
                  >
                    <Image
                      src={img}
                      alt={`Tiếng Anh Tiểu Học ${i + 1}`}
                      fill
                      sizes="(min-width:1024px) 380px, (min-width:640px) 320px, 260px"
                      className="object-cover"
                      priority={i === 0}
                    />

                    {/* Lesson caption */}
                    <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                      <span
                        aria-hidden
                        className="programs-slide-rule block h-[2px] w-16 origin-left scale-x-0 bg-[color:var(--sunshine)] transition-transform duration-700"
                      />
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                          <span className="programs-slide-number font-display italic text-3xl leading-none text-[color:var(--paper)]/80 transition-colors">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--paper)]/70">
                            Lesson
                          </span>
                        </div>
                        <Sparkle size={18} color="var(--sunshine)" />
                      </div>
                    </div>

                    {i === 0 && (
                      <Tape
                        className="absolute -top-3 left-10 h-6 w-24"
                        rotate={-8}
                        color="var(--sunshine)"
                      />
                    )}
                    {i === 2 && (
                      <Tape
                        className="absolute -top-3 right-10 h-6 w-20"
                        rotate={6}
                        color="var(--brand-red)"
                      />
                    )}
                  </motion.figure>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Control rail */}
            <div className="relative z-30 mt-10 grid grid-cols-12 items-center gap-6">
              {/* Slide counter */}
              <div className="col-span-5 sm:col-span-3 flex items-baseline gap-3">
                <span
                  key={activeIndex}
                  className="font-display italic text-5xl sm:text-6xl leading-none text-[color:var(--sunshine)] inline-block"
                  style={{ animation: "programs-count 0.5s ease-out" }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-[color:var(--paper)]/40 font-display text-2xl">
                  /
                </span>
                <span className="font-display italic text-2xl text-[color:var(--paper)]/60">
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* Progress rail */}
              <div className="col-span-12 sm:col-span-6 order-last sm:order-none">
                <div className="flex items-center gap-4">
                  <span className="hidden sm:block text-[10px] uppercase tracking-[0.32em] text-[color:var(--paper)]/45">
                    Bài học
                  </span>
                  <div
                    className="programs-progress flex-1"
                    style={
                      {
                        ["--progress" as string]: `${progress}%`,
                      } as React.CSSProperties
                    }
                    role="progressbar"
                    aria-valuenow={activeIndex + 1}
                    aria-valuemin={1}
                    aria-valuemax={total}
                  />
                </div>
              </div>

              {/* Arrows */}
              <div className="col-span-7 sm:col-span-3 flex justify-end gap-3">
                <button
                  type="button"
                  aria-label="Bài học trước"
                  className="programs-prev group relative grid h-14 w-14 place-items-center rounded-full border border-[color:var(--paper)]/25 bg-transparent transition-all hover:border-[color:var(--sunshine)] hover:bg-[color:var(--sunshine)] hover:text-[color:var(--ink)]"
                >
                  <span className="transition-transform duration-500 group-hover:-translate-x-1">
                    <ArrowIcon direction="left" />
                  </span>
                </button>
                <button
                  type="button"
                  aria-label="Bài học sau"
                  className="programs-next group relative grid h-14 w-14 place-items-center rounded-full border border-[color:var(--paper)]/25 bg-[color:var(--brand-red)] text-[color:var(--paper)] transition-all hover:bg-[color:var(--sunshine)] hover:text-[color:var(--ink)] hover:border-[color:var(--sunshine)]"
                >
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowIcon direction="right" />
                  </span>
                  {/* Tape flourish on the primary control */}
                  <Tape
                    className="pointer-events-none absolute -top-2 -right-3 h-3 w-10"
                    rotate={18}
                    color="var(--sunshine)"
                  />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.4}
          className="mt-14 flex flex-wrap items-center justify-between gap-6"
        >
          <p className="font-script text-2xl text-[color:var(--sunshine)]">
            &ldquo; học mà như chơi — chơi mà hiểu sâu &rdquo;
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border-2 border-[color:var(--paper)] px-7 py-3.5 text-base font-semibold text-[color:var(--paper)] transition-colors hover:bg-[color:var(--paper)] hover:text-[color:var(--ink)]"
          >
            Nhận lộ trình cho con
            <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>

      {/* Inline keyframes used by the counter */}
      <style>{`
        @keyframes programs-count {
          0%   { transform: translateY(16px); opacity: 0; filter: blur(6px); }
          100% { transform: translateY(0);    opacity: 1; filter: blur(0); }
        }
      `}</style>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{
        transform: direction === "left" ? "rotate(180deg)" : undefined,
      }}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

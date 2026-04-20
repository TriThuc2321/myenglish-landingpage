"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import { vinhDanhImages } from "@/app/_data/assets";
import Reveal from "./Reveal";

export function Honor() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section
      id="honor"
      className="relative py-20 lg:py-28 bg-cream overflow-hidden"
      style={{ backgroundColor: "#fbf6ee" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-display font-bold text-xl text-primary">
              <span className="h-px w-8 bg-primary" />
              Vinh danh
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary max-w-2xl">
              Thành tích
              <span className="italic text-primary"> đáng tự hào</span>
              <br />
              của học viên.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Trước"
              onClick={() => swiperRef.current?.slidePrev()}
              className="swiper-nav-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Sau"
              onClick={() => swiperRef.current?.slideNext()}
              className="swiper-nav-btn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Reveal>
        </div>
      </div>

      <Reveal className="mt-14" delay={0.15}>
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={20}
          freeMode
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          className="!px-4 md:!px-8"
        >
          {vinhDanhImages.map((img, i) => (
            <SwiperSlide
              key={i}
              className="!w-[260px] sm:!w-[300px] lg:!w-[340px]"
            >
              <article className="group relative aspect-[10/7] rounded-[22px] overflow-hidden ring-1 ring-secondary/10 bg-white shadow-[0_20px_40px_-20px_rgba(15,16,32,0.3)]">
                <Image
                  src={img}
                  alt={`Vinh danh học viên ${i + 1}`}
                  fill
                  sizes="340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent opacity-90" />

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-display text-xl font-semibold drop-shadow">
                    Học viên MyEnglish
                  </div>
                  <div className="text-sm text-white/80">
                    Thành tích tiêu biểu
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
}

export default Honor;

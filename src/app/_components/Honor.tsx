"use client";

import Image from "next/image";

import { achievementImages } from "@/lib/images";
import Reveal from "./Reveal";

export function Achievements() {
  const loop = [...achievementImages, ...achievementImages];

  return (
    <section
      id="achievements"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#fbf6ee" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-display font-bold text-xl text-primary">
              <span className="h-px w-8 bg-primary" />
              Bảng vàng
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary max-w-2xl">
              Thành tích
              <span className="italic text-primary"> đáng tự hào</span>
            </h2>
            <p className="mt-4 text-secondary/70 max-w-lg">
              Chứng nhận, vinh danh học viên trên hành trình chinh phục
              Cambridge & IELTS.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-10 lg:mt-12 hidden lg:grid container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {achievementImages.map((img, i) => (
            <Reveal key={i} delay={0.04 * i}>
              <article className="group relative aspect-[10/7] rounded-[22px] overflow-hidden ring-1 ring-secondary/10 bg-white shadow-[0_20px_40px_-20px_rgba(15,16,32,0.3)]">
                <Image
                  src={img}
                  alt={`Thành tích học viên ${i + 1}`}
                  fill
                  sizes="(max-width: 1280px) 40vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-display text-lg font-semibold drop-shadow">
                    Học viên MYENGLISH
                  </div>
                  <div className="text-sm text-white/80">
                    Thành tích nổi bật
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 lg:mt-10 lg:hidden">
        <div className="flex overflow-x-auto gap-3 px-4 pb-3 snap-x snap-mandatory scrollbar-hide">
          {achievementImages.map((img, i) => (
            <div
              key={i}
              className="relative w-[72vw] max-w-[280px] h-[200px] shrink-0 rounded-[20px] overflow-hidden ring-1 ring-secondary/10 snap-start"
            >
              <Image
                src={img}
                alt={`Thành tích ${i + 1}`}
                fill
                className="object-cover"
                sizes="min(72vw, 280px)"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

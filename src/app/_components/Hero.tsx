"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { motion } from "motion/react";

import { SITE } from "@/data/site";
import {
  activitiesImages,
  communicationTopicImages,
  banner,
} from "@/lib/images";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-paper pt-6 md:pt-10 pb-20 lg:pb-28"
    >
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-dots pointer-events-none opacity-60"
        aria-hidden
      />
      <div
        className="absolute -top-16 -right-16 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-10 -left-24 w-[360px] h-[360px] rounded-full bg-secondary/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-secondary/15 text-secondary text-xs font-semibold uppercase tracking-[0.18em] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {SITE.brand.name} — Cần Thơ
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 font-display font-bold tracking-[-0.02em] text-balance text-[44px] leading-[1.02] sm:text-6xl lg:text-[72px] xl:text-[80px] text-secondary"
            >
              Better English,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-primary italic">
                  Better Life.
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute left-0 right-0 -bottom-1 h-3 bg-primary/20 origin-left z-0"
                  aria-hidden
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg text-secondary/75 leading-relaxed text-pretty"
            >
              {SITE.intro.lead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                as="a"
                href="#contact"
                color="primary"
                radius="full"
                size="lg"
                className="font-semibold px-7 shadow-[0_10px_28px_-10px_rgba(207,36,44,0.7)]"
              >
                Đăng ký học thử miễn phí
              </Button>
              <Button
                as="a"
                href="#programs"
                variant="bordered"
                radius="full"
                size="lg"
                className="font-semibold border-secondary/30 text-secondary data-[hover=true]:bg-secondary data-[hover=true]:text-white"
              >
                Chương trình chủ lực
                <ArrowIcon />
              </Button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-4 max-w-md"
            >
              <HeroStat kicker="Cambridge" value="K12 → KET" />
              <HeroStat kicker="IELTS" value="Pre → 6.5" />
              <HeroStat
                kicker="Hotline"
                value={SITE.contact.hotlines[0] ?? ""}
              />
            </motion.dl>
          </div>

          <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[620px]">
            <PhotoCollage />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ kicker, value }: { kicker: string; value: string }) {
  return (
    <div className="relative pl-4 border-l-2 border-primary">
      <dt className="text-[11px] uppercase tracking-[0.2em] text-secondary/60 font-semibold">
        {kicker}
      </dt>
      <dd className="mt-1 text-sm sm:text-base font-display font-semibold text-secondary">
        {value}
      </dd>
    </div>
  );
}

function PhotoCollage() {
  return (
    <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[620px] w-full max-w-[560px] ml-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-2 left-0 right-0 z-0 h-[200px] sm:h-[220px] rounded-[24px] overflow-hidden shadow-lg ring-8 ring-white opacity-90"
      >
        <Image
          src={banner}
          alt="MYENGLISH banner"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 90vw, 40vw"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-24 sm:top-28 left-0 z-10 w-[60%] sm:w-[58%] aspect-3/4 rounded-[28px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(47,51,138,0.35)] ring-8 ring-white"
      >
        <Image
          src={activitiesImages[0]}
          alt="Hoạt động trải nghiệm MyEnglish"
          fill
          sizes="(max-width: 1024px) 60vw, 30vw"
          className="object-cover"
          priority
          placeholder="blur"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-36 right-0 sm:right-0 z-20 w-[64%] sm:w-[62%] aspect-4/5 rounded-[28px] overflow-hidden shadow-[0_30px_60px_-20px_rgba(207,36,44,0.35)] ring-8 ring-white"
      >
        <Image
          src={communicationTopicImages[0]}
          alt="Giao tiếp theo chủ đề"
          fill
          sizes="(max-width: 1024px) 60vw, 30vw"
          className="object-cover"
          placeholder="blur"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="absolute top-32 right-2 sm:right-4 z-30 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-white font-semibold shadow-xl"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="text-sm tracking-wide">Đang tuyển sinh</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-0 left-2 sm:left-6 z-30 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 max-w-[280px]"
      >
        <div className="grid place-items-center h-10 w-10 rounded-xl bg-secondary text-white">
          <StarIcon />
        </div>
        <div className="leading-tight">
          <div className="font-display text-secondary font-semibold">
            Toàn diện mọi thế hệ
          </div>
          <div className="text-xs text-secondary/60">
            Thiếu nhi · IELTS · Giao tiếp
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="ml-1"
      aria-hidden
    >
      <path
        d="M5 12h14m0 0-6-6m6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l2.39 5.84L20.5 9.5l-4.75 4.14L17.1 20 12 16.9 6.9 20l1.35-6.36L3.5 9.5l6.11-.66L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Hero;

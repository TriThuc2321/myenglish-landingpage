"use client";

import Image from "next/image";

import { SITE } from "@/data/site";
import { visionBg } from "@/lib/images";
import Reveal from "./Reveal";

export function VisionMission() {
  return (
    <section
      id="vision"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-secondary/5" />
        <Image
          src={visionBg}
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/95 to-paper" />
      </div>

      <div className="container mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center justify-center gap-2 text-primary font-display font-bold text-xl">
            <span className="h-px w-8 bg-primary" />
            Tầm nhìn & Sứ mệnh
            <span className="h-px w-8 bg-primary" />
          </span>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Reveal>
            <article className="h-full p-8 sm:p-10 rounded-[28px] bg-white border border-secondary/10 shadow-[0_20px_50px_-30px_rgba(15,16,32,0.2)]">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-primary/90">
                {SITE.visionMission.vision.title}
              </div>
              <p className="mt-4 text-lg text-secondary/90 leading-relaxed">
                {SITE.visionMission.vision.text}
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="h-full p-8 sm:p-10 rounded-[28px] bg-secondary text-white shadow-[0_20px_50px_-30px_rgba(15,16,32,0.35)]">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-primary-300">
                {SITE.visionMission.mission.title}
              </div>
              <p className="mt-4 text-lg text-white/90 leading-relaxed">
                {SITE.visionMission.mission.text}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;

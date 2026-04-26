"use client";

import Image from "next/image";

import { SITE } from "@/data/site";
import { founderPhoto } from "@/lib/images";
import Reveal from "./Reveal";

export function Founder() {
  return (
    <section
      id="founder"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div
        className="absolute -top-24 right-0 w-[min(50vw,420px)] h-[min(50vw,420px)] rounded-full bg-primary/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[3/4] rounded-[28px] overflow-hidden ring-1 ring-secondary/10 shadow-[0_30px_60px_-30px_rgba(15,16,32,0.35)]">
                <Image
                  src={founderPhoto}
                  alt={`Chân dung ${SITE.founder.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  priority={false}
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl">
              <span className="h-px w-8 bg-primary" />
              Ban lãnh đạo
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl text-secondary">
              {SITE.founder.name}
            </h2>
            <p className="mt-1 text-primary font-semibold tracking-wide">
              {SITE.founder.role}
            </p>
            <p className="mt-6 text-lg text-secondary/80 leading-relaxed">
              {SITE.founder.bio}
            </p>
            <p className="mt-8 font-script text-3xl text-primary/90">
              “{SITE.brand.tagline}”
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Founder;

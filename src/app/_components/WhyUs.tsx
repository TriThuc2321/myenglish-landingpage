"use client";

import { SITE } from "@/data/site";
import Reveal from "./Reveal";

export function WhyUs() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-paper overflow-hidden">
      <div
        className="absolute inset-0 bg-grid opacity-50 pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto relative">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl">
            <span className="h-px w-8 bg-primary" />
            Giới thiệu MYENGLISH
          </span>
          <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl text-secondary">
            {SITE.intro.whyTitle}
          </h2>
          <p className="mt-5 text-lg text-secondary/80 leading-relaxed max-w-2xl">
            {SITE.intro.lead}
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SITE.usps.map((u, i) => (
            <Reveal key={u.title} delay={0.05 * i}>
              <article className="h-full p-6 sm:p-7 rounded-[24px] bg-white border border-secondary/10 shadow-[0_12px_40px_-24px_rgba(15,16,32,0.25)] hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <span
                    className="shrink-0 grid place-items-center h-10 w-10 rounded-full bg-primary/10 text-primary font-bold"
                    aria-hidden
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-primary"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-secondary">
                      {u.title}
                    </h3>
                    <p className="mt-2 text-secondary/70 leading-relaxed text-[15px] sm:text-base">
                      {u.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

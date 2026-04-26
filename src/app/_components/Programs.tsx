"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { motion } from "motion/react";

import { SITE } from "@/data/site";
import { communicationTopicImages } from "@/lib/images";
import Reveal from "./Reveal";

export function CorePrograms() {
  return (
    <section
      id="programs"
      className="relative py-20 lg:py-28 bg-paper overflow-hidden"
    >
      <div className="container mx-auto">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-primary font-bold text-xl">
            <span className="h-px w-8 bg-primary" />
            Chương trình chủ lực
          </span>
          <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary">
            Cambridge · IELTS
            <span className="italic text-primary"> · Giao tiếp</span>
          </h2>
          <p className="mt-5 text-secondary/70 text-lg max-w-2xl">
            Ba trụ cột đào tạo: chương trình chuẩn quốc tế, luyện thi bài bản, và
            giao tiếp thực tế cho mọi lứa tuổi.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <div className="relative aspect-[4/5] max-h-[520px] rounded-[28px] overflow-hidden ring-1 ring-secondary/10 shadow-[0_30px_60px_-30px_rgba(15,16,32,0.3)]">
              <Image
                src={communicationTopicImages[0]}
                alt="Hoạt động giao tiếp theo chủ đề tại MyEnglish"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholder="blur"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
              {communicationTopicImages.slice(1, 4).map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-black/5"
                >
                  <Image
                    src={img}
                    alt={`Giao tiếp chủ đề ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="120px"
                    placeholder="blur"
                  />
                </motion.div>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-7 space-y-4">
            {SITE.corePrograms.map((p, i) => (
              <Reveal key={p.id} delay={0.1 + i * 0.06}>
                <article className="group p-6 sm:p-7 rounded-2xl bg-white border border-secondary/10 hover:border-primary/35 transition-colors shadow-[0_10px_30px_-20px_rgba(15,16,32,0.2)]">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-12 w-12 rounded-2xl bg-primary text-white grid place-items-center font-display font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-secondary">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-secondary/70 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.45} className="pt-2">
              <Button
                as="a"
                href="#curriculum"
                color="primary"
                radius="full"
                size="lg"
                className="font-semibold shadow-[0_10px_28px_-10px_rgba(207,36,44,0.7)]"
              >
                Xem bảng lộ trình chi tiết
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CorePrograms;

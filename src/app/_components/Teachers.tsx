"use client";

import Image from "next/image";

import { teacherImages } from "@/lib/images";
import Reveal from "./Reveal";

const labels = [
  "Đội ngũ giảng dạy",
  "Tư vấn & hỗ trợ",
  "Đồng hành học viên",
  "MYENGLISH Team",
];

export function Teachers() {
  return (
    <section
      id="teachers"
      className="relative py-20 lg:py-28 bg-paper overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl">
              <span className="h-px w-8 bg-primary" />
              Con người MYENGLISH
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary max-w-2xl">
              Giáo viên
              <span className="italic text-primary"> & nhân sự</span>
            </h2>
            <p className="mt-4 text-secondary/70 max-w-lg">
              Đội ngũ tận tâm, giàu kinh nghiệm — cùng cơ sở vật chất hiện đại
              để tối ưu mỗi buổi học.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {teacherImages.map((img, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <article className="group relative aspect-[16/9] rounded-[22px] overflow-hidden ring-1 ring-black/5 bg-white shadow-[0_20px_40px_-24px_rgba(15,16,32,0.3)]">
                <Image
                  src={img}
                  alt={`${labels[i] ?? "Giáo viên MyEnglish"} — ảnh ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-white font-semibold text-sm sm:text-base drop-shadow">
                    {labels[i] ?? "MYENGLISH"}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;

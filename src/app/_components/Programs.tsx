"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { Button } from "@heroui/button";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { tieuHocImages } from "@/app/_data/assets";
import Reveal from "./Reveal";

const highlights = [
  {
    title: "Phát âm chuẩn từ gốc",
    desc: "Các bé làm quen với phát âm đúng, nghe tốt và tự tin nói ngay từ buổi đầu.",
  },
  {
    title: "Học qua hoạt động",
    desc: "Trò chơi, hát, đóng vai — biến mỗi bài học thành một trải nghiệm đáng nhớ.",
  },
  {
    title: "Thầy cô đồng hành",
    desc: "Lớp nhỏ, sĩ số vừa phải để thầy cô quan tâm tới từng bạn học sinh.",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="relative py-20 lg:py-28 bg-paper overflow-hidden"
    >
      <div className="container mx-auto">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-primary font-bold text-xl">
            <span className="h-px w-8 bg-primary" />
            Chương trình nổi bật
          </span>
          <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary">
            Tiếng Anh <span className="italic text-primary">Tiểu học</span>
            <br />
            đồng hành cùng bé.
          </h2>
          <p className="mt-5 text-secondary/70 text-lg max-w-2xl">
            Lộ trình được thiết kế riêng cho lứa tuổi tiểu học — kết hợp bốn kỹ
            năng nghe, nói, đọc, viết cùng các hoạt động sáng tạo để bé yêu
            tiếng Anh mỗi ngày.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-6 lg:-inset-10 rounded-[48px] bg-gradient-to-br from-primary/15 via-white/0 to-secondary/15 blur-2xl -z-10" />
            <Swiper
              modules={[EffectCoverflow, Autoplay, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 40,
                depth: 180,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              className="!pb-12"
            >
              {tieuHocImages.map((img, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[76%] sm:!w-[62%] lg:!w-[70%]"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="relative aspect-[4/5] rounded-[28px] overflow-hidden ring-8 ring-white shadow-[0_30px_60px_-20px_rgba(15,16,32,0.35)]"
                  >
                    <Image
                      src={img}
                      alt={`Tiếng Anh tiểu học · ${i + 1}`}
                      fill
                      sizes="(max-width: 1024px) 70vw, 45vw"
                      className="object-cover"
                      placeholder="blur"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-xs font-semibold uppercase tracking-wider text-secondary">
                      Lớp {i + 1}
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <style jsx global>{`
              .swiper-pagination-bullet {
                background: #2f338a;
                opacity: 0.25;
                width: 8px;
                height: 8px;
              }
              .swiper-pagination-bullet-active {
                background: #cf242c;
                opacity: 1;
                width: 28px;
                border-radius: 9999px;
              }
            `}</style>
          </Reveal>

          <div className="space-y-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.15 + i * 0.08}>
                <article className="group relative p-6 rounded-2xl bg-white border border-secondary/10 hover:border-primary/40 transition-colors shadow-[0_10px_30px_-20px_rgba(15,16,32,0.25)]">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 grid place-items-center h-12 w-12 rounded-xl bg-secondary text-white font-display text-xl font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-secondary">
                        {h.title}
                      </h3>
                      <p className="mt-1.5 text-secondary/70 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.5} className="pt-2">
              <Button
                as="a"
                href="#contact"
                color="primary"
                radius="full"
                size="lg"
                className="font-semibold shadow-[0_10px_28px_-10px_rgba(207,36,44,0.7)]"
              >
                Đăng ký tư vấn lớp tiểu học
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;

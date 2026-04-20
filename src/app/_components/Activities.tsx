"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { hoatDongImages } from "@/app/_data/assets";
import Reveal from "./Reveal";

const captions = [
  "Sân chơi ngoại khoá",
  "Thuyết trình tự tin",
  "Giờ học sáng tạo",
  "Teamwork & Games",
  "Khoảnh khắc đáng nhớ",
  "Cùng nhau toả sáng",
];

export function Activities() {
  return (
    <section
      id="activities"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-grid opacity-60 pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl">
              <span className="h-px w-8 bg-primary" />
              Hoạt động
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary max-w-2xl">
              Lớp học là sân chơi
              <span className="italic text-primary"> của các bé.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-secondary/70 max-w-md">
              Mỗi khoảnh khắc tại MyEnglish đều là một trải nghiệm — nơi các bé
              vừa học, vừa chơi, vừa làm bạn với tiếng Anh.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 hidden lg:grid grid-cols-12 grid-rows-[220px_220px_220px] gap-4">
          <Tile
            img={hoatDongImages[0]}
            caption={captions[0]}
            className="col-span-5 row-span-2"
            priority
          />
          <Tile
            img={hoatDongImages[1]}
            caption={captions[1]}
            className="col-span-4 row-span-1"
          />
          <Tile
            img={hoatDongImages[2]}
            caption={captions[2]}
            className="col-span-3 row-span-2"
          />
          <Tile
            img={hoatDongImages[3]}
            caption={captions[3]}
            className="col-span-4 row-span-1"
          />
          <Tile
            img={hoatDongImages[4]}
            caption={captions[4]}
            className="col-span-7 row-span-1"
          />
          <Tile
            img={hoatDongImages[5]}
            caption={captions[5]}
            className="col-span-5 row-span-1"
          />
        </div>

        <div className="mt-10 lg:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={16}
            centeredSlides
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2.1, centeredSlides: false },
            }}
          >
            {hoatDongImages.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-black/5">
                  <Image
                    src={img}
                    alt={captions[i] ?? `Hoạt động ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 90vw, 50vw"
                    className="object-cover"
                    placeholder="blur"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white font-display font-semibold">
                      {captions[i]}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function Tile({
  img,
  caption,
  className,
  priority,
}: {
  img: (typeof hoatDongImages)[number];
  caption: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Reveal
      className={`relative group overflow-hidden rounded-[24px] ring-1 ring-black/5 ${
        className ?? ""
      }`}
    >
      <Image
        src={img}
        alt={caption}
        fill
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        placeholder="blur"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
        <span className="font-display text-lg font-semibold text-white drop-shadow">
          {caption}
        </span>
        <span className="h-8 w-8 rounded-full bg-white/95 text-primary grid place-items-center translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M7 17L17 7M17 7H9M17 7v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Reveal>
  );
}

export default Activities;

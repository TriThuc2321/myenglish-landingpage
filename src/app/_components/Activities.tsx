"use client";

import Image, { type StaticImageData } from "next/image";

import { activitiesImages, communicationTopicImages } from "@/lib/images";
import Reveal from "./Reveal";

const activityCaptions: string[] = [
  "Hoạt động trải nghiệm 1",
  "Hoạt động trải nghiệm 2",
  "Hoạt động trải nghiệm 3",
  "Hoạt động trải nghiệm 4",
  "Hoạt động trải nghiệm 5",
  "Hoạt động trải nghiệm 6",
  "Hoạt động trải nghiệm 7",
  "Hoạt động trải nghiệm 8",
];

const giaoTiepCaptions = [
  "Giao tiếp chủ đề 1",
  "Giao tiếp chủ đề 2",
  "Giao tiếp chủ đề 3",
  "Giao tiếp chủ đề 4",
  "Giao tiếp chủ đề 5",
  "Giao tiếp chủ đề 6",
  "Giao tiếp chủ đề 7",
];

type Slide = { img: StaticImageData; caption: string; key: string };

const slides: Slide[] = [
  ...activitiesImages.map((img, i) => ({
    img,
    caption: activityCaptions[i] ?? `Trải nghiệm ${i + 1}`,
    key: `hd-${i}`,
  })),
  ...communicationTopicImages.map((img, i) => ({
    img,
    caption: giaoTiepCaptions[i] ?? `Giao tiếp ${i + 1}`,
    key: `gt-${i}`,
  })),
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
              Trải nghiệm
              <span className="italic text-primary"> & giao tiếp chủ đề</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-secondary/70 max-w-md">
              Mỗi khoảnh khắc tại MYENGLISH — hoạt động sôi nổi, giao tiếp thực
              tế, cùng cộng đồng học viên năng động.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 hidden lg:grid grid-cols-12 grid-rows-[200px_200px_200px] gap-4 max-w-6xl mx-auto">
          <Tile
            img={slides[0].img}
            caption={slides[0].caption}
            className="col-span-5 row-span-2"
            priority
          />
          <Tile
            img={slides[1].img}
            caption={slides[1].caption}
            className="col-span-4 row-span-1"
          />
          <Tile
            img={slides[2].img}
            caption={slides[2].caption}
            className="col-span-3 row-span-2"
          />
          <Tile
            img={slides[3].img}
            caption={slides[3].caption}
            className="col-span-4 row-span-1"
          />
          <Tile
            img={slides[4].img}
            caption={slides[4].caption}
            className="col-span-7 row-span-1"
          />
          <Tile
            img={slides[5].img}
            caption={slides[5].caption}
            className="col-span-5 row-span-1"
          />
        </div>

        <div
          className="mt-10 lg:hidden -mx-4 sm:-mx-6 px-4 sm:px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:thin] scroll-px-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {slides.map((s) => (
            <div
              key={s.key}
              className="relative w-[min(88vw,320px)] shrink-0 snap-center aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-black/5"
            >
              <Image
                src={s.img}
                alt={s.caption}
                fill
                sizes="min(88vw, 320px)"
                className="object-cover"
                placeholder="blur"
              />
            </div>
          ))}
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
  img: StaticImageData;
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
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-end justify-between gap-3">
        <span className="font-display text-base sm:text-lg font-semibold text-white drop-shadow">
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

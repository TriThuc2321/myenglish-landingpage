"use client";

import Image from "next/image";
import { Button } from "@heroui/button";
import { motion } from "motion/react";

import { posterImages } from "@/app/_data/assets";
import Reveal from "./Reveal";

export function Posters() {
  return (
    <section
      id="posters"
      className="relative py-20 lg:py-28 bg-secondary text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_30%,#ffffff_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#cf242c_0%,transparent_40%)] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-display font-bold text-xl text-primary">
            <span className="h-px w-8 bg-primary" />
            Khai giảng
          </span>
          <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl">
            Mùa mới,
            <br />
            <span className="italic text-primary">lớp mới.</span>
          </h2>
          <p className="mt-6 text-white/75 text-lg max-w-lg">
            MyEnglish liên tục mở các lớp mới cho học sinh tiểu học tại Cần Thơ.
            Xem poster khai giảng mới nhất và giữ chỗ sớm để các bé được học với
            thầy cô mình yêu thích.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              as="a"
              href="#contact"
              color="primary"
              radius="full"
              size="lg"
              className="font-semibold shadow-[0_10px_28px_-10px_rgba(207,36,44,0.7)]"
            >
              Giữ chỗ ngay
            </Button>
            <Button
              as="a"
              href="tel:0907188212"
              variant="bordered"
              radius="full"
              size="lg"
              className="font-semibold border-white/40 text-white data-[hover=true]:bg-white data-[hover=true]:text-secondary"
            >
              Gọi hotline 0907 188 212
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/70">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <circle
                cx="12"
                cy="9"
                r="2.5"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
            37A Lê Hồng Phong, P. Thới An Đông, TP. Cần Thơ
          </div>
        </Reveal>

        <div className="relative h-[520px] sm:h-[580px]">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -8 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-4 left-2 sm:left-8 w-[62%] aspect-[3/4] rounded-[22px] overflow-hidden ring-[10px] ring-white shadow-[0_40px_60px_-20px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={posterImages[0]}
              alt="Poster khai giảng 1"
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="object-cover"
              placeholder="blur"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 6 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 right-2 sm:right-6 w-[58%] aspect-[3/4] rounded-[22px] overflow-hidden ring-[10px] ring-white shadow-[0_40px_60px_-20px_rgba(0,0,0,0.45)]"
          >
            <Image
              src={posterImages[1] ?? posterImages[0]}
              alt="Poster khai giảng 2"
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="object-cover"
              placeholder="blur"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, rotate: -18 }}
            whileInView={{ opacity: 1, rotate: -10 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-0 right-4 sm:right-10 z-10 px-4 py-2 rounded-full bg-primary text-white font-display font-bold text-sm tracking-wide shadow-xl"
          >
            NEW · 2025
          </motion.span>
        </div>
      </div>
    </section>
  );
}

export default Posters;

"use client";

import { motion } from "motion/react";
import { Reveal, RevealStagger, staggerItem } from "./Reveal";
import { Sparkle, Underline } from "./Decor";

const FEATURES = [
  {
    no: "01",
    title: "Lớp học nhỏ, chăm sóc tận tâm",
    body: "Sĩ số giới hạn để mỗi em đều được lắng nghe, sửa sai kịp thời và phát triển theo đúng nhịp của riêng mình.",
    accent: "var(--brand-red)",
  },
  {
    no: "02",
    title: "Giáo viên giỏi · Phương pháp chuẩn",
    body: "Giáo án bám khung CEFR, kết hợp hoạt động thực tế, trò chơi, dự án — để tiếng Anh sống động và gần gũi.",
    accent: "var(--brand-indigo)",
  },
  {
    no: "03",
    title: "Môi trường tích cực & hạnh phúc",
    body: "Ở MyEnglish, các em học cách tư duy, cách chia sẻ, cách dám nói. Ngôn ngữ chỉ là khởi đầu của một cuộc sống tốt hơn.",
    accent: "var(--sunshine)",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--ink-soft)]">
                <span className="h-px w-8 bg-[color:var(--ink)]" />§ 01 — Vì sao
                chọn
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.98] tracking-[-0.02em]">
                Một chương trình.
                <br />
                <span className="italic text-[color:var(--brand-red)]">
                  Ba giá trị.
                </span>
                <br />
                Trăm câu chuyện{" "}
                <span className="relative inline-block">
                  đáng nhớ.
                  <Underline className="absolute -bottom-2 left-0 w-full h-4" />
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.2}>
              <p className="text-lg leading-[1.8] text-[color:var(--ink-soft)]">
                MyEnglish không chỉ dạy tiếng Anh. Chúng tôi xây dựng một nơi
                chốn — nơi các em nhỏ được ngôn ngữ dẫn dắt vào những thế giới
                mới, nơi cha mẹ thấy con mình{" "}
                <span className="font-semibold text-[color:var(--ink)]">
                  tự tin lên từng ngày
                </span>
                , và nơi giáo viên sống trọn với nghề.
              </p>
            </Reveal>
          </div>
        </div>

        <RevealStagger className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.no}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-[28px] border-2 border-[color:var(--ink)] bg-[color:var(--paper-soft)] p-7 lg:p-8"
              style={{
                boxShadow: `6px 6px 0 0 ${f.accent}`,
              }}
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ backgroundColor: f.accent, filter: "blur(40px)" }}
              />
              <div className="relative flex items-start justify-between">
                <span className="font-display italic text-5xl leading-none text-[color:var(--ink)]/30">
                  {f.no}
                </span>
                <Sparkle
                  size={22}
                  color={f.accent}
                  className="transition-transform duration-500 group-hover:rotate-90"
                />
              </div>
              <h3 className="relative mt-8 font-display text-2xl lg:text-[28px] leading-tight tracking-[-0.01em] text-[color:var(--ink)]">
                {f.title}
              </h3>
              <p className="relative mt-4 text-[15px] leading-[1.75] text-[color:var(--ink-soft)]">
                {f.body}
              </p>
              <div
                className="relative mt-8 h-[3px] w-12 rounded-full"
                style={{ backgroundColor: f.accent }}
              />
              <p className="relative mt-3 font-script text-lg text-[color:var(--ink-soft)]">
                {["tận tâm", "chuẩn quốc tế", "hạnh phúc"][i]}
              </p>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

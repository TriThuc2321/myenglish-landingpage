"use client";

import { site } from "@/app/_data/assets";
import Reveal from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 font-display font-bold text-xl text-primary">
              <span className="h-px w-8 bg-primary" />
              Về MyEnglish
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl text-secondary">
              Hành trang vững vàng cho các em 6–11 tuổi
            </h2>

            <p className="mt-4 font-script text-3xl text-primary/90 leading-tight">
              Better English, Better Life.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 space-y-6">
            <p className="text-lg text-secondary/80 leading-relaxed">
              {site.name} là trung tâm Anh ngữ dành cho học sinh tiểu học tại
              TP. Cần Thơ. Với triết lý{" "}
              <span className="font-semibold text-secondary">
                “{site.tagline}”
              </span>
              , chúng tôi tin rằng tiếng Anh không chỉ là một môn học, mà là
              chiếc chìa khoá mở ra một thế giới mới cho các bé.
            </p>
            <p className="text-secondary/70 leading-relaxed">
              Lớp học nhỏ, thầy cô tận tâm, phương pháp lấy học sinh làm trung
              tâm — mỗi buổi học là một niềm vui các bé háo hức đón chờ.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <InfoCard label="Địa chỉ" value={site.address} />
              <InfoCard
                label="Hotline"
                value={site.hotlines.join(" — ")}
                href={`tel:${site.hotlines[0].replace(/\s/g, "")}`}
              />
              <InfoCard
                label="Facebook"
                value="facebook.com/mye2021"
                href={site.facebook}
                external
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="p-5 rounded-2xl border border-secondary/10 hover:border-primary/40 transition-colors h-full">
      <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-secondary/60">
        {label}
      </div>
      <div className="mt-2 font-display font-semibold text-secondary leading-snug">
        {value}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="block group"
    >
      {content}
    </a>
  );
}

export default About;

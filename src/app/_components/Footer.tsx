import Image from "next/image";

import { logos, site } from "@/app/_data/assets";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-secondary text-white">
      <div
        className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_0%,#fff_0%,transparent_50%),radial-gradient(circle_at_80%_100%,#cf242c_0%,transparent_50%)] pointer-events-none"
        aria-hidden
      />

      <div className="container mx-auto relative py-14 lg:py-16">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-white grid place-items-center overflow-hidden">
                <Image
                  src={logos.vertical}
                  alt={site.name}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-2xl tracking-tight">
                  {site.name}
                </div>
                <div className="font-script text-primary-300 text-lg -mt-1">
                  Better English, Better Life
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/70 max-w-md leading-relaxed">
              Trung tâm Anh ngữ dành cho học sinh tiểu học tại TP. Cần Thơ.
              Mỗi ngày đến lớp là một ngày vui, một bước tiến tiếng Anh.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/50">
              Liên hệ
            </div>
            <ul className="mt-4 space-y-3 text-white/85">
              <li className="flex gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 text-primary-300 shrink-0">
                  <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                {site.address}
              </li>
              <li className="flex gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="mt-0.5 text-primary-300 shrink-0">
                  <path
                    d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  {site.hotlines.map((h, i) => (
                    <span key={h}>
                      <a
                        href={`tel:${h.replace(/\s/g, "")}`}
                        className="hover:text-primary-300 transition-colors"
                      >
                        {h}
                      </a>
                      {i < site.hotlines.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="mt-0.5 text-primary-300 shrink-0">
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.8v8h3.1z" />
                </svg>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-primary-300 transition-colors"
                >
                  facebook.com/mye2021
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-white/50">
              Khám phá
            </div>
            <ul className="mt-4 space-y-2 text-white/85">
              <li>
                <a href="#programs" className="hover:text-primary-300 transition-colors">
                  Chương trình
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-primary-300 transition-colors">
                  Hoạt động
                </a>
              </li>
              <li>
                <a href="#posters" className="hover:text-primary-300 transition-colors">
                  Khai giảng
                </a>
              </li>
              <li>
                <a href="#honor" className="hover:text-primary-300 transition-colors">
                  Vinh danh
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-300 transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-white/60">
          <div>© {year} {site.name}. All rights reserved.</div>
          <div className="font-script text-lg text-primary-300">
            Better English, Better Life.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

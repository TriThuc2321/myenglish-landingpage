"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Sparkle, Star } from "./Decor";

const HOTLINES = ["0907 188 212", "0939 039 947"];
const ADDRESS = "37A Lê Hồng Phong, p. Thới An Đông, TP. Cần Thơ";
const FB = "https://www.facebook.com/mye2021";
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.520512077668!2d105.71732396677268!3d10.088422266354023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0875c27e78bf1%3A0xe968dc24fe086895!2sTrung%20T%C3%A2m%20Anh%20Ng%E1%BB%AF%20MY%20ENGLISH!5e0!3m2!1sen!2s!4v1776504527762!5m2!1sen!2s";

function ContactMessageForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setName("");
      setPhone("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 rounded-[28px] border-[3px] border-[color:var(--paper)]/35 bg-[color:var(--paper)]/5 p-6 sm:p-8 shadow-[8px_8px_0_0_var(--ink)]"
      noValidate
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--paper)]/70">
        Gửi lời nhắn
      </p>
      <p className="mt-2 text-sm text-[color:var(--paper)]/80">
        Điền form — chúng tôi nhận tin qua Zalo và phản hồi sớm nhất có thể.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-[11px] uppercase tracking-[0.2em] text-[color:var(--paper)]/70"
          >
            Họ và tên
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="mt-2 w-full rounded-2xl border-2 border-[color:var(--paper)]/25 bg-[color:var(--paper)]/10 px-4 py-3 text-[color:var(--paper)] placeholder:text-[color:var(--paper)]/40 outline-none transition-[border-color,box-shadow] focus:border-[color:var(--sunshine)] focus:ring-2 focus:ring-[color:var(--sunshine)]/35"
            placeholder="Ví dụ: Nguyễn Văn A"
          />
        </div>
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-[11px] uppercase tracking-[0.2em] text-[color:var(--paper)]/70"
          >
            Số điện thoại
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="mt-2 w-full rounded-2xl border-2 border-[color:var(--paper)]/25 bg-[color:var(--paper)]/10 px-4 py-3 text-[color:var(--paper)] placeholder:text-[color:var(--paper)]/40 outline-none transition-[border-color,box-shadow] focus:border-[color:var(--sunshine)] focus:ring-2 focus:ring-[color:var(--sunshine)]/35"
            placeholder="0900 000 000"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="block text-[11px] uppercase tracking-[0.2em] text-[color:var(--paper)]/70"
          >
            Nội dung
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            className="mt-2 w-full resize-y rounded-2xl border-2 border-[color:var(--paper)]/25 bg-[color:var(--paper)]/10 px-4 py-3 text-[color:var(--paper)] placeholder:text-[color:var(--paper)]/40 outline-none transition-[border-color,box-shadow] focus:border-[color:var(--sunshine)] focus:ring-2 focus:ring-[color:var(--sunshine)]/35"
            placeholder="Lớp muốn tư vấn, độ tuổi bé, giờ rảnh…"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--paper)] px-7 py-3.5 text-base font-bold text-[color:var(--brand-red)] shadow-[5px_5px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--ink)] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "loading" ? "Đang gửi…" : "Gửi tin nhắn"}
          {status !== "loading" && (
            <Sparkle size={16} color="var(--brand-red)" />
          )}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-4 text-sm ${
          status === "success"
            ? "text-[color:var(--sunshine)]"
            : status === "error"
            ? "text-[color:var(--paper)]/90"
            : "sr-only"
        }`}
      >
        {status === "success" &&
          "Đã gửi thành công. MyEnglish sẽ liên hệ lại với bạn sớm."}
        {status === "error" &&
          (name.trim() && phone.trim() && message.trim()
            ? "Gửi không thành công. Bạn vui lòng thử lại hoặc gọi hotline."
            : "Vui lòng điền đủ họ tên, số điện thoại và nội dung.")}
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-[color:var(--brand-red)] text-[color:var(--paper)] overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -top-24 -right-24 opacity-20"
      >
        <Star size={300} color="var(--sunshine)" stroke="var(--paper)" />
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[color:var(--paper)]/80">
                <span className="h-px w-8 bg-[color:var(--paper)]/80" />
                06 — Liên hệ
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,6rem)] leading-[0.95] tracking-[-0.02em]">
                Ghé MyEnglish
                <br />
                <span className="italic">một lần</span> —
                <br />
                <span className="italic text-[color:var(--sunshine)]">
                  thương cả đời.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-[1.8] text-[color:var(--paper)]/85">
                Phụ huynh có thể để lại lời nhắn qua form, hotline hoặc Facebook
                — đội ngũ MyEnglish sẽ phản hồi trong vòng <b>15 phút</b> (giờ
                hành chính). Hoặc ghé trực tiếp trung tâm để gặp giáo viên và
                tham quan lớp học.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--paper)] bg-[color:var(--paper)]/5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 5 Q 4 4 5 4 L 8 4 Q 9 4 9 5 L 10 9 Q 10 10 9 10.5 L 7.5 11.5 Q 9 15 12.5 16.5 L 13.5 15 Q 14 14 15 14 L 19 15 Q 20 15 20 16 L 20 19 Q 20 20 19 20 Q 10 20 4 14 Q 4 5 4 5 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--paper)]/70">
                      Hotline
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1">
                      {HOTLINES.map((h, i) => (
                        <Link
                          key={h}
                          href={`tel:${h.replace(/\s+/g, "")}`}
                          className="font-display italic text-3xl lg:text-4xl text-[color:var(--paper)] hover:text-[color:var(--sunshine)] transition-colors"
                        >
                          {h}
                          {i === 0 && (
                            <span className="mx-3 font-sans not-italic text-[color:var(--paper)]/50 text-xl">
                              /
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--paper)] bg-[color:var(--paper)]/5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2 C 7 2 4 6 4 10 C 4 16 12 22 12 22 C 12 22 20 16 20 10 C 20 6 17 2 12 2 Z M 12 12 A 2 2 0 1 1 12 8 A 2 2 0 1 1 12 12 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--paper)]/70">
                      Địa chỉ
                    </p>
                    <p className="mt-1 text-xl font-medium">{ADDRESS}</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[color:var(--paper)] bg-[color:var(--paper)]/5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 2 H 18 A 4 4 0 0 1 22 6 V 18 A 4 4 0 0 1 18 22 H 13.5 V 14 H 16 L 16.5 11 H 13.5 V 9 Q 13.5 8 14.5 8 H 16.5 V 5 H 14 Q 10.5 5 10.5 9 V 11 H 8 V 14 H 10.5 V 22 H 6 A 4 4 0 0 1 2 18 V 6 A 4 4 0 0 1 6 2 Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--paper)]/70">
                      Facebook
                    </p>
                    <Link
                      href={FB}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-2 text-xl font-medium underline decoration-2 underline-offset-4 decoration-[color:var(--sunshine)] hover:text-[color:var(--sunshine)]"
                    >
                      /mye2021
                      <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href={`tel:${HOTLINES[0].replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--paper)] px-7 py-4 text-base font-bold text-[color:var(--brand-red)] shadow-[5px_5px_0_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_var(--ink)]"
                >
                  Gọi ngay
                  <Sparkle size={16} color="var(--brand-red)" />
                </Link>
                <Link
                  href={FB}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--paper)] px-6 py-[14px] text-base font-semibold transition-colors hover:bg-[color:var(--paper)] hover:text-[color:var(--brand-red)]"
                >
                  Nhắn Facebook
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Map card */}
          <Reveal delay={0.2} className="col-span-12 lg:col-span-6">
            <div className="relative rounded-[28px] overflow-hidden border-[3px] border-[color:var(--paper)] bg-[color:var(--ink)] shadow-[10px_10px_0_0_var(--ink)]">
              <div className="flex items-center justify-between px-5 py-3 border-b-2 border-[color:var(--paper)]/20 bg-[color:var(--ink)]/60 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[color:var(--brand-red)]" />
                  <span className="h-3 w-3 rounded-full bg-[color:var(--sunshine)]" />
                  <span className="h-3 w-3 rounded-full bg-[#69c27a]" />
                </div>
                <p className="font-display italic text-sm text-[color:var(--paper)]/80">
                  maps.myenglish.vn
                </p>
              </div>
              <div className="relative aspect-[4/3]">
                <iframe
                  src={MAP_SRC}
                  title="Bản đồ MyEnglish"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
              <div className="p-5 border-t-2 border-[color:var(--paper)]/20 bg-[color:var(--ink)]">
                <p className="font-script text-xl text-[color:var(--sunshine)]">
                  hẹn gặp bé ở đây nhé ✦
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

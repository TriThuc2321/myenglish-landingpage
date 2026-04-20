"use client";

import { useState, FormEvent } from "react";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";

import { site } from "@/app/_data/assets";
import Reveal from "./Reveal";

const PHONE_RE = /^[0-9 +().\-]{8,}$/;

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    const trimmedMessage = message.trim();

    const nextErrors: typeof errors = {};
    if (trimmedName.length < 2) {
      nextErrors.name = "Vui lòng nhập họ tên";
    }
    if (!PHONE_RE.test(trimmedPhone)) {
      nextErrors.phone = "Số điện thoại chưa hợp lệ";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSending(true);
    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone: trimmedPhone,
          message: trimmedMessage || "(Không có lời nhắn)",
        }),
      });

      if (res.ok) {
        addToast({
          title: "Đã gửi liên hệ",
          description:
            "MyEnglish sẽ liên hệ lại với bạn trong thời gian sớm nhất!",
          color: "success",
        });
        setName("");
        setPhone("");
        setMessage("");
      } else {
        throw new Error("Request failed");
      }
    } catch {
      addToast({
        title: "Gửi thất bại",
        description: "Vui lòng thử lại hoặc gọi hotline trực tiếp nhé.",
        color: "danger",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-paper overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-dots opacity-40 pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 font-display font-bold text-xl text-primary">
              <span className="h-px w-8 bg-primary" />
              Liên hệ
            </span>
            <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl lg:text-6xl text-secondary">
              Để lại thông tin,
              <br />
              <span className="italic text-primary">MyEnglish gọi lại.</span>
            </h2>
            <p className="mt-5 text-secondary/70 text-lg max-w-md">
              Đăng ký test đầu vào miễn phí, nhận tư vấn lộ trình học cho bé chỉ
              trong ít phút.
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-8 p-6 sm:p-8 rounded-[28px] bg-white border border-secondary/10 shadow-[0_30px_60px_-30px_rgba(15,16,32,0.3)] space-y-5"
            >
              <Input
                label="Họ và tên phụ huynh / bé"
                value={name}
                onValueChange={setName}
                isRequired
                isInvalid={!!errors.name}
                errorMessage={errors.name}
                variant="bordered"
                radius="lg"
                color="secondary"
              />
              <Input
                type="tel"
                label="Số điện thoại"
                value={phone}
                onValueChange={setPhone}
                isRequired
                isInvalid={!!errors.phone}
                errorMessage={errors.phone}
                variant="bordered"
                radius="lg"
                color="secondary"
              />
              <Textarea
                label="Lời nhắn (không bắt buộc)"
                value={message}
                onValueChange={setMessage}
                minRows={3}
                variant="bordered"
                radius="lg"
                color="secondary"
              />

              <Button
                type="submit"
                color="primary"
                radius="full"
                size="lg"
                isLoading={isSending}
                className="w-full font-semibold shadow-[0_10px_28px_-10px_rgba(207,36,44,0.7)]"
              >
                {isSending ? "Đang gửi..." : "Gửi liên hệ"}
              </Button>

              <p className="text-xs text-secondary/50 text-center">
                Hoặc gọi trực tiếp:{" "}
                {site.hotlines.map((h, i) => (
                  <span key={h}>
                    <a
                      href={`tel:${h.replace(/\s/g, "")}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {h}
                    </a>
                    {i < site.hotlines.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.12} className="relative">
            <div className="rounded-[28px] overflow-hidden ring-1 ring-secondary/10 bg-white shadow-[0_30px_60px_-30px_rgba(15,16,32,0.3)]">
              <div className="p-6 sm:p-7 border-b border-secondary/10 flex items-start gap-4">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary text-white shrink-0">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle
                      cx="12"
                      cy="9"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-secondary/60">
                    Cơ sở MyEnglish
                  </div>
                  <div className="mt-1 font-display text-xl font-semibold text-secondary">
                    {site.address}
                  </div>
                </div>
              </div>
              <div className="aspect-[5/4] w-full bg-secondary/5">
                <iframe
                  src={site.mapEmbedSrc}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ MyEnglish Cần Thơ"
                />
              </div>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              <a
                href={`tel:${site.hotlines[0].replace(/\s/g, "")}`}
                className="group flex items-center gap-3 p-4 rounded-2xl bg-primary text-white hover:bg-primary-600 transition-colors"
              >
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/15">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-wider opacity-80">
                    Hotline
                  </div>
                  <div className="font-semibold">
                    {site.hotlines.join(" · ")}
                  </div>
                </div>
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3 p-4 rounded-2xl bg-secondary text-white hover:bg-secondary-600 transition-colors"
              >
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/15">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.6V14h2.8v8h3.1z" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <div className="text-[11px] uppercase tracking-wider opacity-80">
                    Facebook
                  </div>
                  <div className="font-semibold">fb.com/mye2021</div>
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;

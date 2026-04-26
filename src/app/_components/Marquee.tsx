"use client";

const phrases = [
  "MYENGLISH",
  "Cambridge & IELTS",
  "Giao tiếp đột phá",
  "Cần Thơ",
  "Better English · Better Life",
  "Mọi thế hệ học viên",
  "Học vui — học chất",
  "Công dân toàn cầu",
];

export function Marquee() {
  const row = [...phrases, ...phrases, ...phrases, ...phrases];

  return (
    <div className="relative bg-secondary text-white border-y border-secondary-700/40 overflow-hidden">
      <div className="flex items-center whitespace-nowrap animate-marquee-x">
        {row.map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-6 shrink-0 py-4 px-6 font-display text-2xl sm:text-3xl tracking-tight"
          >
            {p}
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-primary shrink-0"
      aria-hidden
    >
      <path
        d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Marquee;

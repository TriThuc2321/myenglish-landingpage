import type { Metadata } from "next";
import { Fraunces, Be_Vietnam_Pro, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "vietnamese"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyEnglish — Better English, Better Life",
  description:
    "Trung tâm Anh ngữ MyEnglish tại Cần Thơ: lớp học nhỏ, giáo viên tận tâm, phương pháp chuẩn quốc tế cho học sinh tiểu học.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${fraunces.variable} ${beVietnamPro.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-[color:var(--ink)] selection:bg-[color:var(--brand-red)] selection:text-[color:var(--paper)]">
        {children}
      </body>
    </html>
  );
}

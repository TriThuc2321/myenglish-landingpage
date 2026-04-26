import type { Metadata } from "next";
import { Fraunces, Be_Vietnam_Pro, Caveat } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";

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
    "MYENGLISH Cần Thơ — tiếng Anh Cambridge, IELTS & giao tiếp cho mọi thế hệ. Đào tạo toàn diện, đội ngũ tận tâm.",
  openGraph: {
    title: "MyEnglish — Better English, Better Life",
    description:
      "MYENGLISH Cần Thơ: Cambridge, luyện thi IELTS, giao tiếp, thiếu nhi & người lớn — Better English, Better Life.",
    type: "website",
    locale: "vi_VN",
    siteName: "MyEnglish",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyEnglish — Better English, Better Life",
    description:
      "Trung tâm Anh ngữ MYENGLISH tại Cần Thơ — Cambridge, IELTS & giao tiếp.",
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
      className={`${fraunces.variable} ${beVietnamPro.variable} ${caveat.variable} light h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body>
        <HeroUIProvider>
          <ToastProvider placement="top-center" toastOffset={30} />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}

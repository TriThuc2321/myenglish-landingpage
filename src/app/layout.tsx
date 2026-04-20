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
    "Trung tâm Anh ngữ MyEnglish tại Cần Thơ: lớp học nhỏ, giáo viên tận tâm, phương pháp chuẩn quốc tế cho học sinh tiểu học.",
  openGraph: {
    title: "MyEnglish — Better English, Better Life",
    description:
      "Trung tâm Anh ngữ MyEnglish tại Cần Thơ: lớp học nhỏ, giáo viên tận tâm, phương pháp chuẩn quốc tế cho học sinh tiểu học.",
    type: "website",
    locale: "vi_VN",
    siteName: "MyEnglish",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyEnglish — Better English, Better Life",
    description:
      "Trung tâm Anh ngữ MyEnglish tại Cần Thơ — lớp học nhỏ, giáo viên tận tâm cho học sinh tiểu học.",
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

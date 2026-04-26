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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MYENGLISH — Trung tâm Anh ngữ Cambridge & IELTS",
    template: "%s | MYENGLISH",
  },
  description:
    "Trung tâm Anh ngữ MYENGLISH tại Cần Thơ — chương trình Cambridge, luyện thi IELTS, tiếng Anh giao tiếp cho thiếu nhi, thiếu niên & người lớn. Đào tạo toàn diện, đội ngũ tận tâm, cam kết đầu ra.",
  keywords: [
    "trung tâm tiếng Anh Cần Thơ",
    "MYENGLISH",
    "tiếng Anh Cambridge Cần Thơ",
    "luyện thi IELTS Cần Thơ",
    "tiếng Anh thiếu nhi Cần Thơ",
    "tiếng Anh giao tiếp Cần Thơ",
    "KET PET Cần Thơ",
    "Starters Movers Flyers Cần Thơ",
    "học tiếng Anh Cần Thơ",
    "anh ngữ Thới An Đông",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": 160,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "MYENGLISH — Trung tâm Anh ngữ Cambridge & IELTS",
    description:
      "Trung tâm Anh ngữ MYENGLISH tại Cần Thơ: Cambridge (Starters → KET/PET), luyện thi IELTS & tiếng Anh giao tiếp cho mọi thế hệ — Better English, Better Life.",
    url: SITE_URL,
    type: "website",
    locale: "vi_VN",
    siteName: "MYENGLISH",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "MYENGLISH Cần Thơ — Trung tâm Anh ngữ Cambridge & IELTS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MYENGLISH Cần Thơ — Trung tâm Anh ngữ Cambridge & IELTS",
    description:
      "Trung tâm Anh ngữ MYENGLISH tại Cần Thơ — Cambridge, IELTS & tiếng Anh giao tiếp. Better English, Better Life.",
    images: ["/og-banner.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LanguageSchool",
  name: "Trung tâm Anh ngữ MYENGLISH",
  alternateName: "MYENGLISH Cần Thơ",
  url: SITE_URL,
  logo: `${SITE_URL}/og-banner.png`,
  image: `${SITE_URL}/og-banner.png`,
  description:
    "Trung tâm Anh ngữ MYENGLISH tại Cần Thơ — chương trình Cambridge, luyện thi IELTS, tiếng Anh giao tiếp cho thiếu nhi, thiếu niên & người lớn.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "37A Lê Hồng Phong",
    addressLocality: "Thới An Đông, TP. Cần Thơ",
    addressCountry: "VN",
  },
  telephone: ["0907188212", "0939039947"],
  email: "myenglish.cambridge@gmail.com",
  sameAs: ["https://www.facebook.com/mye2021"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chương trình đào tạo MYENGLISH",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Tiếng Anh Cambridge (Starters, Movers, Flyers, KET, PET)",
          description:
            "Lộ trình từ Baby Dolphin đến Flyers, KET, PET — chương trình sinh động, bám sát khung thi Cambridge quốc tế.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Luyện thi IELTS",
          description:
            "Lộ trình cá nhân hóa từ Pre IELTS đến band 6.5; bám sát cấu trúc đề thi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Tiếng Anh giao tiếp",
          description:
            "Tập trung phản xạ và phát âm chuẩn — Communication 1–4 cho sinh viên & người đi làm.",
        },
      },
    ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <HeroUIProvider>
          <ToastProvider placement="top-center" toastOffset={30} />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}

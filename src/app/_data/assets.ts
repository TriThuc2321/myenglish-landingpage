import type { StaticImageData } from "next/image";

import logo from "@/assets/images/logo.png";
import logoVertical from "@/assets/images/logo_vertical.png";
import banner from "@/assets/images/banner.png";

import hoatDong1 from "@/assets/images/hoat_dong/1.jpg";
import hoatDong2 from "@/assets/images/hoat_dong/2.jpg";
import hoatDong3 from "@/assets/images/hoat_dong/3.jpg";
import hoatDong4 from "@/assets/images/hoat_dong/4.jpg";
import hoatDong5 from "@/assets/images/hoat_dong/5.jpg";
import hoatDong6 from "@/assets/images/hoat_dong/6.jpg";

import poster1 from "@/assets/images/posters_khai_giang/1.jpg";
import poster2 from "@/assets/images/posters_khai_giang/2.jpg";

import tieuHoc1 from "@/assets/images/tieng_anh_tieu_hoc/1.jpg";
import tieuHoc2 from "@/assets/images/tieng_anh_tieu_hoc/2.jpg";
import tieuHoc3 from "@/assets/images/tieng_anh_tieu_hoc/3.jpg";
import tieuHoc4 from "@/assets/images/tieng_anh_tieu_hoc/4.jpg";
import tieuHoc5 from "@/assets/images/tieng_anh_tieu_hoc/5.jpg";

import vinhDanh1 from "@/assets/images/vinh_danh/1.jpg";
import vinhDanh2 from "@/assets/images/vinh_danh/2.jpg";
import vinhDanh3 from "@/assets/images/vinh_danh/3.jpg";
import vinhDanh4 from "@/assets/images/vinh_danh/4.jpg";
import vinhDanh5 from "@/assets/images/vinh_danh/5.jpg";
import vinhDanh6 from "@/assets/images/vinh_danh/6.jpg";
import vinhDanh7 from "@/assets/images/vinh_danh/7.jpg";
import vinhDanh8 from "@/assets/images/vinh_danh/8.jpg";

export const logos = {
  horizontal: logo as StaticImageData,
  vertical: logoVertical as StaticImageData,
  banner: banner as StaticImageData,
};

export const hoatDongImages: StaticImageData[] = [
  hoatDong1,
  hoatDong2,
  hoatDong3,
  hoatDong4,
  hoatDong5,
  hoatDong6,
];

export const posterImages: StaticImageData[] = [poster1, poster2];

export const tieuHocImages: StaticImageData[] = [
  tieuHoc1,
  tieuHoc2,
  tieuHoc3,
  tieuHoc4,
  tieuHoc5,
];

export const vinhDanhImages: StaticImageData[] = [
  vinhDanh1,
  vinhDanh2,
  vinhDanh3,
  vinhDanh4,
  vinhDanh5,
  vinhDanh6,
  vinhDanh7,
  vinhDanh8,
];

export const site = {
  name: "MYENGLISH",
  tagline: "Better English, Better Life!",
  hotlines: ["0907 188 212", "0939 039 947"],
  address: "37A Lê Hồng Phong, P. Thới An Đông, TP. Cần Thơ",
  facebook: "https://www.facebook.com/mye2021",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.520512077668!2d105.71732396677268!3d10.088422266354023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0875c27e78bf1%3A0xe968dc24fe086895!2sTrung%20T%C3%A2m%20Anh%20Ng%E1%BB%AF%20MY%20ENGLISH!5e0!3m2!1sen!2s!4v1776504527762!5m2!1sen!2s",
} as const;

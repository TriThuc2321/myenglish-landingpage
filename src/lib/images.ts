import type { StaticImageData } from "next/image";

import banner from "@/assets/images/banner.png";
import logo from "@/assets/images/logo.png";
import logoVertical from "@/assets/images/logo_vertical.png";

import gtd1 from "@/assets/images/giao-tiep-chu-de/3.jpg";
import gtd2 from "@/assets/images/giao-tiep-chu-de/2.jpg";
import gtd3 from "@/assets/images/giao-tiep-chu-de/1.jpg";
import gtd4 from "@/assets/images/giao-tiep-chu-de/4.jpg";
import gtd5 from "@/assets/images/giao-tiep-chu-de/5.jpg";
import gtd6 from "@/assets/images/giao-tiep-chu-de/6.jpg";
import gtd7 from "@/assets/images/giao-tiep-chu-de/7.jpg";

import gv1 from "@/assets/images/giao-vien-nhan-vien/1.jpg";
import gv2 from "@/assets/images/giao-vien-nhan-vien/2.jpg";
import gv3 from "@/assets/images/giao-vien-nhan-vien/3.jpg";
import gv4 from "@/assets/images/giao-vien-nhan-vien/4.jpg";

import hd1 from "@/assets/images/hoat-dong-trai-nghiem/1.jpg";
import hd2 from "@/assets/images/hoat-dong-trai-nghiem/2.jpg";
import hd3 from "@/assets/images/hoat-dong-trai-nghiem/3.jpg";
import hd4 from "@/assets/images/hoat-dong-trai-nghiem/4.jpg";
import hd5 from "@/assets/images/hoat-dong-trai-nghiem/5.jpg";
import hd6 from "@/assets/images/hoat-dong-trai-nghiem/6.jpg";
import hd7 from "@/assets/images/hoat-dong-trai-nghiem/7.jpg";
import hd8 from "@/assets/images/hoat-dong-trai-nghiem/8.jpg";

import t1 from "@/assets/images/thanh-tich/1.jpg";
import t2 from "@/assets/images/thanh-tich/2.jpg";
import t3 from "@/assets/images/thanh-tich/3.jpg";
import t4 from "@/assets/images/thanh-tich/4.jpg";
import t5 from "@/assets/images/thanh-tich/5.jpg";
import t6 from "@/assets/images/thanh-tich/6.jpg";
import t7 from "@/assets/images/thanh-tich/7.jpg";
import t8 from "@/assets/images/thanh-tich/8.jpg";

import founder from "@/assets/images/founder.jpg";

export { banner, logo, logoVertical };

export const activitiesImages: StaticImageData[] = [
  hd1,
  hd2,
  hd3,
  hd4,
  hd5,
  hd6,
  hd7,
  hd8,
];

export const communicationTopicImages: StaticImageData[] = [
  gtd1,
  gtd2,
  gtd3,
  gtd4,
  gtd5,
  gtd6,
  gtd7,
];

export const teacherImages: StaticImageData[] = [gv1, gv2, gv3, gv4];

/** Thay bằng ảnh riêng của CEO khi có */
export const founderPhoto: StaticImageData = founder;

export const visionBg: StaticImageData = hd2;

export const achievementImages: StaticImageData[] = [t1, t2, t3, t4, t5, t6, t7, t8];

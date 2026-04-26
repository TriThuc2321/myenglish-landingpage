export type NavItem = { label: string; href: string };

export type Usp = { title: string; description: string };

export type CoreProgram = {
  id: string;
  title: string;
  description: string;
};

export type KidCourseRow = {
  capDo: string;
  doTuoi: string;
  khoaHoc: string;
  thoiLuong: string;
};

export type AdultCourseRow = {
  doiTuong: string;
  khoaHoc: string;
  thoiLuong: string;
};

export type IeltsCambridgeRow = {
  capDo: string;
  khoaHoc: string;
  thoiLuong: string;
};

export type KetPetRow = {
  capDo: string;
  doTuoi: string;
  khoaHoc: string;
  thoiLuong: string;
};

const kidsCourses: KidCourseRow[] = [
  {
    capDo: "5–6 tuổi",
    doTuoi: "5–6",
    khoaHoc: "Baby Dolphin 1/2",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "Starters",
    doTuoi: "6–8",
    khoaHoc: "Young Dolphin 1/2 – Pre JD 1A/1B",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "Starters",
    doTuoi: "6–8",
    khoaHoc: "Junior Dolphin 2A/2B",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "Starters",
    doTuoi: "6–8",
    khoaHoc: "Pre Starters 1/2/3 – Starters 1/2/3/4/5",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "Movers",
    doTuoi: "8–10",
    khoaHoc: "Pre Movers 1/2 – Movers 1/2/3/4/5",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "Flyers",
    doTuoi: "11–12",
    khoaHoc: "Pre Flyers 1/2 – Flyers 1/2/3/4/5/6",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
];

const adultsCourses: AdultCourseRow[] = [
  {
    doiTuong: "Người đi làm",
    khoaHoc: "Communication 1/2/3/4",
    thoiLuong: "8 buổi (1h30/buổi)",
  },
];

const ieltsPrePetCourses: (IeltsCambridgeRow | KetPetRow)[] = [
  {
    capDo: "Pre IELTS",
    khoaHoc: "Pre IELTS 1/2/3/4/5",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "IELTS 4.0–5.5",
    khoaHoc: "Write/Read/Listen 1A/B/C/D + Speak 1A/B/C/D",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "IELTS 6.0–6.5",
    khoaHoc: "Write/Read/Listen 2A/B/C/D + Speak 2A/B/C/D",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
];

const ketPetCourses: KetPetRow[] = [
  {
    capDo: "KET",
    doTuoi: "12–15",
    khoaHoc: "KET 1/2/3/4/5/6/7",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
  {
    capDo: "PET",
    doTuoi: "15+",
    khoaHoc: "PET 1/2/3/4/5/6/7/8",
    thoiLuong: "8 tuần (2 buổi/tuần)",
  },
];

const online1to1Bullets: string[] = [
  "Thời gian học tập linh hoạt",
  "Tối ưu lịch học cá nhân",
  "Lộ trình học phù hợp với năng lực người học",
  "Tăng khả năng sử dụng công nghệ",
  "Một thầy – một trò tăng khả năng tương tác giao tiếp",
  "Học tiếng Anh theo lộ trình quốc tế tại nhà với học phí ưu đãi",
];

const grammarBullets: string[] = [
  "Hệ thống ngữ pháp theo chương trình của Bộ GD & ĐT",
  "Thực hành kỹ năng phân tích và làm bài",
  "Bổ sung thêm vốn từ vựng căn bản",
  "Giao và kiểm tra bài tập trực tiếp mỗi buổi học",
  "Thời gian học linh hoạt theo yêu cầu của người học",
];

const USPS: Usp[] = [
  {
    title: "Đào tạo tiếng Anh Thiếu nhi & Thiếu niên",
    description:
      "Chương trình học được thiết kế sinh động, khơi gợi niềm đam mê ngôn ngữ từ sớm, giúp các em hình thành tư duy tiếng Anh tự nhiên như người bản xứ.",
  },
  {
    title: "Luyện thi chứng chỉ quốc tế CAMBRIDGE & IELTS",
    description:
      "Lộ trình cá nhân hóa, bám sát cấu trúc đề thi thực tế. Chúng tôi cam kết đầu ra, giúp học viên tự tin chinh phục các chứng chỉ Starters, Movers, Flyers, KET, PET và đạt band điểm IELTS mục tiêu.",
  },
  {
    title: "Tiếng Anh Giao tiếp Đột phá",
    description:
      "Tập trung vào phản xạ và phát âm chuẩn, giúp người học tự tin sử dụng tiếng Anh trong môi trường làm việc và đời sống quốc tế.",
  },
  {
    title: "Chất lượng đào tạo vượt trội",
    description:
      "Đội ngũ giáo viên giàu kinh nghiệm, tâm huyết cùng cơ sở vật chất hiện đại, ứng dụng công nghệ vào giảng dạy để tối ưu hóa hiệu quả học tập.",
  },
];

const CORE: CoreProgram[] = [
  {
    id: "cambridge",
    title: "Đào tạo chương trình tiếng Anh Cambridge",
    description:
      "Lộ trình từ Baby Dolphin đến Flyers, KET, PET — chương trình sinh động, bám sát khung thi Cambridge quốc tế.",
  },
  {
    id: "ielts",
    title: "Đào tạo chương trình luyện thi IELTS",
    description:
      "Lộ trình cá nhân hóa từ Pre IELTS đến band mục tiêu; bám sát cấu trúc đề thi, hỗ trợ tối đa kỹ năng và đầu ra.",
  },
  {
    id: "communication",
    title: "Tiếng Anh giao tiếp cho sinh viên, người đi làm",
    description:
      "Tập trung phản xạ và phát âm chuẩn — Communication 1–4 phù hợp môi trường làm việc và đời sống quốc tế.",
  },
];

export const SITE = {
  brand: {
    name: "MYENGLISH",
    tagline: "Better English, Better Life!",
  },
  intro: {
    lead:
      "MYENGLISH tự hào là đơn vị tiên phong, mang đến giải pháp đào tạo tiếng Anh toàn diện, giúp mọi thế hệ học viên bứt phá giới hạn bản thân.",
    whyTitle: "Tại sao MYENGLISH là lựa chọn số 1 của Phụ huynh & Học viên?",
  },
  navigation: [
    { label: "Giới thiệu", href: "#about" },
    { label: "Tầm nhìn", href: "#vision" },
    { label: "Chương trình", href: "#programs" },
    { label: "Lộ trình", href: "#curriculum" },
    { label: "Hoạt động", href: "#activities" },
    { label: "Thành tích", href: "#achievements" },
    { label: "Giáo viên", href: "#teachers" },
    { label: "Founder", href: "#founder" },
    { label: "Liên hệ", href: "#contact" },
  ] satisfies NavItem[],
  stats: {
    /** Có thể cập nhật số thực tế */
    programCount: 4,
    studentCount: 1000,
    commitmentPercent: 100,
  },
  founder: {
    name: "Nguyễn Thị Anh Đào",
    role: "CEO & Founder",
    bio:
      "Dẫn dắt đội ngũ MYENGLISH cùng sứ mệnh: Tiếng Anh tốt hơn để cuộc sống tốt đẹp hơn — đồng hành tận tâm cùng từng học viên trên hành trình bứt phá bản thân.",
  },
  contact: {
    hotlines: ["0907 188 212", "0939 039 947"],
    address: "37A Lê Hồng Phong, p. Thới An Đông, TP. Cần Thơ",
    mapsOpenUrl:
      "https://www.google.com/maps/search/?api=1&query=Trung+T%C3%A2m+Anh+Ng%E1%BB%AF+MY+ENGLISH+C%E1%BA%A7n+Th%C6%A1",
    facebook: "https://www.facebook.com/mye2021",
    email: "myenglish.cambridge@gmail.com",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.520512077668!2d105.71732396677268!3d10.088422266354023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0875c27e78bf1%3A0xe968dc24fe086895!2sTrung%20T%C3%A2m%20Anh%20Ng%E1%BB%AF%20MY%20ENGLISH!5e0!3m2!1sen!2s!4v1776504527762!5m2!1sen!2s",
  },
  usps: USPS,
  visionMission: {
    vision: {
      title: "Tầm nhìn",
      text:
        'Không chỉ dừng lại ở việc dạy ngôn ngữ, MYENGLISH khát vọng xây dựng một cộng đồng học tập năng động, nơi mỗi học viên đều được trang bị "chìa khóa" để trở thành những công dân toàn cầu ưu tú.',
    },
    mission: {
      title: "Sứ mệnh",
      text:
        "Tại MYENGLISH, mỗi bài học là một bước tiến, mỗi nỗ lực là một sự đổi thay. Chúng tôi tận tâm đồng hành để mỗi giây phút học tập của học viên đều hướng tới mục tiêu: Tiếng Anh tốt hơn để cuộc sống tốt đẹp hơn.",
    },
  },
  corePrograms: CORE,
  curriculum: {
    kidsTitle: "Tiếng Anh thiếu nhi (5–12 tuổi)",
    kids: kidsCourses,
    adultsTitle: "Tiếng Anh người lớn (Sinh viên / Người đi làm)",
    adults: adultsCourses,
    ieltsTitle: "Luyện thi IELTS (Pre IELTS & band 4.0 – 6.5)",
    ielts: ieltsPrePetCourses as IeltsCambridgeRow[],
    ketPetTitle: "Luyện thi KET & PET (Cambridge)",
    ketPet: ketPetCourses,
    online1to1Title: "Khung chương trình học online 1:1",
    online1to1: online1to1Bullets,
    grammarTitle: "Chương trình ngữ pháp",
    grammar: grammarBullets,
  },
} as const;

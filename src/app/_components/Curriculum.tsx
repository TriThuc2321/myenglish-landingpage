"use client";

import { Tab, Tabs } from "@heroui/tabs";
import { SITE } from "@/data/site";
import Reveal from "./Reveal";

const tableClass =
  "w-full text-sm sm:text-base border-collapse border border-secondary/15 rounded-2xl overflow-hidden";

const thClass =
  "text-left p-3 sm:p-4 font-display font-semibold text-secondary bg-secondary/5 border-b border-secondary/15";
const tdClass = "p-3 sm:p-4 text-secondary/85 border-b border-secondary/10";

function KidsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className={tableClass}>
        <caption className="sr-only">{SITE.curriculum.kidsTitle}</caption>
        <thead>
          <tr>
            <th className={thClass} scope="col">
              Cấp độ
            </th>
            <th className={thClass} scope="col">
              Độ tuổi
            </th>
            <th className={thClass} scope="col">
              Khóa học
            </th>
            <th className={thClass} scope="col">
              Thời lượng
            </th>
          </tr>
        </thead>
        <tbody>
          {SITE.curriculum.kids.map((row) => (
            <tr
              key={`${row.capDo}-${row.khoaHoc}`}
              className="last:[&>td]:border-0"
            >
              <td className={tdClass}>{row.capDo}</td>
              <td className={tdClass}>{row.doTuoi}</td>
              <td className={tdClass}>{row.khoaHoc}</td>
              <td className={tdClass}>{row.thoiLuong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdultsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className={tableClass}>
        <caption className="sr-only">{SITE.curriculum.adultsTitle}</caption>
        <thead>
          <tr>
            <th className={thClass} scope="col">
              Đối tượng
            </th>
            <th className={thClass} scope="col">
              Khóa học
            </th>
            <th className={thClass} scope="col">
              Thời lượng
            </th>
          </tr>
        </thead>
        <tbody>
          {SITE.curriculum.adults.map((row) => (
            <tr key={row.khoaHoc} className="last:[&>td]:border-0">
              <td className={tdClass}>{row.doiTuong}</td>
              <td className={tdClass}>{row.khoaHoc}</td>
              <td className={tdClass}>{row.thoiLuong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IeltsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className={tableClass}>
        <caption className="sr-only">{SITE.curriculum.ieltsTitle}</caption>
        <thead>
          <tr>
            <th className={thClass} scope="col">
              Cấp độ
            </th>
            <th className={thClass} scope="col">
              Khóa học
            </th>
            <th className={thClass} scope="col">
              Thời lượng
            </th>
          </tr>
        </thead>
        <tbody>
          {SITE.curriculum.ielts.map((row) => (
            <tr key={row.capDo} className="last:[&>td]:border-0">
              <td className={tdClass}>{row.capDo}</td>
              <td className={tdClass}>{row.khoaHoc}</td>
              <td className={tdClass}>{row.thoiLuong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function KetPetTable() {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className={tableClass}>
        <caption className="sr-only">{SITE.curriculum.ketPetTitle}</caption>
        <thead>
          <tr>
            <th className={thClass} scope="col">
              Cấp độ
            </th>
            <th className={thClass} scope="col">
              Độ tuổi
            </th>
            <th className={thClass} scope="col">
              Khóa học
            </th>
            <th className={thClass} scope="col">
              Thời lượng
            </th>
          </tr>
        </thead>
        <tbody>
          {SITE.curriculum.ketPet.map((row) => (
            <tr key={row.capDo} className="last:[&>td]:border-0">
              <td className={tdClass}>{row.capDo}</td>
              <td className={tdClass}>{row.doTuoi}</td>
              <td className={tdClass}>{row.khoaHoc}</td>
              <td className={tdClass}>{row.thoiLuong}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OnlineAndGrammar() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="font-display text-xl font-semibold text-secondary mb-4">
          {SITE.curriculum.online1to1Title}
        </h3>
        <ul className="space-y-3">
          {SITE.curriculum.online1to1.map((t) => (
            <li
              key={t}
              className="flex gap-3 text-secondary/85 leading-relaxed pl-1"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-xl font-semibold text-secondary mb-4">
          {SITE.curriculum.grammarTitle}
        </h3>
        <ul className="space-y-3">
          {SITE.curriculum.grammar.map((t) => (
            <li
              key={t}
              className="flex gap-3 text-secondary/85 leading-relaxed pl-1"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary/60"
                aria-hidden
              />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Curriculum() {
  return (
    <section
      id="curriculum"
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-dots opacity-30 pointer-events-none"
        aria-hidden
      />
      <div className="container mx-auto relative">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-primary font-display font-bold text-xl">
            <span className="h-px w-8 bg-primary" />
            Chương trình đào tạo
          </span>
          <h2 className="mt-2 font-display font-bold tracking-tight text-balance text-4xl sm:text-5xl text-secondary">
            Lộ trình theo
            <span className="italic text-primary"> nhu cầu & độ tuổi</span>
          </h2>
          <p className="mt-4 text-secondary/70 text-lg max-w-2xl">
            Chọn nhóm dưới đây để xem chi tiết thời lượng, khóa học tương ứng.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={0.08}>
          <Tabs
            variant="underlined"
            classNames={{
              base: "w-full",
              tabList: "w-full gap-0 border-b border-secondary/15",
              tab: "data-[selected=true]:text-primary",
              panel: "pt-8",
            }}
            defaultSelectedKey="kids"
            aria-label="Lộ trình chương trình"
          >
            <Tab key="kids" title="Thiếu nhi (5–12)">
              <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                {SITE.curriculum.kidsTitle}
              </h3>
              <KidsTable />
            </Tab>
            <Tab key="adults" title="Người lớn">
              <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                {SITE.curriculum.adultsTitle}
              </h3>
              <AdultsTable />
            </Tab>
            <Tab key="ielts" title="IELTS">
              <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                {SITE.curriculum.ieltsTitle}
              </h3>
              <IeltsTable />
            </Tab>
            <Tab key="ketpet" title="KET / PET">
              <h3 className="font-display text-lg font-semibold text-secondary mb-4">
                {SITE.curriculum.ketPetTitle}
              </h3>
              <KetPetTable />
            </Tab>
            <Tab key="extra" title="Online 1:1 & Ngữ pháp">
              <OnlineAndGrammar />
            </Tab>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}

export default Curriculum;

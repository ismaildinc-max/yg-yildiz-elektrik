"use client";

import { useState } from "react";
const faqItems = [
  {
    question: "Zayıf akım sistemleri hangi uygulamaları kapsar?",
    answer:
      "Zayıf akım sistemleri; kamera, yangın algılama, kartlı geçiş, data altyapısı ve benzeri düşük akım ile çalışan güvenlik ve iletişim çözümlerini kapsar.",
  },
  {
    question: "AG ve OG projelerinde hangi hizmetleri sunuyorsunuz?",
    answer:
      "Alçak Gerilim ve Orta Gerilim projelerinde keşif, projelendirme, uygulama, saha koordinasyonu ve devreye alma süreçlerinde hizmet sunuyoruz.",
  },
  {
    question: "Güneş enerjisi projeleri için keşif yapıyor musunuz?",
    answer:
      "Evet. Güneş enerjisi projelerinde saha analizi, ihtiyaç tespiti, sistem planlama ve uygun kurulum altyapısı için keşif hizmeti veriyoruz.",
  },
  {
    question: "Araç şarj altyapısı için kurulum desteği veriyor musunuz?",
    answer:
      "Evet. Elektrikli araçlar için uygun şarj altyapısının planlanması, elektriksel uygunluk kontrolü ve kurulum süreçlerinde destek sağlıyoruz.",
  },
];

export default function YGFAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] 2xl:max-w-[1400px] 2xl:gap-14">
        <div className="flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-[30px] shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <img
              src="/images/Image_fx-241.png"
              alt="Sahada çalışan personel"
              className="h-[380px] w-[400px] object-cover md:h-[420px] md:w-[460px] 2xl:h-[450px] 2xl:w-[500px]"
            />
          </div>
        </div>

        <div className="max-w-[720px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f4bf2a]">
            S.S.S.
          </p>

          <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-[#2f323c] md:text-[44px] 2xl:text-[48px]">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-5 h-[3px] w-16 rounded-full bg-[#f4bf2a]" />

          <div className="mt-10 space-y-4">
  {faqItems.map((item, index) => {
    const isOpen = openIndex === index;

    return (
      <div
        key={index}
        className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.03)]"
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        >
          <p className="text-[15px] font-medium text-[#2f323c]">
            {item.question}
          </p>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f4bf2a] text-[#2f323c]">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {isOpen && (
          <div className="px-5 pb-5">
            <p className="text-[15px] leading-7 text-[#666a73]">
              {item.answer}
            </p>
          </div>
        )}
      </div>
    );
  })}
</div>
    
        </div>
      </div>
    </section>
  );
}

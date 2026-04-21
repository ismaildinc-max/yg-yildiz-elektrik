import {
  BadgeCheck,
  BatteryCharging,
  BriefcaseBusiness,
  HardHat,
} from "lucide-react";

const statsItems = [
  {
    title: "250+ Tamamlanan Proje",
    desc: "Konut, ticari ve endüstriyel alanlarda başarıyla tamamlanan elektrik ve enerji altyapı projeleri.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "10+ Yıllık Saha Deneyimi",
    desc: "Elektrik taahhüt ve enerji sistemlerinde, mühendislik temelli uygulama tecrübesi.",
    Icon: HardHat,
  },
  {
    title: "50+ GES & Şarj Altyapı Uygulaması",
    desc: "Güneş enerjisi sistemleri ve elektrikli araç şarj istasyonu kurulumları.",
    Icon: BatteryCharging,
  },
  {
    title: "%100 Yönetmeliklere Uygun Teslim",
    desc: "Tüm projelerde ilgili standartlara, mevzuata ve güvenlik kriterlerine tam uyum.",
    Icon: BadgeCheck,
  },
];

export default function YGStatsBand() {
  return (
    <section className="bg-[#f8f8f8] px-4 py-20 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
      <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="grid justify-items-center gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-5 2xl:gap-8">
          {statsItems.map((item, index) => (
            <div
              key={index}
              className="relative flex w-full max-w-[320px] flex-col items-center text-center xl:max-w-none"
            >
              {index !== statsItems.length - 1 && (
                <div className="absolute left-[calc(50%+46px)] top-[38px] hidden h-px w-[calc(100%-92px)] border-t border-dashed border-[#b8b8b8] xl:block 2xl:left-[calc(50%+52px)] 2xl:top-[42px] 2xl:w-[calc(100%-104px)]" />
              )}

              <div className="mx-auto mb-6 flex h-[84px] w-[84px] items-center justify-center rounded-[22px] bg-[#f4bf2a] text-[#2f323c] shadow-[0_8px_20px_rgba(244,191,42,0.28)] xl:mb-5 xl:h-[76px] xl:w-[76px] xl:rounded-[20px] 2xl:mb-6 2xl:h-[84px] 2xl:w-[84px] 2xl:rounded-[22px]">
                <item.Icon
                  aria-hidden="true"
                  className="h-[34px] w-[34px] xl:h-8 xl:w-8 2xl:h-[34px] 2xl:w-[34px]"
                  strokeWidth={2.1}
                />
              </div>

              <h3 className="mx-auto max-w-[270px] text-center text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#2f323c] xl:max-w-[245px] xl:text-[21px] 2xl:max-w-[270px] 2xl:text-[24px]">
                {item.title}
              </h3>

              <p className="mx-auto mt-3 max-w-[280px] text-center text-[15px] leading-7 text-[#666a73] xl:max-w-[245px] xl:text-[14px] xl:leading-6 2xl:max-w-[280px] 2xl:text-[15px] 2xl:leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

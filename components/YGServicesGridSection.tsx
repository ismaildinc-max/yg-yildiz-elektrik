import Link from "next/link";
import { ArrowLeft, ArrowRight, Bolt, SunMedium, BatteryCharging, Zap, Sprout, FilePenLine } from "lucide-react";

const services = [
  {
    icon: Bolt,
    title: "Zayıf Akım\nSistemleri",
    text: "Kamera, alarm, yangın ihbar ve data altyapıları; güvenli, ölçeklenebilir ve yönetilebilir şekilde projelendirilir ve uygulanır.",
    href: "/hizmetlerimiz/zayif-akim-sistemleri",
  },
  {
    icon: SunMedium,
    title: "Güneş Enerjisi\nSistemleri (GES)",
    text: "Çatı ve arazi uygulamalarında doğru projelendirme ile maksimum verim hedeflenir, kurulum ve devreye alma süreçleri yönetilir.",
    href: "/hizmetlerimiz/gunes-enerjisi-sistemleri",
  },
  {
    icon: BatteryCharging,
    title: "Elektrikli Araç Şarj\nİstasyonları",
    text: "Konut ve ticari alanlar için güvenli, yönetilebilir ve altyapıya uygun şarj çözümleri sunulur.",
    href: "/hizmetlerimiz/elektrikli-arac-sarj-istasyonlari",
  },
  {
    icon: Zap,
    title: "Alçak & Orta Gerilim\nUygulamaları",
    text: "Pano, kablolama ve dağıtım sistemleri, enerji sürekliliği ve işletme güvenliği esas alınarak anahtar teslim hayata geçirilir.",
    href: "/hizmetlerimiz/alcak-orta-gerilim-uygulamalari",
  },
  {
    icon: Sprout,
    title: "Tarım Sulama Enerji\nSistemleri",
    text: "Pompa beslemeleri ve otomasyon altyapıları, tarımsal verimliliği artıracak şekilde projelendirilir ve kurulur.",
    href: "/hizmetlerimiz/tarim-sulama-enerji-sistemleri",
  },
  {
    icon: FilePenLine,
    title: "İnşaat Elektrik\nTaahhüt",
    text: "İnşaat projelerinde elektrik altyapıları, iş programına uyumlu ve kontrollü saha yönetimiyle uygulanır.",
    href: "/hizmetlerimiz/insaat-elektrik-taahhut",
  },
];

export default function YGServicesGridSection() {
  return (
    <section className="bg-[#f8f8f8] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <h2 className="text-[34px] font-semibold tracking-[-0.03em] text-[#2f323c]">
              Hizmetlerimiz
            </h2>
            <div className="mt-4 h-[4px] w-10 rounded-full bg-[#f4bf2a]" />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f4bf2a] text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#2f323c]"
            >
              <ArrowLeft className="h-5 w-5" strokeWidth={2} />
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f4bf2a] text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#2f323c]"
            >
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
            <Link
  key={index}
  href={service.href}
  className="group block rounded-[22px] border border-[#f1dfaa] bg-white px-7 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f4bf2a] hover:bg-[#fffdf8] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
>
  <div className="flex flex-col items-center text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#f4bf2a] text-white transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_24px_rgba(244,191,42,0.28)]">
      <Icon className="h-8 w-8" strokeWidth={2} />
    </div>

    <h3 className="pt-3 max-w-[240px] whitespace-pre-line text-[19px] font-bold leading-[1.2] tracking-[-0.03em] text-[#2f323c] transition-colors duration-300 group-hover:text-[#1f2126]">
      {service.title}
    </h3>

    <p className="pt-2 max-w-[255px] text-[14px] leading-6 text-[#2f323c]/68 transition-colors duration-300 group-hover:text-[#2f323c]/82">
      {service.text}
    </p>
  </div>
</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import {
  Building2,
  Cable,
  Drill,
  Factory,
  Fuel,
  GraduationCap,
  Hotel,
  Leaf,
  Network,
  PlugZap,
  ShieldCheck,
  Sprout,
  Trophy,
  Truck,
  Wrench,
  Zap,
  Activity,
} from "lucide-react";

import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGPageHero from "@/components/YGPageHero";

const references = [
  {
    name: "Proses İklimlendirme",
    description: "400 KVA direk tipi trafo kurulumu ve proje çalışması",
    icon: Factory,
  },
  {
    name: "Laren Resort Otel",
    description: "400 KVA direk tipi trafo, hatbaşı ayırıcı ve 150 metre XLP hattı",
    icon: Hotel,
  },
  {
    name: "BOTAŞ",
    description: "250 KVA direk tipi trafo kurulumu ve proje çalışması",
    icon: Network,
  },
  {
    name: "The Land of Legends",
    description: "30.9 MVA güç artışı ve trafo postası yapım işi",
    icon: Zap,
  },
  {
    name: "MBA Tarım",
    description: "400 KVA’dan 800 KVA’ya güç artışı ve beton köşk trafo postası",
    icon: Sprout,
  },
  {
    name: "Antalya Konteyner",
    description: "Tesis enerji altyapısı için güç artışı çalışması",
    icon: Truck,
  },
  {
    name: "Aytemiz",
    description: "100 KVA üçüncü şahıs trafo bakım ve onarım çalışması",
    icon: Fuel,
  },
  {
    name: "CW Enerji",
    description: "400 KVA trafo kurulumu",
    icon: PlugZap,
  },
  {
    name: "Medical Park",
    description: "Enerji altyapısı kapsamında yatay sondaj çalışması",
    icon: Activity,
  },
  {
    name: "Temiz Çevre",
    description: "400 KVA trafo kurulumu ve proje çalışması",
    icon: Leaf,
  },
  {
    name: "Serik Spor",
    description: "Yeraltı hattı çekimi ve pano kurulum çalışmaları",
    icon: Trophy,
  },
  {
    name: "Serik Orhangazi Endüstri Meslek Lisesi",
    description: "160 KVA trafo değişimi",
    icon: GraduationCap,
  },
];

export default function ReferanslarPage() {
  return (
    <main className="min-h-screen bg-white">
      <YGHeader />

      <YGPageHero
  title="Referanslarımız"
  breadcrumbItems={[
    { label: "Anasayfa", href: "/" },
    { label: "Referanslarımız" },
  ]}
/>

      <section className="bg-[#f7f7f7] py-20 md:py-24">
        <div className="mx-auto max-w-[1180px] px-4 md:px-8 lg:px-10 2xl:max-w-[1500px]">
          <div className="mb-12 flex items-start gap-4">
            <span className="mt-1 block h-16 w-[4px] rounded-full bg-[#f4bf2a]" />

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f4bf2a]">
                seçili referanslar
              </p>
              <h2 className="pt-3 text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#2f323c] md:text-[34px]">
                Bizi tercih edenler
              </h2>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {references.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.name}
                  className="group relative flex min-h-[175px] items-center justify-center overflow-hidden rounded-[24px] border border-[#ececec] bg-white px-7 py-8 text-center shadow-[0_14px_35px_rgba(0,0,0,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f4bf2a]/70 hover:shadow-[0_24px_55px_rgba(0,0,0,0.10)]"
                >
                  <div className="absolute right-5 top-5 h-16 w-16 rounded-full bg-[#f4bf2a]/[0.08] opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex w-full flex-col items-center justify-center">
                    <div className="mb-8 flex h-9 w-9 items-center justify-center text-[#f4bf2a] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>

                    <h3 className="mx-auto text-center text-[21px] font-bold leading-snug text-[#252833]">
  {item.name}
</h3>

<p className="mx-auto mt-1 text-center text-[13px] font-medium leading-relaxed text-[#7a7d86]">
  {item.description}
</p>
                  </div>

                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#f4bf2a] transition-all duration-300 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <YGFooter />
    </main>
  );
}
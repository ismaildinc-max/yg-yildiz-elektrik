import { notFound } from "next/navigation";
import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGPageHero from "@/components/YGPageHero";
import { serviceData } from "@/data/services";


export default async function HizmetDetayPage({

  params,

}: {

  params: { slug: string };

}) {

  const service = Object.values(serviceData).find(
  (item: any) => item.slug === params.slug
);

if (!service) {
  notFound();
}

  const heroDescription =
  "description" in service && typeof service.description === "string"
    ? service.description
    : undefined;

  return (

    <main className="bg-white">

      <YGHeader />

      <YGPageHero

        title={service?.title ?? "Hizmet Detayı"}

        description={heroDescription}

        breadcrumbItems={[

          { label: "Anasayfa", href: "/" },

          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },

          { label: service?.title ?? "Hizmet Detayı" },

        ]}

      />

      <section className="bg-[#f8f8f8] px-4 py-16 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="rounded-[26px] bg-[#2f323c] p-6 text-white shadow-[0_18px_50px_rgba(47,50,60,0.16)] md:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f4bf2a]">
                  Hizmet Detayı
                </p>
                <h2 className="pt-3 text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[34px]">
                  Kontrollü, güvenli ve uzun ömürlü altyapılar
                </h2>
                <p className="pt-3 text-[15px] leading-7 text-white/68">
                  Her hizmet başlığında amaç; doğru keşif, doğru ekipman seçimi
                  ve sahada disiplinli uygulama ile işletmeye güven veren bir
                  sistem ortaya koymaktır.
                </p>
                <div className="mt-5 h-[3px] w-14 rounded-full bg-[#f4bf2a]" />
              </div>
            </aside>

            <div className="space-y-6">
              {service?.sections?.map((section, index) => {
                const sectionNumber = String(index + 1).padStart(2, "0");

                return (
                  <article
                    key={index}
                    className="rounded-[26px] border border-[#ececec] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.045)] md:p-8"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f4bf2a] text-[13px] font-bold text-[#2f323c]">
                        {sectionNumber}
                      </span>

                      <div>
                        <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-[#2f323c] md:text-[30px]">
                          {section.heading}
                        </h2>

                        <div className="mt-5 space-y-4">
                          {section.paragraphs?.map(
                            (paragraph, paragraphIndex) => (
                              <p
                                key={paragraphIndex}
                                className="text-[15px] leading-7 text-[#5b616e] md:text-[16px]"
                              >
                                {paragraph}
                              </p>
                            )
                          )}
                        </div>

                        {section.bullets && (
                          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                            {section.bullets.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex gap-3 rounded-2xl border border-[#eeeeee] bg-[#fbfbfb] px-4 py-3 text-[14px] leading-6 text-[#4f5561]"
                              >
                                <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#f4bf2a]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {"note" in section && section.note && (
                          <div className="mt-7 rounded-2xl bg-[#2f323c] px-5 py-4">
                            <p className="text-[14px] leading-7 text-white/78 md:text-[15px]">
                              {section.note}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <YGFooter />
    </main>
  );
}

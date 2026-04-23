import { notFound } from "next/navigation";
import Link from "next/link";
import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGPageHero from "@/components/YGPageHero";
import { blogData } from "@/data/blog";

export default async function BlogDetayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = blogData[slug as keyof typeof blogData];

  if (!post) {
    notFound();
  }

  const heroDescription =
    "description" in post && typeof post.description === "string"
      ? post.description
      : undefined;

  return (
    <main className="bg-white">
      <YGHeader />

      <YGPageHero
        title={post.title}
        breadcrumbItems={[
          { label: "Anasayfa", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <section className="bg-[#f8f8f8] px-4 py-16 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#2f323c] text-white shadow-[0_18px_50px_rgba(47,50,60,0.16)]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-[220px] w-full object-cover"
                />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#f4bf2a]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f4bf2a]">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-white/58">{post.date}</span>
                  </div>

                  <h2 className="pt-4 text-[26px] font-semibold leading-tight tracking-[-0.03em] md:text-[30px]">
                    {post.title}
                  </h2>

                  <p className="pt-4 text-[15px] leading-7 text-white/72">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 h-[3px] w-14 rounded-full bg-[#f4bf2a]" />

                  <div className="pt-6">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-white/88 transition hover:text-white"
                    >
                      ← Tüm Yazılara Dön
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              {post.sections?.map((section, index) => {
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

                      <div className="flex-1">
                        <h2 className="text-[24px] font-semibold leading-tight tracking-[-0.025em] text-[#2f323c] md:text-[30px]">
                          {section.heading}
                        </h2>

                        <div className="mt-5 space-y-4">
                          {section.paragraphs?.map((paragraph, paragraphIndex) => (
                            <p
                              key={paragraphIndex}
                              className="text-[15px] leading-7 text-[#5b616e] md:text-[16px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {"bullets" in section && section.bullets && (
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

              <div className="rounded-[28px] bg-[#2f323c] px-6 py-8 text-white md:px-8 md:py-9">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f4bf2a]">
                  YG Yıldız Elektrik
                </p>

                <h2 className="pt-3 text-[24px] font-semibold leading-tight tracking-[-0.03em] md:text-[32px]">
                  Projeniz için doğru elektrik altyapısını birlikte değerlendirelim.
                </h2>

                <p className="pt-4 text-[15px] leading-7 text-white/72">
                  Hizmet alanlarımızı inceleyebilir, projenize uygun uygulama ve
                  planlama süreci için bizimle iletişime geçebilirsiniz.
                </p>

                <div className="pt-6 flex flex-wrap gap-3">
                  <Link
                    href="/hizmetlerimiz"
                    className="inline-flex items-center rounded-full bg-[#f4bf2a] px-5 py-3 text-[14px] font-semibold text-[#2f323c] transition hover:translate-y-[-1px]"
                  >
                    Hizmetlerimiz
                  </Link>

                  <Link
                    href="/iletisim"
                    className="inline-flex items-center rounded-full border border-white/14 px-5 py-3 text-[14px] font-medium text-white transition hover:bg-white/5"
                  >
                    İletişime Geç
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <YGFooter />
    </main>
  );
}
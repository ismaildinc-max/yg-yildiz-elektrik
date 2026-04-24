import Link from "next/link";
import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGPageHero from "@/components/YGPageHero";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  const otherPosts = blogPosts.slice(0);

  return (
    <main className="bg-white">
      <YGHeader />

      <YGPageHero
        title="Blog"
        breadcrumbItems={[
          { label: "Anasayfa", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="bg-[#f8f8f8] px-4 py-14 md:px-8 md:py-20 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          

          <div className="mt-14 flex items-end justify-between gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f4bf2a]">
                Güncel İçerikler
              </p>
              <h2 className="pt-3 text-[28px] font-semibold leading-tight tracking-[-0.03em] text-[#2f323c] md:text-[34px]">
                Uzmanlık alanlarımıza dair içerikler
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-[#ececec] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.06)] md:min-h-[560px]"
              >
                <div className="h-[240px] w-full shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#f4bf2a]/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c98d00]">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-[#8a909b]">{post.date}</span>
                  </div>

                  <h3 className="line-clamp-2 min-h-[3.6em] pt-4 text-[22px] font-semibold leading-[1.3] tracking-[-0.025em] text-[#2f323c] transition group-hover:text-[#1d2028]">
                    {post.title}
                  </h3>

                  <p className="line-clamp-3 min-h-[5.25em] pt-3 text-[15px] leading-7 text-[#5e6470]">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 text-[14px] font-medium text-[#2f323c]">
                    Devamını Oku <span className="transition group-hover:translate-x-1 inline-block">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-[30px] bg-[#2f323c] px-6 py-8 text-white md:px-10 md:py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-[700px]">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#f4bf2a]">
                  YG Yıldız Elektrik
                </p>
                <h2 className="pt-3 text-[26px] font-semibold leading-tight tracking-[-0.03em] md:text-[34px]">
                  Projeniz için doğru elektrik altyapısını birlikte planlayalım.
                </h2>
                <p className="pt-3 text-[15px] leading-7 text-white/72">
                  Hizmet alanlarımızı inceleyebilir, projenize uygun çözümler için bizimle
                  doğrudan iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center rounded-full bg-[#f4bf2a] px-5 py-3 text-[14px] font-semibold text-[#2f323c] transition hover:translate-y-[-1px]"
                >
                  Hizmetlerimiz
                </Link>

                <Link
                  href="/iletisim"
                  className="inline-flex items-center rounded-full border border-white/18 px-5 py-3 text-[14px] font-medium text-white transition hover:bg-white/5"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <YGFooter />
    </main>
  );
}

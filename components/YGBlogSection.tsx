const blogItems = [
  {
    image: "/images/blog-1.jpeg",
    author: "Admin",
    date: "3 Şubat 2026",
    title: "Alçak ve Orta Gerilim Projelerinde Doğru Uygulama Neden Hayati Önem Taşır?",
    desc: "Enerji sürekliliği, işletme güvenliği ve uzun ömürlü altyapı için AG-OG projelerinde doğru mühendislik ve saha uygulamasının kritik rolünü ele alıyoruz.",
    link: "#",
  },
  {
    image: "/images/blog-2.jpeg",
    author: "Admin",
    date: "3 Şubat 2026",
    title: "Güneş Enerjisi Sistemleri Kurulmadan Önce Bilinmesi Gereken 5 Teknik Detay",
    desc: "GES yatırım öncesinde verim, altyapı uygunluğu ve sistem performansını doğrudan etkileyen temel teknik kriterleri özetliyoruz.",
    link: "#",
  },
];

export default function YGBlogSection() {
  return (
    <section className="bg-[#f8f8f8] px-4 py-20 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
      <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="text-center">
          <h2 className="text-[38px] font-semibold leading-tight tracking-[-0.03em] text-[#2f323c] md:text-[48px] 2xl:text-[52px]">
            Blog
          </h2>

          <div className="mx-auto mt-4 h-[4px] w-10 rounded-full bg-[#f4bf2a]" />
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-2">
          {blogItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group overflow-hidden rounded-[28px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.14)]"
            >
              <div className="grid md:grid-cols-[260px_1fr]">
                <div className="relative h-[280px] overflow-hidden md:h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center gap-5 text-[13px] text-[#7c7f86]">
                      <div className="flex items-center gap-2">
                        <span className="text-[#f4bf2a]">👤</span>
                        <span>{item.author}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[#f4bf2a]">📅</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <h3 className="text-[24px] font-semibold leading-tight tracking-[-0.02em] text-[#2f323c] transition duration-300 group-hover:text-[#f4bf2a]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-7 text-[#666a73]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-[14px] font-medium text-[#2f323c]">
                    <span className="text-[#f4bf2a]">▶</span>
                    <span>Devamını Okuyun...</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

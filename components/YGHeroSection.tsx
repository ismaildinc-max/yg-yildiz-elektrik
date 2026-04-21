export default function YGHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#2f323c] text-white">
        <div className="pointer-events-none absolute inset-0">
  <img
    src="/images/teller.png"
    alt=""
    className="absolute left-0 top-[120px] h-[85%] w-[55%] object-contain opacity-[0.14] mix-blend-screen max-md:!hidden"
    style={{
      filter: "sepia(1) saturate(4) hue-rotate(-10deg) brightness(0.9)",
    }}
  />
</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,191,42,0.08),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto min-h-screen max-w-[1180px] px-4 pb-14 pt-28 md:px-8 md:pb-16 md:pt-32 lg:px-10 xl:px-12 2xl:max-w-[1600px] 2xl:px-10">
        <div className="grid min-h-[calc(100vh-11rem)] items-center gap-10 md:grid-cols-[0.92fr_1.08fr] 2xl:grid-cols-[0.9fr_1.1fr] 2xl:gap-12">
          <div className="max-w-[530px] 2xl:max-w-[560px]">
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.22em] text-[#f4bf2a]">
              10+ Yıllık Saha Deneyimi
            </p>

            <h1 className="mb-12 text-[40px] font-semibold leading-[1.16] tracking-[-0.04em] md:mb-14 md:text-[56px] md:leading-[1.14] 2xl:text-[62px]">
              Elektrikte ve Enerjide
              <br />
              Çözüm Ortağınız
              
            </h1>

            <p className="pt-6 max-w-[500px] text-[15px] leading-8 text-white/68 md:pt-8 md:text-[16px] 2xl:max-w-[520px] 2xl:text-[17px]">
              YG Yıldız Elektrik; alçak ve orta gerilim uygulamalarından zayıf
              akım sistemlerine, güneş enerjisi altyapılarına ve araç şarj
              çözümlerine kadar projeleri mühendislik disipliniyle planlar ve
              sahada uygular.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-xl bg-[#f4bf2a] px-6 py-3 text-sm font-semibold text-[#2f2f2f] transition hover:opacity-90"
              >
                Teklif Al
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Hizmetlerimiz
              </a>
            </div>

           
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-[#f4bf2a]">10+</p>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-white/65">
                    Yıllık saha ve uygulama deneyimi
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-[#f4bf2a]">AG-OG</p>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-white/65">
                    Elektrik altyapı ve taahhüt çözümleri
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-[#f4bf2a]">GES</p>
                  <p className="mt-1 line-clamp-2 text-sm leading-6 text-white/65">
                    Güneş enerjisi ve şarj altyapıları
                  </p>
                </div>
              </div>
            </div>

          <div className="relative self-center">
            <div className="relative overflow-hidden rounded-tl-[42px] rounded-tr-[42px] rounded-bl-[42px] rounded-br-[42px] shadow-[0_24px_80px_rgba(0,0,0,0.20)]">
              <img
                src="/images/hero.jpeg"
                alt="Enerji iletim hatları"
                className="h-[420px] w-full object-cover md:h-[560px] 2xl:h-[680px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 max-w-[290px] rounded-2xl border border-white/10 bg-[#1e2128]/80 p-5 backdrop-blur-md">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#f4bf2a]">
                Mühendislik Disiplini
              </p>
              <h3 className="mt-3 text-[22px] font-semibold leading-tight text-white">
                Projeden sahaya kontrollü uygulama
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/62">
                Planlama, keşif, uygulama ve devreye alma süreçlerini tek yapı
                altında yönetiyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

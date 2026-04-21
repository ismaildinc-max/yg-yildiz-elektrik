import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function YGFooter() {
  return (
    <footer className="bg-[#2f3136] text-white">
      <div className="mx-auto max-w-[1180px] px-4 py-12 md:px-8 md:py-16 lg:px-10 xl:px-12 2xl:max-w-[1400px] 2xl:px-6 2xl:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-[1.08fr_0.62fr_0.78fr] md:gap-8 lg:gap-10 2xl:grid-cols-[1.2fr_0.8fr_0.9fr] 2xl:gap-14">
          <div className="col-span-2 md:col-span-1">
            <img
              src="/images/YG-Elektrik-Logo-02.svg"
              alt="YG Yıldız Enerji"
              className="h-auto w-[170px] object-contain md:w-[190px] 2xl:w-[220px]"
            />

            <p className="mt-5 max-w-[420px] text-[14px] leading-7 text-white/70 md:text-[14px] md:leading-6 2xl:mt-6 2xl:text-[15px] 2xl:leading-7">
              Elektrik taahhüt, güneş enerjisi sistemleri, araç şarj altyapıları
              ve mühendislik uygulamalarında güvenilir, sürdürülebilir ve güçlü
              çözümler sunuyoruz.
            </p>

            <div className="mt-7 space-y-3 2xl:mt-8 2xl:space-y-4">
              <div className="flex items-center gap-3 2xl:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4bf2a] text-[#2f3136] 2xl:h-11 2xl:w-11">
                  <Phone className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="text-[14px] text-white/85 2xl:text-[15px]">
                  +90 533 512 32 32
                </span>
              </div>

              <div className="flex items-center gap-3 2xl:gap-4">
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4bf2a] text-[#2f3136] 2xl:h-11 2xl:w-11">
    <Mail className="h-5 w-5" strokeWidth={2} />
  </div>
  <span className="break-all text-[14px] text-white/85 2xl:text-[15px]">
    info@ygyildizelektrik.com
  </span>
</div>

              <div className="flex items-center gap-3 2xl:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4bf2a] text-[#2f3136] 2xl:h-11 2xl:w-11">
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                </div>
                <span className="text-[14px] text-white/85 2xl:text-[15px]">
                  Serik / Antalya
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[19px] font-semibold text-white md:text-[20px] 2xl:text-[24px]">Linkler</h3>
            <div className="mt-3 h-[3px] w-10 rounded-full bg-[#f4bf2a]" />

            <ul className="mt-6 space-y-3 text-[14px] text-white/80 md:text-[15px] 2xl:mt-8 2xl:space-y-4 2xl:text-[16px]">
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Ürünlerimiz
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[19px] font-semibold text-white md:text-[20px] 2xl:text-[24px]">Hizmetler</h3>
            <div className="mt-3 h-[3px] w-10 rounded-full bg-[#f4bf2a]" />

            <ul className="mt-6 space-y-3 text-[14px] text-white/80 md:text-[15px] 2xl:mt-8 2xl:space-y-4 2xl:text-[16px]">
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Elektrik Taahhüt
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Güneş Enerjisi
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Araç Şarj İstasyonu
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  İnşaat Taahhüt
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  AG - OG Uygulamaları
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#f4bf2a]">
                  Zayıf Akım Sistemleri
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
  <div className="mx-auto grid max-w-[1180px] items-center gap-5 px-4 py-5 md:grid-cols-3 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[1400px] 2xl:px-6 2xl:py-6">
    <div className="text-center md:text-left">
      <p className="text-[12px] leading-5 text-white/55 md:text-[13px] 2xl:text-[14px]">
        © 2026 YG Yıldız Elektrik. Tüm hakları saklıdır.
      </p>
    </div>

    <div className="text-center">
      <a
        href="https://www.isfikir.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-[11px] font-light leading-5 tracking-[0.06em] text-[#d6d6d6] transition duration-300 hover:text-white hover:[text-shadow:0_0_8px_rgba(255,255,255,0.45)] md:text-[12px] 2xl:text-[13px] 2xl:tracking-[0.08em]"
      >
        Site Tasarımı ve Yazılımı — İş Fikir Reklam Ajansı
      </a>

      <div className="mx-auto mt-3 h-px w-[180px] bg-gradient-to-r from-transparent via-[#c0c0c0]/60 to-transparent 2xl:w-[220px]" />
    </div>

    <div className="text-center md:text-right">
      <a
        href="#top"
        className="inline-flex items-center gap-2 text-[12px] text-white/60 transition hover:text-[#f4bf2a] md:text-[13px] 2xl:text-[14px]"
      >
        <span>Yukarı Dön</span>
        <span>↑</span>
      </a>
    </div>
  </div>
</div>

      <div className="h-[6px] w-full bg-[#f4bf2a]" />
    </footer>
  );
}

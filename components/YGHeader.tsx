'use client';

import Link from "next/link";
import { useState } from "react";

const servicesMenu = [
  {
    label: "Zayıf Akım Sistemleri",
    href: "/hizmetlerimiz/zayif-akim-sistemleri",
  },
  {
    label: "Güneş Enerjisi Sistemleri",
    href: "/hizmetlerimiz/gunes-enerjisi-sistemleri",
  },
  {
    label: "Elektrikli Araç Şarj İstasyonları",
    href: "/hizmetlerimiz/elektrikli-arac-sarj-istasyonlari",
  },
  {
    label: "Alçak Orta Gerilim Uygulamaları",
    href: "/hizmetlerimiz/alcak-orta-gerilim-uygulamalari",
  },
  {
    label: "İnşaat Elektrik Taahhüt",
    href: "/hizmetlerimiz/insaat-elektrik-taahhut",
  },
  {
    label: "Tarım Sulama Enerji Sistemleri",
    href: "/hizmetlerimiz/tarim-sulama-enerji-sistemleri",
  },
];

export default function YGHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-4 py-6 md:px-8 lg:px-10 2xl:max-w-[1500px] 2xl:px-10 2xl:py-7">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/images/YG-Elektrik-Logo-02.svg"
            alt="YG Yıldız Enerji"
            className="h-16 w-auto object-contain md:h-20 2xl:h-24"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-[15px] font-medium text-white/85 md:flex xl:gap-7 2xl:gap-10">
          <Link href="/" className="transition hover:text-white">
            Anasayfa
          </Link>

          <Link href="/hakkimizda" className="transition hover:text-white">
            Hakkımızda
          </Link>

          <div className="group relative">
            <Link
              href="/hizmetlerimiz"
              className="inline-flex items-center transition hover:text-white"
            >
              Hizmetlerimiz
            </Link>

            <div className="pointer-events-none absolute left-1/2 top-full z-30 w-[320px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#2f323c]/95 p-3 shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-md">
                <div className="flex flex-col">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-[14px] px-4 py-3 text-[14px] text-white/80 transition hover:bg-white/10 hover:text-[#f4bf2a]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="transition hover:text-white">
            Referanslar
          </a>

          <a href="#" className="transition hover:text-white">
            Blog
          </a>

           <Link href="/iletisim" className="transition hover:text-white">
            İletişim
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-2xl bg-[#f4a300] px-5 py-3.5 text-[15px] font-semibold text-[#2f2f2f] transition hover:opacity-90 md:inline-flex 2xl:px-7 2xl:py-4"
          >
            Randevu Oluştur
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur md:hidden"
            aria-label="Menüyü aç"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-[2px] w-full rounded-full bg-white" />
              <span className="h-[2px] w-full rounded-full bg-white" />
              <span className="h-[2px] w-full rounded-full bg-white" />
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-4 mt-2 rounded-[24px] border border-white/10 bg-[#2f323c]/95 p-4 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
          <div className="flex flex-col">
            <Link
              href="/"
              className="rounded-[14px] px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#f4bf2a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Anasayfa
            </Link>

            <Link
              href="/hakkimizda"
              className="rounded-[14px] px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#f4bf2a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>

            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="flex items-center justify-between rounded-[14px] px-4 py-3 text-left text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              <span>Hizmetlerimiz</span>
              <span className="text-sm">{mobileServicesOpen ? "−" : "+"}</span>
            </button>

            {mobileServicesOpen && (
              <div className="ml-2 mt-1 flex flex-col border-l border-white/10 pl-3">
                <Link
                  href="/hizmetlerimiz"
                  className="rounded-[12px] px-3 py-2 text-[14px] text-white/75 transition hover:bg-white/10 hover:text-[#f4bf2a]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Tüm Hizmetler
                </Link>

                {servicesMenu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-[12px] px-3 py-2 text-[14px] text-white/75 transition hover:bg-white/10 hover:text-[#f4bf2a]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <a
              href="#"
              className="rounded-[14px] px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#f4bf2a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Referanslar
            </a>

            <a
              href="#"
              className="rounded-[14px] px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#f4bf2a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>

            <a
              href="#"
              className="rounded-[14px] px-4 py-3 text-white transition hover:bg-white/10 hover:text-[#f4bf2a]"
              onClick={() => setMobileMenuOpen(false)}
            >
              İletişim
            </a>

            <a
              href="#"
              className="mt-3 inline-flex justify-center rounded-2xl bg-[#f4a300] px-5 py-3.5 text-[15px] font-semibold text-[#2f2f2f] transition hover:opacity-90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Randevu Oluştur
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
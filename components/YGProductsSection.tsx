"use client";

import { useState } from "react";

const products = [
  {
    title: "Aydınlatma Ürünleri",
    image: "/images/ozcan-aydinlatma-2817-11a-11-li-dekoratif-led-avize.jpeg",
    link: "#",
  },
  {
    title: "Kablolar",
    image: "/images/oznur-kablo-nyaf-cok-telli-kablo-kozaydinlatma_800x472.jpeg",
    link: "#",
  },
  {
    title: "Şalt ve Tesisat Malzemeleri",
    image: "/images/salt-urunleri.jpg",
    link: "#",
  },
  {
    title: "Zayıf Akım Ürünleri",
    image: "/images/Zayif-Akim.jpg",
    link: "#",
  },
  {
    title: "Anahtar",
    image: "/images/product-anahtar.jpg",
    link: "#",
  },
  {
    title: "Sigorta Kutusu",
    image: "/images/product-sigorta.jpg",
    link: "#",
  },
];

export default function YGProductsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const mobileVisibleCount = 1;
  const desktopVisibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = (visibleCount: number) => {
    setStartIndex((prev) =>
      prev + visibleCount >= products.length ? prev : prev + 1
    );
  };

  const mobileProducts = products.slice(
    startIndex,
    startIndex + mobileVisibleCount
  );
  const desktopProducts = products.slice(
    startIndex,
    startIndex + desktopVisibleCount
  );

  const renderProductCard = (item: (typeof products)[number]) => (
    <a
      key={item.title}
      href={item.link}
      className="group relative block translate-y-10 overflow-hidden rounded-[18px] bg-[#f1d373] shadow-[0_0_18px_rgba(244,191,42,0.45)]"
    >
      <div className="relative h-[320px] w-full overflow-hidden xl:h-[300px] 2xl:h-[320px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h3 className="translate-y-4 text-center text-[22px] font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 2xl:text-[24px]">
            {item.title}
          </h3>
        </div>
      </div>
    </a>
  );

  return (
    <section className="bg-white">
      <div className="bg-[#343434] px-4 pb-24 pt-20 md:px-8 md:pb-28 md:pt-24 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-[38px] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[48px] 2xl:text-[52px]">
                Ürün Gruplarımız
              </h2>
            

              <div className="mt-4 h-[4px] w-10 rounded-full bg-[#f4bf2a]" />
            </div>

            <div className="flex items-center gap-3 pt-2 md:hidden">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4bf2a] text-[24px] text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#343434] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={startIndex === 0}
              >
                ←
              </button>

              <button
                onClick={() => handleNext(mobileVisibleCount)}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4bf2a] text-[24px] text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#343434] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={startIndex + mobileVisibleCount >= products.length}
              >
                →
              </button>
            </div>

            <div className="hidden items-center gap-3 pt-2 md:flex">
              <button
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4bf2a] text-[24px] text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#343434] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={startIndex === 0}
              >
                ←
              </button>

              <button
                onClick={() => handleNext(desktopVisibleCount)}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#f4bf2a] text-[24px] text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#343434] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={startIndex + desktopVisibleCount >= products.length}
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:hidden">
            {mobileProducts.map(renderProductCard)}
          </div>

          <div className="mt-12 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4 xl:gap-4 2xl:gap-5">
            {desktopProducts.map(renderProductCard)}
          </div>
        </div>
      </div>
    </section>
  );
}

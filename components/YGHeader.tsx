import Link from "next/link";

export default function YGHeader() {
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
          <Link href="/">Anasayfa</Link>
         <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
          <a href="#" className="transition hover:text-white">Referanslar</a>
          <a href="#" className="transition hover:text-white">Blog</a>
          <a href="#" className="transition hover:text-white">İletişim</a>
        </nav>

        <a
          href="#"
          className="rounded-2xl bg-[#f4a300] px-5 py-3.5 text-[15px] font-semibold text-[#2f2f2f] transition hover:opacity-90 2xl:px-7 2xl:py-4"
        >
          Randevu Oluştur
        </a>
      </div>
    </header>
  );
}

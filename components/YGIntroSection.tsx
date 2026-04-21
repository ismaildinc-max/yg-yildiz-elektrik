export default function YGIntroSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr] 2xl:max-w-[1400px] 2xl:gap-14">
        <div className="flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-[34px] shadow-[0_18px_50px_rgba(0,0,0,0.08)]">
            <img
              src="/images/muhendis.jpeg"
              alt="Sahada çalışan mühendis"
              className="h-[360px] w-[400px] object-cover md:h-[400px] md:w-[460px] 2xl:h-[420px] 2xl:w-[500px]"
            />
          </div>
        </div>

        <div className="max-w-[680px]">
          <h2 className="text-[34px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#2f323c] md:text-[44px] 2xl:text-[48px]">
            Her Projede Aynı İlke:
            <br />
            Doğru Keşif, Doğru Uygulama
          </h2>

          <div className="mt-5 h-[3px] w-16 rounded-full bg-[#f4bf2a]" />

          <p className="mt-6 text-[16px] leading-8 text-[#5a5d66] md:text-[17px]">
            Elektrik taahhüt projelerinde kalite; doğru keşif, doğru malzeme
            seçimi ve doğru uygulama ile başlar. YG Yıldız Elektrik, farklı
            ölçeklerdeki projelerde güvenli ve verimli sonuçları anahtar teslim
            çözümlerle bir araya getirir.
          </p>

         <div className="mt-8 flex items-center gap-4">
  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#f4bf2a]/35 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
    <img
      src="images/YG-Elektrik-Logo-01.svg"
      alt="Mehmet Yıldız"
      className="h-12 w-12 rounded-full object-cover"
    />
  </div>

  <div>
    <p className="text-[18px] font-semibold text-[#2f323c]">
      Mehmet Yıldız
    </p>
    <p className="mt-1 text-sm italic text-[#7a7d86]">
      Firma Sahibi — YG Yıldız Elektrik
    </p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

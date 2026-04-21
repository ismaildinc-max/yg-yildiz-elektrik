export default function YGServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#2f323c] px-4 py-20 text-white md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-10" />

      <div className="relative z-10 mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f4bf2a]">
              Hizmetlerimiz
            </p>
            <h2 className="mt-3 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-white md:text-[44px] 2xl:text-[48px]">
              Uzmanlık Alanlarımız
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f4bf2a]/30 text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#2f323c]">
              ←
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f4bf2a]/30 text-[#f4bf2a] transition hover:bg-[#f4bf2a] hover:text-[#2f323c]">
              →
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-4 2xl:gap-6">
          <div className="group rounded-[26px] border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f4bf2a]/40 hover:bg-white/[0.08] xl:p-5 2xl:p-7">
           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4bf2a] text-xl font-bold text-[#2f323c] xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">
              <img
  src="/images/lighting-2.png"
  alt="Elektrik Taahhüt"
  className="h-9 w-9 object-contain brightness-0 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
/>
            </div>
            <h3 className="pt-6 text-center text-[22px] font-semibold leading-tight text-white xl:text-[20px] 2xl:text-[22px]">
              Elektrik Taahhüt
            </h3>
            <p className="mt-4 text-center text-[15px] leading-7 text-white/65 xl:text-[14px] xl:leading-6 2xl:text-[15px] 2xl:leading-7">
              Alçak ve orta gerilim uygulamalarında projelendirme, altyapı ve
              saha uygulama süreçlerini kontrollü biçimde yönetiyoruz.
            </p>
          </div>

          <div className="group rounded-[26px] border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f4bf2a]/40 hover:bg-white/[0.08] xl:p-5 2xl:p-7">
           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4bf2a] text-xl font-bold text-[#2f323c] xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">
                       <img
  src="/images/solar-panel.png"
  alt="Güneş Enerjisi"
  className="h-9 w-9 object-contain brightness-0 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
/>
            </div>
            <h3 className="pt-6 text-center text-[22px] font-semibold leading-tight text-white xl:text-[20px] 2xl:text-[22px]">
              Güneş Enerjisi
            </h3>
            <p className="mt-4 text-center text-[15px] leading-7 text-white/65 xl:text-[14px] xl:leading-6 2xl:text-[15px] 2xl:leading-7">
              GES projelerinde keşif, planlama ve uygulama süreçlerini enerji
              verimliliği odaklı olarak hayata geçiriyoruz.
            </p>
          </div>

          <div className="group rounded-[26px] border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f4bf2a]/40 hover:bg-white/[0.08] xl:p-5 2xl:p-7">
           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4bf2a] text-xl font-bold text-[#2f323c] xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">
              <img
  src="/images/electric-charge.png"
  alt="Araç Şarj İstasyonu"
  className="h-9 w-9 object-contain brightness-0 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
/>
            </div>
            <h3 className="pt-6 text-center text-[22px] font-semibold leading-tight text-white xl:text-[20px] 2xl:text-[22px]">
              Araç Şarj İstasyonu
            </h3>
            <p className="mt-4 text-center text-[15px] leading-7 text-white/65 xl:text-[14px] xl:leading-6 2xl:text-[15px] 2xl:leading-7">
              Elektrikli araç kullanımına uygun güvenli ve sürdürülebilir şarj
              altyapıları için anahtar teslim çözümler sunuyoruz.
            </p>
          </div>

          <div className="group rounded-[26px] border border-white/10 bg-white/5 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#f4bf2a]/40 hover:bg-white/[0.08] xl:p-5 2xl:p-7">
           <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4bf2a] text-xl font-bold text-[#2f323c] xl:h-12 xl:w-12 2xl:h-14 2xl:w-14">
                    <img
  src="/images/contract.png"
  alt="İnşaat"
  className="h-9 w-9 object-contain brightness-0 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
/>
            </div>
            <h3 className="pt-6 text-center text-[22px] font-semibold leading-tight text-white xl:text-[20px] 2xl:text-[22px]">
              İnşaat Taahhüt
            </h3>
            <p className="mt-4 text-center text-[15px] leading-7 text-white/65 xl:text-[14px] xl:leading-6 2xl:text-[15px] 2xl:leading-7">
              Projelendirme ve uygulama arasında koordinasyonu sağlayarak sahada
              güvenli, planlı ve zamanında teslim süreçleri yürütüyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function YGContactBand() {
  return (
    <section className="bg-white px-4 py-8 md:px-8 md:py-10 lg:px-10 xl:px-12 2xl:px-6">
      <div className="relative mx-auto overflow-hidden rounded-[22px] bg-[#f4bf2a] md:max-w-[1180px] md:overflow-visible md:rounded-none md:rounded-tr-[90px] 2xl:max-w-[1400px] 2xl:rounded-tr-[105px]">
        <div className="absolute bottom-0 right-full top-0 hidden w-screen bg-[#f4bf2a] md:block" />
        <div className="relative grid items-center gap-6 px-5 py-7 md:grid-cols-[0.95fr_1.05fr] md:px-8 md:py-9 2xl:px-10">
          <div className="relative z-10">
            <h2 className="max-w-[520px] text-[26px] font-semibold leading-[1.12] tracking-[-0.03em] text-white md:text-[38px] 2xl:text-[42px]">
              Projenizi Birlikte Planlayalım
              <br />
              Bize Ulaşın
            </h2>

            <div className="mt-4 h-[3px] w-12 rounded-full bg-white/85" />

            <div className="mt-6 grid gap-2.5 md:flex md:flex-wrap">
              <a
                href="tel:+905321231212"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#2f323c] px-3.5 py-2.5 text-[13px] font-medium text-white shadow-[0_6px_16px_rgba(47,50,60,0.18)] md:min-h-0 md:px-3 md:py-2 md:text-[12px]"
              >
                <span aria-hidden="true">📞</span>
                <span className="text-white">+90 532 123 12 12</span>
              </a>

              <a
                href="mailto:info@ygyildiz.com"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#2f323c] px-3.5 py-2.5 text-[13px] font-medium text-white shadow-[0_6px_16px_rgba(47,50,60,0.18)] md:min-h-0 md:px-3 md:py-2 md:text-[12px]"
              >
                <span aria-hidden="true">✉️</span>
                <span className="text-white">info@ygyildiz.com</span>
              </a>

              <div className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#2f323c] px-3.5 py-2.5 text-[13px] font-medium text-white shadow-[0_6px_16px_rgba(47,50,60,0.18)] md:min-h-0 md:px-3 md:py-2 md:text-[12px]">
                <span aria-hidden="true">📍</span>
                <span>Serik / Antalya</span>
              </div>
            </div>
          </div>

          <div className="relative hidden min-h-[150px] md:block">
            <img
              src="/images/teller.png"
              alt=""
              className="absolute bottom-[-85px] right-[10px] h-[340px] w-auto object-contain opacity-[0.80] mix-blend-multiply 2xl:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

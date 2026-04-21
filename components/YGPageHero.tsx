import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type YGPageHeroProps = {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  description?: string;
};

export default function YGPageHero({
  title,
  breadcrumbItems,
  description,
}: YGPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#2f323c] px-4 py-24 text-white md:px-8 md:py-32">
      <img
        src="/images/binacizgi.png"
        alt=""
        className="pointer-events-none absolute bottom-0 left-40 w-[320px] opacity-20 max-md:!hidden md:block md:w-[400px]"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(74%) sepia(83%) saturate(764%) hue-rotate(359deg) brightness(101%) contrast(92%)",
        }}
      />

      <img
        src="/images/teller2.png"
        alt=""
        className="pointer-events-none absolute bottom-0 right-40 w-[320px] opacity-20 max-md:!hidden md:block md:w-[450px]"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(74%) sepia(83%) saturate(764%) hue-rotate(359deg) brightness(101%) contrast(92%)",
        }}
      />

      <div className="mx-auto max-w-[1180px]">
        <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
          <h1 className="text-[38px] font-semibold tracking-[-0.03em] md:text-[52px]">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-[720px] text-base leading-7 text-white/75 md:text-lg">
              {description}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-medium">
            {breadcrumbItems.map((item, index) => (
              <div key={item.label + index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#f4bf2a] transition hover:opacity-80"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#f4bf2a]">{item.label}</span>
                )}

                {index < breadcrumbItems.length - 1 && (
                  <span className="text-white/40">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGPageHero from "@/components/YGPageHero";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "+90 533 512 32 32",
    href: "tel:+905335123232",
  },
  {
    icon: Mail,
    label: "E-Posta",
    value: "info@ygyildizelektrik.com",
    href: "mailto:info@ygyildizelektrik.com",
  },
  {
    icon: MapPin,
    label: "Adres",
    value: "Orta Mahalle, 1005 Sokak, No:6 D:2 - Serik / Antalya",
    href: "https://maps.app.goo.gl/idjA9coLDVUgoX1SA",
  },
  {
    icon: Clock,
    label: "Çalışma Saatleri",
    value: "Pzt - Cmt / 08:30 - 18:30",
    href: "#",
  },
];

export default function IletisimPage() {
 const [isKvkkOpen, setIsKvkkOpen] = useState(false);
    return (
    <main className="bg-white">
      <YGHeader />

      <YGPageHero
        title="İletişim"
        
        breadcrumbItems={[
          { label: "Anasayfa", href: "/" },
          { label: "İletişim" },
        ]}
      />

      <section className="bg-[#f8f8f8] px-4 py-16 md:px-8 md:py-24 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.92fr_1.08fr] 2xl:max-w-[1400px]">
          <div className="space-y-6">
            <div className="rounded-[28px] bg-[#2f323c] p-7 text-white shadow-[0_20px_60px_rgba(20,24,35,0.14)] md:p-9">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#f4bf2a]">
                Bize Ulaşın
              </p>

              <h2 className="pt-4 text-[32px] font-semibold leading-tight tracking-[-0.03em] md:text-[40px]">
                Doğru proje için
                <br />
                doğru iletişim
              </h2>

              <p className="pt-4 text-[15px] leading-7 text-white/72">
                Elektrik altyapısı, zayıf akım çözümleri, güneş enerjisi sistemleri
                ve proje bazlı uygulamalar için bizimle iletişime geçebilir,
                talebinizi doğrudan ekibimize iletebilirsiniz.
              </p>

              <div className="mt-8 h-[3px] w-14 rounded-full bg-[#f4bf2a]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group rounded-[24px] border border-[#e8e8e8] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#f4bf2a]/50 hover:shadow-[0_18px_35px_rgba(0,0,0,0.07)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4bf2a]/12 text-[#f4bf2a] transition duration-300 group-hover:bg-[#f4bf2a] group-hover:text-[#2f323c]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>

                  <p className="pt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2f323c]/55">
                    {label}
                  </p>

                  <p className="pt-2 text-[17px] font-semibold leading-[1.5] text-[#2f323c]">
                    {value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-[#ececec] bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.045)] md:p-8 lg:p-10">
            <div className="max-w-[620px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#f4bf2a]">
                İletişim Formu
              </p>

              <h2 className="pt-4 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[#2f323c] md:text-[38px]">
                Projenizi birlikte değerlendirelim
              </h2>

              <p className="pt-3 text-[15px] leading-7 text-[#2f323c]/68">
                Talebinizi bize iletin. En kısa sürede dönüş sağlasın.
              </p>
            </div>

            <form className="pt-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#2f323c]">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınızı ve soyadınızı girin"
                    className="h-14 w-full rounded-[16px] border border-[#e6e6e6] bg-[#fafafa] px-4 text-[15px] text-[#2f323c] outline-none transition focus:border-[#f4bf2a] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#2f323c]">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="Telefon numaranızı girin"
                    className="h-14 w-full rounded-[16px] border border-[#e6e6e6] bg-[#fafafa] px-4 text-[15px] text-[#2f323c] outline-none transition focus:border-[#f4bf2a] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#2f323c]">
                    E-Posta
                  </label>
                  <input
                    type="email"
                    placeholder="E-posta adresinizi girin"
                    className="h-14 w-full rounded-[16px] border border-[#e6e6e6] bg-[#fafafa] px-4 text-[15px] text-[#2f323c] outline-none transition focus:border-[#f4bf2a] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[13px] font-semibold text-[#2f323c]">
                    Konu
                  </label>
                  <input
                    type="text"
                    placeholder="Talep konusunu yazın"
                    className="h-14 w-full rounded-[16px] border border-[#e6e6e6] bg-[#fafafa] px-4 text-[15px] text-[#2f323c] outline-none transition focus:border-[#f4bf2a] focus:bg-white"
                  />
                </div>
              </div>

              <div className="pt-5">
                <label className="mb-2 block text-[13px] font-semibold text-[#2f323c]">
                  Mesajınız
                </label>
                <textarea
                  rows={4}
                  placeholder="Projeniz veya talebiniz hakkında kısa bilgi paylaşın"
                  className="w-full rounded-[18px] border border-[#e6e6e6] bg-[#fafafa] px-4 py-4 text-[15px] text-[#2f323c] outline-none transition focus:border-[#f4bf2a] focus:bg-white"
                />
              </div>

<div className="pt-6">
  <div className="flex flex-col gap-4 rounded-[18px] border border-[#ececec] bg-[#fafafa] p-4 md:flex-row md:items-center md:justify-between">
    <label className="flex max-w-[620px] items-start gap-3 text-[13px] leading-6 text-[#2f323c]/72">
      <input
        type="checkbox"
        required
        className="mt-1 h-4 w-4 shrink-0 rounded border border-[#d8d8d8] accent-[#f4bf2a]"
      />
      <span>
        <button
          type="button"
          onClick={() => setIsKvkkOpen(true)}
          className="font-medium text-[#2f323c] underline underline-offset-4 transition hover:text-[#f4bf2a]"
        >
          KVKK Aydınlatma Metni
        </button>{" "}
        kapsamında kişisel verilerimin işlenmesini kabul ediyorum.
      </span>
    </label>

    <button
      type="submit"
      className="inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-[#f4bf2a] px-8 text-[15px] font-semibold text-[#2f323c] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(244,191,42,0.28)]"
    >
      Mesajı Gönder
    </button>
  </div>
</div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#2f323c] px-4 py-14 md:px-8 md:py-16 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto grid max-w-[1180px] gap-6 md:grid-cols-3 2xl:max-w-[1400px]">
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f4bf2a]">
              Hızlı Geri Dönüş
            </p>
            <p className="pt-3 text-[16px] leading-7 text-white/75">
              İletilen talepler, en kısa sürede ilgili ekip tarafından değerlendirilir.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f4bf2a]">
              Proje Odaklı Yaklaşım
            </p>
            <p className="pt-3 text-[16px] leading-7 text-white/75">
              Her talep, uygulama sahası ve ihtiyaç önceliğine göre ele alınır.
            </p>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 text-white">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f4bf2a]">
              Kurumsal İletişim
            </p>
            <p className="pt-3 text-[16px] leading-7 text-white/75">
              Teklif, keşif ve iş birliği süreçleri için doğrudan kurumsal iletişim sağlayabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <section id="map" className="bg-white px-4 pb-16 md:px-8 md:pb-24 lg:px-10 xl:px-12 2xl:px-6">
        <div className="mx-auto max-w-[1180px] 2xl:max-w-[1400px]">
          <div className="pt-6 max-w-[720px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#f4bf2a]">
              Konum
            </p>
            <h2 className="pt-4 text-[30px] font-semibold leading-tight tracking-[-0.03em] text-[#2f323c] md:text-[38px]">
              Ofis konumumuz
            </h2>
            <p className="pt-1 text-[15px] leading-8 text-[#2f323c]/68">
              Konum üzerinden hızlıca rota almak için harita alanını kullanabilirsiniz.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#ececec] bg-[#f8f8f8] shadow-[0_14px_40px_rgba(0,0,0,0.045)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.357689945849!2d31.076410276239397!3d36.90571136174416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c37d2b560c6913%3A0x79a74c39df0f801e!2sOrta%2C%20Belek%20Cd.%20NO%3A44%2FA%2C%2007500%20Serik%2FAntalya!5e0!3m2!1str!2str!4v1776901427578!5m2!1str!2str"
              width="100%"
              height="520"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[420px] w-full"
            />
          </div>
        </div>
      </section>

     {isKvkkOpen && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#111827]/70 px-4">
    <div className="relative max-h-[85vh] w-full max-w-[860px] overflow-hidden rounded-[28px] bg-white shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
      <div className="flex items-center justify-between border-b border-[#ececec] px-6 py-5 md:px-8">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#f4bf2a]">
            KVKK
          </p>
          <h3 className="pt-2 text-[24px] font-semibold tracking-[-0.02em] text-[#2f323c] md:text-[28px]">
            Aydınlatma Metni
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setIsKvkkOpen(false)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7e7e7] text-[20px] text-[#2f323c] transition hover:border-[#f4bf2a] hover:text-[#f4bf2a]"
          aria-label="Kapat"
        >
          ×
        </button>
      </div>

      <div className="max-h-[calc(85vh-96px)] overflow-y-auto px-6 py-6 md:px-8 md:py-8">
        <div className="space-y-8 text-[15px] leading-7 text-[#2f323c]/78">
          <section>
            <p>
              <strong className="text-[#2f323c]">
                YG YILDIZ ELEKTRİK MÜHENDİSLİK TİCARET VE SANAYİ LİMİTED ŞİRKETİ
              </strong>{" "}
              (bundan sonra <strong className="text-[#2f323c]">“Şirket”</strong> olarak
              anılacaktır) olarak, 6698 Sayılı Kişisel Verilerin Korunması Kanunu
              (“KVKK”) uyarınca kişisel verilerinizin güvenliğine ve gizliliğine önem
              veriyoruz. Bu metin, web sitemizi ziyaret eden kullanıcılarımızı
              bilgilendirmek amacıyla hazırlanmıştır.
            </p>
          </section>

          <section>
            <h4 className="text-[18px] font-semibold text-[#2f323c]">
              1. Veri Sorumlusu
            </h4>

            <div className="pt-3 space-y-2">
              <p>
                <strong className="text-[#2f323c]">Unvan:</strong> YG YILDIZ ELEKTRİK
                MÜHENDİSLİK TİCARET VE SANAYİ LİMİTED ŞİRKETİ
              </p>
              <p>
                <strong className="text-[#2f323c]">Adres:</strong> Orta Mah. Belek Cad.
                No: 44 A Serik / ANTALYA
              </p>
              <p>
                <strong className="text-[#2f323c]">Vergi Dairesi / No:</strong> SERİK /
                9530860467
              </p>
            </div>
          </section>

          <section>
            <h4 className="text-[18px] font-semibold text-[#2f323c]">
              2. İşlenen Kişisel Veriler ve İşleme Amaçları
            </h4>

            <p className="pt-3">
              Web sitemiz üzerinden bizimle iletişime geçtiğinizde (iletişim formu,
              e-posta vb.) paylaştığınız ad-soyad, telefon, e-posta ve mesaj içeriği
              gibi verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>

            <ul className="pt-3 list-disc space-y-2 pl-5">
              <li>Sizlere sunduğumuz mühendislik ve teknik hizmetlerin yürütülmesi</li>
              <li>Taleplerinizin ve sorularınızın yanıtlanması</li>
              <li>Yasal yükümlülüklerimizin yerine getirilmesi</li>
            </ul>
          </section>

          <section>
            <h4 className="text-[18px] font-semibold text-[#2f323c]">
              3. Kişisel Verilerin Aktarılması
            </h4>

            <p className="pt-3">
              Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda ve yasal
              sınırlar çerçevesinde; iş ortaklarımıza, yetkili kamu kurum ve
              kuruluşlarına veya hukuki uyuşmazlıklarda ilgili yargı mercilerine
              aktarılabilir.
            </p>

            <p className="pt-3">
              Verileriniz, açık rızanız olmaksızın hiçbir şekilde üçüncü taraflara
              pazarlama amacıyla satılmaz.
            </p>
          </section>

          <section>
            <h4 className="text-[18px] font-semibold text-[#2f323c]">
              4. Veri Toplama Yöntemi ve Hukuki Sebep
            </h4>

            <p className="pt-3">
              Verileriniz; web sitemizdeki formlar, e-postalar veya telefon görüşmeleri
              aracılığıyla, Kanun’un 5. maddesinde belirtilen{" "}
              <strong className="text-[#2f323c]">
                “sözleşmenin kurulması veya ifası”
              </strong>{" "}
              ve{" "}
              <strong className="text-[#2f323c]">
                “veri sorumlusunun hukuki yükümlülüğü”
              </strong>{" "}
              sebeplerine dayanarak toplanmaktadır.
            </p>
          </section>

          <section>
            <h4 className="text-[18px] font-semibold text-[#2f323c]">
              5. Haklarınız
            </h4>

            <p className="pt-3">
              KVKK’nın 11. maddesi uyarınca dilediğiniz zaman Şirketimize başvurarak
              aşağıdaki haklarınızı kullanabilirsiniz:
            </p>

            <ul className="pt-3 list-disc space-y-2 pl-5">
              <li>Verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>Hatalı verilerin düzeltilmesini isteme</li>
              <li>Verilerin silinmesini veya yok edilmesini talep etme</li>
            </ul>
          </section>

          <section>
            <h4 className="text-[18px] font-semibold text-[#2f323c]">
              6. İletişim
            </h4>

            <p className="pt-3">
              KVKK kapsamındaki taleplerinizi{" "}
              <strong className="text-[#2f323c]">
                Orta Mah. Belek Cad. No: 44 A Serik / ANTALYA
              </strong>{" "}
              adresine yazılı olarak veya kurumsal e-posta adresimiz üzerinden bize
              iletebilirsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
)}

<YGFooter />
    </main>
  );
}
import Link from "next/link";
import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGServicesGridSection from "@/components/YGServicesGridSection";
import YGPageHero from "@/components/YGPageHero";

export default function HizmetlerimizPage() {
  return (
    <main className="bg-white">
      <YGHeader />

       <YGPageHero
              title="Hizmetlerimiz"
              breadcrumbItems={[
                { label: "Anasayfa", href: "/" },
                { label: "Hizmetlerimiz" },
              ]}
            />

      <YGServicesGridSection />

      <YGFooter />
    </main>
  );
}
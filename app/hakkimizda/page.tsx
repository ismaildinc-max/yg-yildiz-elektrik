import YGHeader from "@/components/YGHeader";
import YGFooter from "@/components/YGFooter";
import YGIntroSection from "@/components/YGIntroSection";
import YGStatsBand from "@/components/YGStatsBand";
import YGPageHero from "@/components/YGPageHero";

import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <main className="bg-white">
      <YGHeader />

   <YGPageHero
        title="Hakkımızda"
        breadcrumbItems={[
          { label: "Anasayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
      />

<YGIntroSection />
<YGStatsBand />
      <YGFooter />
    </main>
  );
}

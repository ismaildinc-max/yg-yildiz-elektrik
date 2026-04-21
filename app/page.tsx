import YGHeader from "../components/YGHeader";
import YGHeroSection from "../components/YGHeroSection";
import YGIntroSection from "../components/YGIntroSection";
import YGServicesSection from "../components/YGServicesSection";
import YGFAQSection from "../components/YGFAQSection";
import YGContactBand from "../components/YGContactBand";
import YGStatsBand from "../components/YGStatsBand";
import YGProductsSection from "../components/YGProductsSection";
import YGBlogSection from "../components/YGBlogSection";
import YGFooter from "../components/YGFooter";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <div className="relative">
        <YGHeader />
        <YGHeroSection />
      </div>

      <YGIntroSection />
      <YGServicesSection />
      <YGFAQSection />
      <YGContactBand />
      <YGStatsBand />
      <YGProductsSection />
      <YGBlogSection />
      <YGFooter />
    </main>
  );
}
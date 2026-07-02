import TopbarHeader from "@/components/home/topbarHeader";
import HeroSection from "@/components/home/heroSection";
import FeatureCards from "@/components/home/featureCards";
import BenefitsList from "@/components/home/benefitsList";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <TopbarHeader />
      <HeroSection />
      <FeatureCards />
      <BenefitsList />
      <Footer />
    </>
  );
}

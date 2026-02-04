import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import CapabilitySection from "@/components/CapabilitySection";
import ReceiptsSection from "@/components/ReceiptsSection";
import UseCases from "@/components/UseCases";
import SecuritySection from "@/components/SecuritySection";
import ProductRoadmap from "@/components/ProductRoadmap";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function Divider() {
  return <div className="w-full h-px bg-[var(--l-border-subtle)]" />;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full max-w-[1440px] mx-auto">
      <Header />
      <Hero />
      <Divider />
      <Stats />
      <Divider />
      <HowItWorks />
      <Divider />
      <CapabilitySection />
      <Divider />
      <ReceiptsSection />
      <Divider />
      <UseCases />
      <Divider />
      <SecuritySection />
      <Divider />
      <ProductRoadmap />
      <Divider />
      <FinalCTA />
      <Divider />
      <Footer />
    </main>
  );
}

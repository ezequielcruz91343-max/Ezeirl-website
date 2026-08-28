import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IRLSection from "@/components/IRLSection";
import StreamSection from "@/components/StreamSection";
import GearSection from "@/components/GearSection";
import PerformanceLab from "@/components/PerformanceLab";
import AppSection from "@/components/AppSection";
import WatchSection from "@/components/WatchSection";
import PartnershipSection from "@/components/PartnershipSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <IRLSection />
        <StreamSection />
        <GearSection />
        <PerformanceLab />
        <AppSection />
        <WatchSection />
        <PartnershipSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}

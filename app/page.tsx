import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import MissionSection from "@/components/home/MissionSection";
import ImpactSection from "@/components/home/ImpactSection";
import ProjectCarousel from "@/components/home/ProjectCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-blue-500/30">
      <HeroSection />
      <IntroSection />
      <MissionSection />
      <ImpactSection />
      <ProjectCarousel />
    </main>
  );
}

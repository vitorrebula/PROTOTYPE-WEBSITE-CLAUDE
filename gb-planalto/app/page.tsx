import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SplineSection from "@/components/SplineSection";
import StorySection from "@/components/StorySection";
import MarqueeSection from "@/components/MarqueeSection";
import TestimonialsSection from "@/components/ui/testimonial-v2";
import ClassesSection from "@/components/ClassesSection";
import HowToStartSection from "@/components/HowToStartSection";
import InstructorsSection from "@/components/InstructorsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ScheduleSection from "@/components/ScheduleSection";
import ZoomParallaxSection from "@/components/ZoomParallaxSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Nav />
      <Hero />
      <MarqueeSection />
      <StorySection />
      <ClassesSection />
      <SplineSection />
      <TestimonialsSection />
      <HowToStartSection />
      <InstructorsSection />
      <ScheduleSection />
      <AchievementsSection />
      <ZoomParallaxSection />
      <FacilitiesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

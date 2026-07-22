import Navbar       from "@/app/components/Navbar";
import Hero         from "@/app/sections/Hero";
import Stats        from "@/app/sections/Stats";
import Partnerships from "@/app/sections/Partnerships";
import Features     from "@/app/sections/DomainExpertise";
import CATFramework from "@/app/sections/CATFramework";
import FAQSection   from "@/app/sections/FAQSection";
import Testimonials from "@/app/sections/Testimonials";
import Footer       from "@/app/sections/Footer";
import AccredianEdge from "./sections/AccredianEdge";
import CourseSegmentation from "./sections/CourseSegmentation";
import StrategicSkillEnhancement from "./sections/StrategicSkill";
import DeliverResults from "./sections/DeliverResults";
import CatFramework from "@/app/sections/CATFramework";
import CTABanner from "./sections/CTABanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Hero />
        <Stats />
        <Partnerships />
        <AccredianEdge/>
        <Features />
        <CourseSegmentation/>
        <StrategicSkillEnhancement/>
        <CATFramework />
        <DeliverResults/>
        <FAQSection />
        <Testimonials />
        <CTABanner/>
        <Footer />
      </main>
    </>
  );
}

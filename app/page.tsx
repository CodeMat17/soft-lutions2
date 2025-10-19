// app/page.tsx (updated with overflow fixes)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import DangersSection from "@/components/sections/DangersSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className='min-h-screen overflow-hidden'>
      <Header />
      <div id='home' className='overflow-hidden'>
        <HeroSection />
      </div>
      <div id='skills' className='overflow-hidden'>
        <SkillsSection />
      </div>
      <div id='solutions' className='overflow-hidden'>
        <SolutionsSection />
      </div>
      <div className='overflow-hidden'>
        <DangersSection />
      </div>
      <div id='process' className='overflow-hidden'>
        <ProcessSection />
      </div>

      <div id='testimonials' className='overflow-hidden'>
        <TestimonialsSection />
      </div>

      <div id='contact' className='overflow-hidden'>
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

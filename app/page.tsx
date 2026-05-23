import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WealthSection from "@/components/WealthSection";
import EducationSection from "@/components/EducationSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <WealthSection />
        <EducationSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

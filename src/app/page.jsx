import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RequestInfoAndTestimonials from "@/components/RequestInfoandTestimonials";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesGrid />
      <RequestInfoAndTestimonials />
      <Footer />
    </>
  );
}

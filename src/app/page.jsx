import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RequestInfoAndTestimonials from "@/components/RequestInfoandTestimonials";
import StatsSection from "@/components/StatsSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <FeaturesGrid />
      <RequestInfoAndTestimonials />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

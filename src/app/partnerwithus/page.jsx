import AdvantagesSection from "@/components/AdvantagesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgressBars from "@/components/ProgressBar";
import Image from "next/image";
import Link from "next/link";

export default function PartnerWithUs() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      {/* About Us Hero Header */}
      <section
        className="relative w-full h-64 md:h-80 lg:h-[10rem]"
        data-aos="fade-down"
      >
        <Image
          src="/images/purchase-ev-rect.png" // Update image as needed
          alt="EV charger background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-between px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl text-white font-bold z-20">
            PARTNER WITH US
          </h1>
          <div className="text-white text-sm z-20">
            <span>You Are Here: </span>
            <Link href="/" className="hover:underline">
              HOME
            </Link>{" "}
            /{" "}
            <span className="font-semibold text-purple-900">
              PARTNER WITH US
            </span>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="text-center py-16 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold italic mb-6"
          data-aos="fade-right"
        >
          “POWERING THE FUTURE OF{" "}
          <span className="text-purple-900 not-italic">
            INTELLIGENT EV SOLUTIONS
          </span>{" "}
          WORLDWIDE”
        </h2>
        <h2
          className="text-2xl md:text-3xl font-bold italic"
          data-aos="fade-left"
        >
          “EFFICIENCY, TRUST, +{" "}
          <span className="text-purple-900 not-italic">SUSTAINABLE IMPACT</span>
          ”
        </h2>
      </section>

      {/* Why Us Section */}
      <section
        className="bg-slate-600 mx-auto px-4 py-20 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-black">WHY </span>
          <span className="text-black">CHOOSE US</span>
        </h2>

        <hr className="border-gray-300 mb-6 w-1/4 mx-auto" />

        <p className="text-white italic text-lg">
          Our team offers customizable ownership and collaboration options,
          ideal for eligible investors and property managers. With strict
          vetting criteria, we prioritize high-traffic commercial environments.
          Explore your opportunities below.
        </p>
      </section>

      {/* Buyer Programs */}
      <section className="bg-black text-white px-4 py-16" data-aos="fade-up">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">PARTNER </span>
            <span className="font-light">SOLUTIONS</span>
          </h2>

          <hr className="border-gray-700 mb-6 w-1/4 mx-auto" />

          <p className="text-gray-300 italic max-w-3xl mx-auto">
            We offer strategic guidance for deployment and setup of EV systems,
            <span className="italic font-light">
              all while optimizing costs and preserving your operational
              bandwidth.
            </span>
          </p>
        </div>

        {/* INDIVIDUALS Section */}
        <div className="max-w-6xl mx-auto mt-12 space-y-8">
          <h3 className="text-xl font-semibold text-center">
            <span className="text-white">ENTREPRENEURS </span>
            <span className="font-light">& SMALL ENTERPRISES</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div data-aos="fade-up">
              <h4 className="text-purple-900 font-bold">PREMIUM HARDWARE</h4>
              <p className="mt-2">Deploy 1–50 EV Chargers with confidence.</p>
              <p className="mt-1">Includes a 3-Year Full Coverage Warranty.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-purple-900 font-bold">EASY OPERATIONS</h4>
              <p className="mt-2 text-purple-900 uppercase">
                COMPLETE SERVICE PLAN
              </p>
              <p className="mt-1">Flexible financing terms available.</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-purple-900 font-bold">ONGOING SUPPORT</h4>
              <p className="mt-2">Onboarding assistance for new partners.</p>
              <p className="mt-1">Expert operational consulting available.</p>
            </div>
          </div>
        </div>

        {/* COMMERCIAL Section */}
        <div className="max-w-6xl mx-auto mt-20 space-y-8">
          <h3 className="text-xl font-semibold text-center">
            <span className="text-white">ENTERPRISE / DEVELOPERS </span>
            <span className="font-light">/ PROPERTY MANAGEMENT</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div data-aos="fade-up">
              <h4 className="text-purple-900 font-bold">ADVANCED CAPACITY</h4>
              <p className="mt-2">Scalable setups for 50+ charging units.</p>
              <p className="mt-1">
                Protected by 3-Year Parts & Labor Warranty.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h4 className="text-purple-900 font-bold">MAINTENANCE OPTIONS</h4>
              <p className="mt-2 text-purple-900 uppercase">
                FLEXIBLE SUPPORT PACKAGES
              </p>
              <p className="mt-1">(Optional & Customizable)</p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-purple-900 font-bold">BRAND EXPOSURE</h4>
              <p className="mt-2">On-site signage opportunities.</p>
              <p className="mt-1">Custom wrap solutions offered.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <AdvantagesSection />
      </section>

      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

import AdvantagesSection from "@/components/AdvantagesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProgressBars from "@/components/ProgressBar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      {/* About Us Hero Header */}
      <section
        className="relative w-full h-64 md:h-80 lg:h-[10rem]"
        data-aos="fade-down"
      >
        <Image
          src="/images/about-ev.png" // Update image as needed
          alt="EV charger background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-between px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl text-white font-bold z-20">
            ABOUT US
          </h1>
          <div className="text-white text-sm z-20">
            <span>You Are Here: </span>
            <Link href="/" className="hover:underline">
              HOME
            </Link>{" "}
            / <span className="font-semibold text-purple-900">ABOUT US</span>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="text-center py-16 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold italic mb-6"
          data-aos="fade-right"
        >
          “LEADING THE FUTURE OF{" "}
          <span className="text-purple-900 not-italic">
            NEXT-GEN EV CHARGING
          </span>{" "}
          TECHNOLOGY”
        </h2>
        <h2
          className="text-2xl md:text-3xl font-bold italic"
          data-aos="fade-left"
        >
          “INNOVATION, RELIABILITY, +{" "}
          <span className="text-purple-900 not-italic">SUSTAINABLE GROWTH</span>
          ”
        </h2>
      </section>

      {/* Performance Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Map Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/purchase-ev.png" // Update image as needed
              alt="US map"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              IMPACT{" "}
              <span className="text-purple-900 font-normal">/ MILESTONES</span>
            </h3>
            <p className="mb-4 text-sm md:text-base">
              Since our inception in 2022, we’ve dedicated ourselves to
              delivering premium EV charging infrastructure focused on speed,
              efficiency, and environmental consciousness.
            </p>
            <p className="mb-4 text-sm md:text-base">
              Today, we operate a growing network that spans across 20+ states
              and supports thousands of EV users daily.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
              <li>Over 9,500+ chargers deployed nationwide</li>
              <li>
                Collaborating with 3,000+ property owners and fleet operators
              </li>
              <li>Surpassed 4 million successful charge sessions to date</li>
              <li>Consistent year-over-year growth since launch</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <AdvantagesSection />
      </section>
      <section>
        <ProgressBars />
      </section>
      {/* Footer */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

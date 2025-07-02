import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PurchaseBulkChargerPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      {/* About Us Hero Header */}
      <section
        className="relative w-full h-64 md:h-80 lg:h-[10rem]"
        data-aos="fade-down"
      >
        <Image
          src="/images/purchase-ev-rect2.png" // Update image as needed
          alt="EV charger background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-between px-6 md:px-12">
          <h1 className="text-3xl md:text-4xl text-white font-bold z-20">
            PURCHASE BULK CHARGERS
          </h1>
          <div className="text-white text-sm z-20">
            <span>You Are Here: </span>
            <Link href="/" className="hover:underline">
              HOME
            </Link>{" "}
            /{" "}
            <span className="font-semibold text-purple-600">
              PURCHASE BULK CHARGERS
            </span>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="text-center py-16 px-4">
        <h2
          className="text-2xl md:text-3xl font-bold italic mb-6"
          data-aos="fade-left"
        >
          “FUELING PROGRESS WITH{" "}
          <span className="text-purple-900 not-italic">BULK EV CHARGING</span>{" "}
          TECHNOLOGY”
        </h2>
        <h2
          className="text-2xl md:text-3xl font-bold italic"
          data-aos="fade-right"
        >
          “ENGINEERED FOR SCALE, PERFORMANCE, +{" "}
          <span className="text-purple-900 not-italic">
            DESIGNED FOR TOMORROW
          </span>
          ”
        </h2>
      </section>

      {/* Performance Section */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Map Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/purchase-ev2.png" // Update image as needed
              alt="US map"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              WHY{" "}
              <span className="text-purple-900 font-normal">
                PARTNER WITH US
              </span>
            </h3>
            <p className="mb-4 text-sm md:text-base">
              Since launching in 2022, we’ve built one of the fastest-growing EV
              charging networks in the country—designed for reliability,
              scalability, and long-term value.
            </p>
            <p className="mb-4 text-sm md:text-base">
              Today, our infrastructure powers high-volume operations across 20+
              states, trusted by fleet operators, businesses, and developers
              alike.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
              <li>9,500+ commercial-grade chargers deployed nationwide</li>
              <li>
                3,000+ partnerships with property owners and fleet managers
              </li>
              <li>4 million+ charge sessions completed with 99.9% uptime</li>
              <li>
                Proven, scalable growth year over year—ready to meet bulk demand
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

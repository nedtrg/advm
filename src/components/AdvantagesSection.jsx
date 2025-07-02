import Image from "next/image";
import {
  IconDiamond,
  IconCalendarEvent,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";

export default function AdvantagesSection() {
  return (
    <section className="bg-[#2f2f2f] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-white">OUR </span>
            <span className="text-gray-300">ADVANTAGES</span>
          </h2>

          {/* Quality */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-2">
              <IconDiamond className="text-purple-900" size={24} />
              <h3 className="text-lg font-semibold">Quality</h3>
            </div>
            <p className="text-sm text-gray-300">
              We are committed to delivering exceptional EV charging services,
              grounded in deep industry knowledge and years of hands-on
              expertise.
            </p>
          </div>

          {/* 2023 */}
          <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-2">
              <IconCalendarEvent className="text-purple-900" size={24} />
              <h3 className="text-lg font-semibold">2023</h3>
            </div>
            <p className="text-sm text-gray-300">
              In 2023, we ranked among the top five EV charging solution
              providers in the U.S., supporting commercial businesses with
              robust nationwide infrastructure and maintenance programs.
            </p>
          </div>

          {/* 2024 and Beyond */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-2">
              <IconPlayerPlayFilled className="text-purple-900" size={24} />
              <h3 className="text-lg font-semibold">2024 and Beyond</h3>
            </div>
            <p className="text-sm text-gray-300">
              We’re now offering revenue-generating opportunities for
              entrepreneurs. Get involved in the EV space by deploying charging
              systems with full operational and technical support—ensuring a
              passive income stream while participating in a rapidly expanding
              market.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full" data-aos="fade-left">
          <Image
            src="/images/advt-ev.jpeg"
            alt="EV charger"
            width={600}
            height={400}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-sm text-gray-400 uppercase mb-2 tracking-wide">
          Are You Looking for
        </h2>
        <h1 className="text-3xl md:text-4xl font-light mb-4">
          THE RIGHT{" "}
          <span className="text-purple-800 font-semibold">CHARGER PLAN?</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12">
          We have decades of collective experience producing and supporting
          electric vehicle charging stations. Our experts are by your side,
          every step of the way.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox end={2000} suffix="+" label="Locations" />
          <StatBox end={23} label="States" />
          <StatBox end={400} suffix="+" label="Units Deployed in 2023" />
          <StatBox end={1000} suffix="+" label="Satisfied Customers" />
        </div>
      </div>
    </section>
  );
}

function StatBox({ end, suffix = "", label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-6xl font-bold">
        <CountUp end={end} duration={2.5} separator="," suffix={suffix} />
      </div>
      <div className="text-sm text-gray-400 mt-2 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

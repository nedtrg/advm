"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ProgressItem = ({ label, value, color }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(`${value}%`), 300);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="mb-6">
      <div className="mb-1 font-medium text-gray-800">{label}</div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width }}
        />
        {inView && (
          <div className="absolute right-1 top-0 text-sm text-black font-bold">
            <CountUp end={value} duration={2} />%
          </div>
        )}
      </div>
    </div>
  );
};

export default function ProgressBars() {
  return (
    <section className="bg-white py-10 px-4 max-w-4xl mx-auto">
      <ProgressItem label="New Client Leads" value={50} color="bg-green-400" />
      <ProgressItem
        label="Returning Customers"
        value={54}
        color="bg-yellow-300"
      />
      <ProgressItem label="Customer Happiness" value={87} color="bg-red-400" />
      <ProgressItem
        label="Operational Efficiency"
        value={90}
        color="bg-blue-500"
      />
    </section>
  );
}

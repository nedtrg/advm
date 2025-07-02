"use client";

import { useState } from "react";
import {
  IconClock,
  IconBolt,
  IconCloud,
  IconBatteryEco,
  IconGrowth,
  IconRecharging,
  IconFlame,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: IconClock,
    title: "Spark Plan",
    description:
      "Likely an entry-level plan for small fleets or businesses (e.g., rideshare, small delivery). Similar to SparkCharge’s Mobile Battery Charging (80–300 kW), it’s portable, grid-independent, and instantly deployable.",
    more: [
      "Upfront Costs: Minimal, as mobile chargers require no grid upgrades or construction. Estimated $50,000–$100,000 for a single DC fast charger (DCFC) unit, including hardware and setup.",
      "Operational Costs: $10,000–$20,000/year for energy (35–60 cents/kWh) and maintenance (e.g., battery wear, service).",
      "Incentives: Eligible for 6% federal tax credit ($3,000–$6,000) and state grants, reducing net cost by 20–30%.",
      "Revenue: Direct: Charging fees at 35–60 cents/kWh, yielding $10,000–$30,000/year for a single unit at 50% utilization (e.g., 100 kWh/day). Indirect: Customer retention for businesses (e.g., rideshare hubs) or advertising revenue ($5,000–$10,000/year).",
      "ROI: Payback Period: 2–4 years, assuming $20,000 annual net revenue and $70,000 net cost after incentives. Factors: High ROI for high-utilization sites (e.g., urban rideshare hubs). Limited by low demand in rural areas or battery lifespan (5–10 years).",
      "Risks: Obsolescence due to rapid tech advancements; low utilization if EV adoption is slow.",
    ],
  },
  {
    icon: IconBolt,
    title: "Dual Spark Plan",
    description:
      "Likely a step-up with two mobile chargers or dual-port systems, targeting medium-sized fleets (e.g., delivery vans). Could resemble SparkCharge’s hybrid service model.",
    more: [
      "Upfront Costs: $100,000–$200,000 for two DCFC units or a dual-port system.",
      "Operational Costs: $20,000–$40,000/year, doubling energy and maintenance needs.",
      "Incentives: Up to $12,000 tax credit (6% per charger) plus state grants, offsetting 20–25% of costs.",
      "Revenue: Direct: $20,000–$60,000/year at 50% utilization (200 kWh/day across two units). Indirect: Enhanced fleet uptime, reducing downtime costs ($10,000–$20,000/year for fleets).",
      "ROI: Payback Period: 2.5–4.5 years, assuming $40,000 annual net revenue and $140,000 net cost. Factors: Higher revenue potential but sensitive to utilization rates. Ideal for busy depots or multi-vehicle charging.",
      "Risks: Higher maintenance costs for dual systems; grid-independent batteries may face supply chain issues (e.g., lithium shortages).",
    ],
  },
  {
    icon: IconCloud,
    title: "Fast-Track Plan",
    description:
      "Likely focuses on rapid deployment for commercial fleets or public hubs, similar to SparkCharge’s Off-Grid Power Hub (180–500 kW). Targets high-traffic areas like airports or retail",
    more: [
      "Upfront Costs: $200,000–$500,000 for a multi-vehicle charging hub with battery storage.",
      "Operational Costs: $50,000–$100,000/year for energy, maintenance, and staffing.",
      "Incentives: $30,000–$100,000 in tax credits and grants (e.g., NEVI Formula Program).",
      "Revenue: Direct: $50,000–$150,000/year at 60% utilization (500 kWh/day). Indirect: Attracts tenants or customers (e.g., $20,000–$50,000/year for retail sites).",
      "ROI: Payback Period: 3–5 years, assuming $100,000 annual net revenue and $350,000 net cost. Factors: High ROI in urban areas with EV demand (e.g., Gridserve’s Exeter Superhub). Limited by high upfront costs and permitting delays.",
      "Risks: High capital risk if utilization is lower than expected; competition from fixed chargers (e.g., ChargePoint).",
    ],
  },
  {
    icon: IconBatteryEco,
    title: "Swap Surge Plan",
    description:
      "Likely involves battery swapping or modular charging for rapid scalability, possibly for fleets or events. No direct match, but could align with India’s 2W/3W battery-swapping focus",
    more: [
      "Upfront Costs: $300,000–$800,000 for swapping stations or modular chargers.",
      "Operational Costs: $50,000–$150,000/year, including battery leasing and logistics.",
      "Incentives: $50,000–$150,000 via grants for innovative solutions.",
      "Revenue: Direct: $50,000–$200,000/year from subscription-based swapping or per-swap fees. Indirect: Reduces fleet downtime, saving $20,000–$50,000/year.",
      "ROI: Payback Period: 3–5 years, assuming $100,000 annual net revenue and $500,000 net cost. Factors: High ROI in dense markets (e.g., urban delivery). Limited by battery standardization and logistics costs.",
      "Risks: Niche technology; lacks widespread adoption outside specific markets (e.g., India).",
    ],
  },
  {
    icon: IconGrowth,
    title: "Rapid Growth Plan",
    description:
      "Likely a scalable solution for expanding fleets or networks, combining mobile and permanent infrastructure. Could mirror SparkCharge’s transition to grid-connected systems",
    more: [
      "Upfront Costs: $500,000–$1 million for multiple chargers and partial grid integration.",
      "Operational Costs: $100,000–$200,000/year, including grid fees and maintenance.",
      "Incentives: $50,000–$200,000 via federal/state programs, reducing costs by 20–30%.",
      "Revenue: Direct: $100,000–$300,000/year at 60% utilization (1,000 kWh/day). Indirect: Supports fleet scaling, saving $50,000–$100,000/year in downtime or fuel costs.",
      "ROI: Payback Period: 3.5–6 years, assuming $200,000 annual net revenue and $700,000 net cost. Factors: Strong ROI for growing fleets (e.g., delivery services like UPS). Requires long-term EV adoption trends to sustain.",
      "Risks: High upfront costs; grid integration may face utility delays or demand charges.",
    ],
  },
  {
    icon: IconRecharging,
    title: "HyperCharge Plan",
    description:
      "Likely an ultra-fast charging solution (e.g., 300–500 kW) for high-demand sites like highways or logistics hubs, akin to HyperFast’s battery-buffered chargers.",
    more: [
      "Upfront Costs: $1–$2 million for ultra-fast chargers with battery storage.",
      "Operational Costs: $200,000–$400,000/year, driven by high energy use and maintenance.",
      "Incentives: $100,000–$400,000 via NEVI or IRA credits, offsetting 20–30%.",
      "Revenue: Direct: $200,000–$500,000/year at 70% utilization (2,000 kWh/day). Indirect: Draws long-distance EV drivers, adding $50,000–$100,000/year in adjacent revenue (e.g., retail).",
      "ROI: Payback Period: 4–6 years, assuming $350,000 annual net revenue and $1.4 million net cost. Factors: High ROI for highway corridors (e.g., EU’s AFIR mandates). Sensitive to energy price volatility.",
      "Risks: High costs and grid strain; requires robust demand to justify investment.",
    ],
  },
  {
    icon: IconFlame,
    title: "MegaFreight Plan",
    description:
      "Likely targets large-scale logistics (e.g., freight trucks, ports), similar to SparkCharge’s port solutions or InCharge Energy’s heavy-duty fleet charging.",
    more: [
      "Upfront Costs: $2–$5 million for high-capacity chargers (e.g., megawatt-level) and battery storage.",
      "Operational Costs: $500,000–$1 million/year, due to high energy and maintenance needs.",
      "Incentives: $200,000–$1 million via NEVI or freight-specific grants (e.g., National Zero-Emission Freight Corridor Strategy).",
      "Revenue: Direct: $500,000–$1.5 million/year at 70% utilization (5,000 kWh/day). Indirect: Enables compliance with emissions mandates, saving $100,000–$500,000/year in fines or fuel costs.",
      "ROI: Payback Period: 4–7 years, assuming $1 million annual net revenue and $3.5 million net cost. Factors: High ROI for large fleets (e.g., Xos trucks). Requires long-term policy support.",
      "Risks: Massive upfront costs; grid limitations for megawatt chargers; slow heavy-duty EV adoption.",
    ],
  },
];

const FeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-rose-400 to-purple-600 py-20 px-6 min-h-screen text-black text-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white/10 p-6 rounded-xl"
            >
              <div className="[perspective:1000px]">
                <motion.div
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 1 }}
                  className="w-24 h-24 rounded-full border border-black flex items-center justify-center mb-6 transform-gpu [transform-style:preserve-3d]"
                >
                  <Icon size={40} />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-base font-medium leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>

              <div className="relative w-full mt-4 max-w-xs">
                <motion.div
                  animate={{
                    maxHeight: isOpen ? 1000 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden text-sm text-left transition-all"
                >
                  <ul className="text-sm text-white list-disc list-inside space-y-4 mt-4">
                    {feature.more.map((item, subIndex) => (
                      <li key={subIndex}>{item}</li>
                    ))}
                  </ul>
                </motion.div>

                <button
                  onClick={() => toggle(index)}
                  className="mt-2 text-sm font-medium underline hover:text-purple-200 transition"
                >
                  {isOpen ? "Read Less" : "Read More"}
                </button>
              </div>
              <Link
                className="text-black font-semibold border border-black bg-purple-400 hover:bg-purple-950 hover:text-white transition-colors duration-300 px-6 py-2 rounded-full mt-6"
                href="/contactus"
              >
                SIGN UP
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;

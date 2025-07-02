import {
  IconTree,
  IconCar,
  IconRoad,
  IconBuildingSkyscraper,
  IconChartBar,
  IconChargingPile,
} from "@tabler/icons-react";

const features = [
  {
    icon: <IconTree className="text-purple-900" size={60} stroke={1.5} />,
    title: "Natures Protector",
    description:
      "Our mission is to help protect the environment for a positive, practical future. We do this by excelling with industry leading technology and minimizing environmental impact.",
  },
  {
    icon: <IconCar className="text-purple-900" size={60} stroke={1.5} />,
    title: "Industry Leader",
    description:
      "As an up and coming industry leader, our objective is to lead the way for positive change via the production and installation of commercial grade EV charging systems.",
  },
  {
    icon: <IconRoad className="text-purple-900" size={60} stroke={1.5} />,
    title: "Growing Market",
    description:
      "In 2023 Electric vehicles represented nearly 3 million vehicles on U.S. roads.",
  },
  {
    icon: (
      <IconBuildingSkyscraper
        className="text-purple-900"
        size={60}
        stroke={1.5}
      />
    ),
    title: "Limited Supply",
    description:
      "EV’s are poorly supported by a fraction of the number of ports needed, as of 2024. Less than 150,000 commercial chargers are available in the US to support nearly 3 Million electric vehicles.",
  },
  {
    icon: <IconChartBar className="text-purple-900" size={60} stroke={1.5} />,
    title: "Growing Demand",
    description:
      "With EV sales rising year over year, America will need more than 15X the anticipated demand in 2030.",
  },
  {
    icon: (
      <IconChargingPile className="text-purple-900" size={60} stroke={1.5} />
    ),
    title: "Growing Industry",
    description:
      "More than 30 Million commercial charging ports, for both personal electric vehicles and fleets will be required to support the EV projections for 2030.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-white">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-20 shadow-sm border border-gray-200 text-center"
          >
            <div className="place-items-center group transition duration-300">
              <div className="text-primary mb-4 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-black text-xl font-bold mb-2 transition-transform group-hover:scale-105">
                {feature.title}
              </h3>
              <p className="text-black text-lg font-medium transition-transform group-hover:scale-[1.02]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

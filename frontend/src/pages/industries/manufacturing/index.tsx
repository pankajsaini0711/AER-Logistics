import HeroSection from "../../../components/industry/hero-section";
import ManufacturingImage from "../hero-section-images/industry-hero-manufacturing.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiGlobe,
  PiTimer,
  PiTruck,
  PiBuildings,
  PiShoppingBagOpen,
  PiLeaf,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";

const description: React.ReactElement = (
  <>
    <p>
      Efficient and Reliable Logistical solutions are critical for managing
      global supply chains, maintaining production schedules and meeting demands
      of market in manufacturing industry.{" "}
    </p>
    <p>
      The experts of AER Logistics provide you customized solutions to support
      each stage of your manufacturing and production process.{" "}
    </p>
    <p>
      We ensure that your complete supply chain from sourcing raw materials to
      delivering finished goods operate smoothly with full transparency.{" "}
    </p>
    <p>
      Our diverse solutions include inbound and outbound Logistics, inventory
      management and just in time delivery to help manufacturers optimize their
      production and reduce cost and downtime.{" "}
    </p>
  </>
);

const Manufacturing = () => {
  const keyPointData = [
    {
      icon: PiGlobe,
      title: "Healthcare Inventory Management",
      description: "Global Supply Chain Management",
    },
    {
      icon: PiTimer,
      title: "Medical Device Storage",
      description: "Just in Time Delivery",
    },
    {
      icon: PiTruck,
      title: "Medical Disposal Services",
      description: "Inbound and Outbound Logistics",
    },
    {
      icon: PiBuildings,
      title: "Pharmacy Warehousing",
      description: "Warehousing and Inventory Management",
    },
    {
      icon: PiShoppingBagOpen,
      title: "Temperature-Controlled Facilities",
      description: "Handling of Specialized Goods",
    },
    {
      icon: PiLeaf,
      title: "Supply Chain Solutions",
      description: "Sustainable Logistics ",
    },
  ];

  return (
    <section className="manufacturing-section">
      <HeroSection
        backgroundImage={ManufacturingImage}
        title="Manufacturing"
        subtitle="Take advantage of our expertise in manufacturing Logistics solutions and scale your business"
        buttonText="Contact Us!"
        buttonUrl="/contact" // Updated to a realistic URL placeholder
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default Manufacturing;

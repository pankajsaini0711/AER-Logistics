import HeroSection from "../../../components/industry/hero-section";
import ComsumerImage from "../hero-section-images/industry-hero-consumer.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiTruckTrailer,
  PiPackage,
  PiShoppingCart,
  PiHandCoins,
  PiThermometer,
  PiBarcode,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";

const description: React.ReactElement = (
  <>
    <p>
      The Consumer Goods Industry requires efficient and reliable logistics
      solutions to meet customer demand, manage high-volume shipments, and
      navigate global supply chain challenges.
    </p>
    <p>
      AER Logistics offers tailored solutions for the fast-moving consumer
      goods sector to help businesses streamline their operations and deliver
      products to market quickly and cost-effectively.
    </p>
    <p>
      Our services are designed to support every stage of your supply chain,
      from warehousing and inventory management to last-minute delivery.
    </p>
    <p>
      Whether you are managing retail operations, an e-commerce platform, or
      manufacturing services, AER Logistics ensures accurate and on-time
      delivery of your goods in perfect condition.
    </p>
  </>
);

const ConsumerGoods = () => {
  const keyPointData = [
    {
      icon: PiTruckTrailer,
      title: "Healthcare Inventory Management",
      description: "Part and full load delivery capability",
    },
    {
      icon: PiPackage,
      title: "Medical Device Storage",
      description: "Protective packaging and Package solutions",
    },
    {
      icon: PiShoppingCart,
      title: "Medical Disposal Services",
      description: "Peak volume sales support and Peak volume specialist",
    },
    {
      icon: PiHandCoins,
      title: "Pharmacy Warehousing",
      description: "Technical delivery & installation",
    },
    {
      icon: PiThermometer,
      title: "Temperature-Controlled Facilities",
      description:
        "Temperature-controlled storage & Distribution",
    },
    {
      icon: PiBarcode,
      title: "Supply Chain Solutions",
      description:
        "Unassisted deliveries & stock scanning at location",
    },
  ];

  return (
    <section className="consumer-goods-section">
      <HeroSection
        backgroundImage={ComsumerImage}
        title="Consumer Goods"
        subtitle="Choose AER Logistics to fulfill your fast-moving consumer goods logistics needs"
        buttonText="Contact Us!"
        buttonUrl="/contact" // Updated to a realistic URL placeholder
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default ConsumerGoods;

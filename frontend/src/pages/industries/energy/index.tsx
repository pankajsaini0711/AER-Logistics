import HeroSection from "../../../components/industry/hero-section";
import EnergyImage from "../hero-section-images/industry-hero-energy.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiTruck,
  PiMapPinSimpleArea,
  PiPlant,
  PiWifiHigh,
  PiLightbulbFilament,
  PiGlobeStand,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";

const description: React.ReactElement = (
  <>
    <p>
      At AER Logistics, we understand the complexities and critical demands of
      the energy industry and provide you solutions to scale your business
      efficiently.{" "}
    </p>

    <p>
      Our solutions are designed to meet the unique challenges of the energy
      sector including oil and gas, renewable energy, mining and EPC.{" "}
    </p>

    <p>
      We ensure maximum utilization of assets and provide direct delivery to
      wind farms and solar thermal power plants, including inventory delivery
      based on specific requirements and express delivery for urgent parts.{" "}
    </p>

    <p>
      Partner with us to ensure that your energy supply chain remains agile
      secure and future-ready.
    </p>
  </>
);

const Energy = () => {
  const keyPointData = [
    {
      icon: PiMapPinSimpleArea,
      title: "Healthcare Inventory Management",
      description: "Management of remote stores and stocking locations",
    },
    {
      icon: PiPlant,
      title: "Medical Device Storage",
      description: "Alternative energy market ",
    },
    {
      icon: PiWifiHigh,
      title: "Medical Disposal Services",
      description: "Smart Metering Logistics",
    },
    {
      icon: PiLightbulbFilament,
      title: "Pharmacy Warehousing",
      description: "Field Engineering Support ",
    },
    {
      icon: PiGlobeStand,
      title: "Temperature-Controlled Facilities",
      description: "Network resilience support and emergency response.",
    },
    {
      icon: PiTruck,
      title: "Supply Chain Solutions",
      description: "Asset and inventory management",
    },
  ];

  return (
    <section className="energy-section">
      <HeroSection
        backgroundImage={EnergyImage}
        title="Energy"
        subtitle="We serve across various energy sectors globally to improve your companies performance in this sector"
        buttonText="Contact Us!"
        buttonUrl="/contact" // Updated to a realistic URL placeholder
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default Energy;

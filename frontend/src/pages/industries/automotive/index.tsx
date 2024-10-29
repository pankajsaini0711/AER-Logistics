import HeroSection from "../../../components/industry/hero-section";
// import domestic_ground_hero from "../../components/service-items/images/herosection/domestic_ground_hero.png";
import AutomotiveImage from "../hero-section-images/industry-hero-automotive.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiAirplaneLanding,
  PiPackage,
  PiAirplaneTakeoff,
  PiCar,
  PiAirplaneTilt,
  PiRoadHorizon,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";
const description: React.ReactElement = (
  <>
    <p>
      In this fast paced automotive industry, efficient logistics are critical
      to maintaining production schedules, managing global supply chains and
      meeting demands of a competitive market.{" "}
    </p>

    <p>
      As a qualified and progressive automotive logistics partner, we serve you
      at every stage of your supply chain worldwide, regardless of your
      distribution channels - for ICE, electric cars and two-wheeler.
    </p>

    <p>
      We offer end to end Logistics solutions specifically tailored for the
      automotive industry to ensure seamless movements of parts, components or
      finished vehicles.{" "}
    </p>

    <p>
      Our experts offer inbound, outbound, and aftermarket responsive logistics
      solutions that benefit all automotive and two-wheel ecosystem actors,
      including OEMs, suppliers, dealers, auctioneers, leasing firms, and
      mobility providers.
    </p>
  </>
);

const Automotive = () => {
  const keyPointData = [
    {
      icon: PiAirplaneLanding,
      title: "Licensed NVOCC",
      description:
        "Inbound Automotive Logistics Solutions",
    },
    {
      icon: PiAirplaneTakeoff,
      title: "Licensed NVOCC",
      description:
        "Outbound Automotive Logistics Solutions",
    },
    {
      icon: PiCar,
      title: "Licensed NVOCC",
      description:
        "Aftermarket Logistics Solutions",
    },
    {
      icon: PiAirplaneTilt,
      title: "Licensed NVOCC",
      description:
        "Finished vehicles by Air",
    },
    {
      icon: PiRoadHorizon,
      title: "Licensed NVOCC",
      description:
        "Multi modal and cross border transports",
    },
    {
      icon: PiPackage,
      title: "Licensed NVOCC",
      description:
        "Pick and Pack Services",
    },
  ];
  return (
    <section className="automotive-section">
      <HeroSection
        backgroundImage={AutomotiveImage}
        title="Automotive"
        subtitle="Trust the leading Automotive Logistics Providers for accelerating your business growth "
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default Automotive;

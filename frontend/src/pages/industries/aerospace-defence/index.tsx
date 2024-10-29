import HeroSection from "../../../components/industry/hero-section";
// import domestic_ground_hero from "../../components/service-items/images/herosection/domestic_ground_hero.png";
import EaroscopeImage from "../hero-section-images/industry-hero-aeroscope.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiTruckTrailer,
  PiClockUser,
  PiAirplaneLanding,
  PiHandshake,
  PiCalendarCheck,
  PiPackage,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";
const description: React.ReactElement = (
  <>
    <p>
      We understand that the Aerospace and Defense Industry demand security,
      precision and efficiency in every aspect of its logistics and supply chain
      operations.
    </p>

    <p>
      At AER Logistics, we provide comprehensive logistics solutions
      specifically designed for the aerospace and defense industries ensuring
      timely delivery of critical components, equipment and technology in
      compliance with the highest standards of safety and regulatory
      requirements.
    </p>

    <p>
      Our deep industry expertise combined with innovative and cutting edge
      technology enables us to deliver end-to-end supply chain services that
      supports complex operations globally.{" "}
    </p>

    <p>
      From sourcing and procurement to transportation and final delivery, we
      ensure that your supply chain is resilient, secure and fully optimized.{" "}
    </p>
  </>
);

const AerospaceDefence = () => {
  const keyPointData = [
    {
      icon: PiTruckTrailer,
      title: "Licensed NVOCC",
      description:
        "Repair management, aircraft-on-ground (AOG), and critical part supply",
    },
    {
      icon: PiAirplaneLanding,
      title: "Licensed NVOCC",
      description:
        "We  offer  rapid  response  and  emergency  aircraft  and  on  ground  services  specifically  designed to  get  your  aircraft  back  in  service.",
    },
    {
      icon: PiHandshake,
      title: "Licensed NVOCC",
      description:
        "We have dedicated support team to streamline the transportation and address your queries.",
    },
    {
      icon: PiClockUser,
      title: "Licensed NVOCC",
      description:
        "Comprehensive understanding of manufacturing logistics and parts management.",
    },
    {
      icon: PiCalendarCheck,
      title: "Licensed NVOCC",
      description:
        "We will manage all custom clearance and  trans-border services.",
    },
    {
      icon: PiPackage,
      title: "Licensed NVOCC",
      description:
        "We provide ISO certified aviation  warehousing and distribution.",
    },
  ];
  return (
    <section className="aerospace-section">
      <HeroSection
        backgroundImage={EaroscopeImage}
        title="Aerospace and Defence"
        subtitle="Our Comprehensive Logistics Solutions are well-crafted for the Aerospace and Defense industries"
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default AerospaceDefence;

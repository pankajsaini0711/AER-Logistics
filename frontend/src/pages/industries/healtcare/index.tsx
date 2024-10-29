import HeroSection from "../../../components/industry/hero-section";
// import domestic_ground_hero from "../../components/service-items/images/herosection/domestic_ground_hero.png";
import HealthCareImage from "../hero-section-images/industry-hero-healtcare.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiAmbulance,
  PiStethoscope,
  PiFirstAid,
  PiHandHeart,
  PiFirstAidKit,
  PiPill,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";
const description: React.ReactElement = (
  <>
    <p>
      The healthcare industry demands precision, reliability, and speed when it
      comes to Logistics. Timely delivery of medical supplies, pharmaceuticals,
      and life-saving equipment can make a critical difference in patient care.{" "}
    </p>

    <p>
      At AER Logistics, we specialize in healthcare Logistics solutions that
      prioritize safety, compliance, and efficiency.{" "}
    </p>

    <p>
      Our services are designed to meet the unique needs of hospitals,
      pharmaceutical companies, medical device manufacturers, and healthcare
      providers across the globe.
    </p>

    <p>
      With a focus on maintaining the integrity of sensitive products and
      ensuring compliance with stringent healthcare regulations, we provide a
      comprehensive logistics network that you can trust.
    </p>
  </>
);

const HealthCare = () => {
  const keyPointData = [
    {
      icon: PiAmbulance,
      title: "Licensed NVOCC",
      description:
        "Healthcare Inventory Management Solution",
    },
    {
      icon: PiStethoscope,
      title: "Licensed NVOCC",
      description:
        "Storage and Distribution of registered medical devices",
    },
    {
      icon: PiFirstAid,
      title: "Licensed NVOCC",
      description:
        "Medical disposals",
    },
    {
      icon: PiHandHeart,
      title: "Licensed NVOCC",
      description:
        "Controlled pharmacy warehousing",
    },
    {
      icon: PiFirstAidKit,
      title: "Licensed NVOCC",
      description:
        "Temperature monitored and controlled warehouse facilities",
    },
    {
      icon: PiPill,
      title: "Licensed NVOCC",
      description:
        "Supply chain solutions (Supply Chain Services, 4PL and 24/7 availability Control Tower Services)",
    },
  ];
  return (
    <section className="healthcare-section">
      <HeroSection
        backgroundImage={HealthCareImage}
        title="Healthcare"
        subtitle="Leverage our best in class healthcare solutions to meet your healthcare industry requirements"
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default HealthCare;

import HeroSection from "../../../components/industry/hero-section";
import TechnologyImage from "../hero-section-images/industry-hero-technology.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import {
  PiHandHeart,
  PiTruck,
  PiWifiHigh,
  PiUserCirclePlus,
  PiArrowClockwise,
  PiShippingContainer,
} from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";

const description: React.ReactElement = (
  <>
    <p>
      Worldwide demand, quick inventions, and intricate supply chains propel the
      technology sector to be precise, quick, and flexible.
    </p>
    <p>
      We at AER Logistics offer customized Logistics solutions that will satisfy
      the particular requirements of your technological businesses, such as
      software developers, hardware suppliers, and producers of electronics.
    </p>
    <p>
      Our Logistics services guarantee the safe, prompt, and effective
      transportation of valuable parts, gadgets, and goods between domestic and
      international marketplaces.
    </p>
    <p>
      Our end-to-end Logistics support helps you save costs and improve customer
      satisfaction. Whether you are in charge of supply chains for consumer
      goods or enterprise IT solutions, we have a solution for everyone.
    </p>
  </>
);

const Technology = () => {
  const keyPointData = [
    {
      icon: PiUserCirclePlus,
      title: "Healthcare Inventory Management",
      description: "High Tech Supply Chain Experts and Tools",
    },
    {
      icon: PiArrowClockwise,
      title: "Medical Device Storage",
      description: "Technology Products Life Cycle Management",
    },
    {
      icon: PiWifiHigh,
      title: "Medical Disposal Services",
      description: "Automated Pickup and High Tech Warehouse Networks",
    },
    {
      icon: PiHandHeart,
      title: "Pharmacy Warehousing",
      description: "High Quality Sustainable Technology Transportation Services ",
    },
    {
      icon: PiShippingContainer,
      title: "Temperature-Controlled Facilities",
      description: "Agile Solutions suitable for all High Tech Logistics Operations",
    },
    {
      icon: PiTruck,
      title: "Supply Chain Solutions",
      description: "Global Network of Specialized Logistics for Technology Transportation",
    },
  ];

  return (
    <section className="technology-section">
      <HeroSection
        backgroundImage={TechnologyImage}
        title="Technology"
        subtitle="Our Logistics Experts will offer you the best Technology Transportation Services"
        buttonText="Contact Us!"
        buttonUrl="/contact" // Updated to a realistic URL placeholder
      />
      <IndustryInformation description={description} />
      <KeyPoint keyPointData={keyPointData} />
      <LogisticsSolutionFooter title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!" />
    </section>
  );
};

export default Technology;

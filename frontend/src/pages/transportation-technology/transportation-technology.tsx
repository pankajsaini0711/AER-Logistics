import React from "react";
import HeroSection from "../../components/hero-section/hero-section";
import TransportationServices from "../../components/service-items/service-items";
import LogisticsSolutionFooter from "../../components/logistic-solution-footer/logistic-solution-footer";
import domestictransportation from "../../components/service-items/images/domestic-transportation.jpg";
import oceanFreight from "../../components/service-items/images/ocean freight.jpg";
import airfreight from "../../components/service-items/images/air freight services.jpg";
import transportation_technology from "../../components/service-items/images/transportation_technology.png";
import transportation_technology_overview from "../../components/service-items/images/transportation_technology_overview.png";
import transportation_technology_why_choose from "../../components/service-items/images/transportation_technology_why_choose.png";
import transportation_technology_unknown from "../../components/service-items/images/transportation_technology_unknown.png";
import transportation_technology_hero from "../../components/service-items/images/herosection/transportation_technology_hero.png";
import "./transportation-technology.scss"

interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}

const TransportationTechnology = () => {
  const toggleServices: Service[] = [
    {
      title: "Overview",
      description: (
        <>
          <p>
            In today's digital age, businesses depend on their IT infrastructure
            to drive innovation, streamline operations, and maintain a
            competitive advantage.
          </p>
          <p>
            At AER Logistics we know that data is core to your business. Our
            experts understand the importance of providing end-to-end data
            center-managed services that support smooth and robust business
            operations.
          </p>
          <p>
            Whether you need to move a single rack or an entire data center
            across the street or across the globe. You can trust AER to
            flawlessly and securely relocate your hardware and data with minimal
            disruption to your business operations.
          </p>
        </>
      ),
      image: transportation_technology_overview,
    },
    {
      title: "Why Choose AER?",
      description: (
        <>
          <p>
            Our skilled team efficiently manages the recovery and redeployment,
            re-marketing, or recycling of equipment.
          </p>

          <p>
            We help in reducing the impact and demand of technology on our
            environment worldwide.
          </p>

          <p>
            Our solutions help organizations to recover their capital from their
            technology purchases and reduce the rate of equipment turnover.
          </p>

          <p>
            You can trust AER Logistics for secure, sustainable and fully
            compliant technology transportation services.
          </p>
        </>
      ),
      image: transportation_technology_why_choose,
    },
    {
      title: "",
      description: (
        <>
          <p>The technology services of AER Logistics include:</p>
          <ul>
            <li>Pre-configured Racks</li>
            <li>Flight cases to protect valuable and sensitive devices</li>
            <li>Laptop bags for simplified user experience</li>
            <li>Secure collection, processing and data sanitization</li>
            <li>Asset Identification</li>
            <li>Audit and Market Leading Reporting</li>
            <li>Asset level reporting</li>
            <li>Custom crates for rack transportation</li>
            <li>Crate lease program</li>
          </ul>
        </>
      ),
      image: transportation_technology_unknown,
    },
  ];

  return (
    <section className="transportation_technology">
      <HeroSection
        backgroundImage={transportation_technology_hero}
        title="Transportation Technology"
        subtitle="We provide best and innovative transportation technology services to enhance your digital world"
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      <TransportationServices services={toggleServices} />
      <div className="transport-technology-container">
        <div className="transport-technology-container-image-container">
          <img src={transportation_technology} alt="transportation_technology" />
          {/* <div className="transport-technology-container-image-container-circle-image"></div> */}
        </div>
        <div className="transport-technology-container-content">
          <h1>Circular Services</h1>
          <p>
            We have advanced circular service centers specifically designed to
            manage the responsible recovery and recycling of IT devices.
          </p>
          <p>
            AER Logistics expert team of professionals securely delivers and
            assesses the devices and then takes action based on their current
            health and age.
          </p>
          <p>
            Our best-in-className strategic circular services are situated in
            prime locations with secure facilities to ensure that device and
            life cycle management are nearby.
          </p>
          <p>
            We continuously strive to provide our customer satisfaction
            regarding their assets and offer them the opportunity to reduce
            environmental impact.
          </p>
        </div>
      </div>

      <LogisticsSolutionFooter
        title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
      />
    </section>
  );
};

export default TransportationTechnology;

import React from 'react'
import HeroSection from '../../components/hero-section/hero-section'
import TransportationServices from '../../components/service-items/service-items'
import LogisticsSolutionFooter from '../../components/logistic-solution-footer/logistic-solution-footer'
import domestictransportation from "../../components/service-items/images/domestic-transportation.jpg";
import oceanFreight from "../../components/service-items/images/ocean freight.jpg";
import airfreight from "../../components/service-items/images/air freight services.jpg";
import cold_chain_logistic_overview from "../../components/service-items/images/cold_chain_logistic_overview.png";
import cold_chain_logistic_why_choose from "../../components/service-items/images/cold_chain_logistic_why_choose.png";
import cold_chain_logistic_unknown from "../../components/service-items/images/cold_chain_logistic_unknown.png";

import cold_chain_hero from "../../components/service-items/images/herosection/cold_chain_hero.png";
import AirFreightSolutions from '../../components/air-freight-solution/air-freight-solution';

interface Service {
    title: string;
    description: string | React.ReactElement;
    image: string;
  }

const ColdChainLogistics = () => {

    const toggleServices: Service[] = [
        {
          title: "Overview",
          description: (
            <>
              <p>It's crucial to reduce discrepancies and minimize product loss when delivering goods that require a specific temperature.</p>
              <p>
              For any freight forwarder managing temperature-controlled deliveries, preventing breaks in the cold chain due to inadequate facilities, inadequate safety protocols, and/or inadequate training must be their first focus.
              </p>
              <p>
              This is the reason why even the biggest businesses in the world leverage AER cold chain transportation services.
              </p>
            </>
          ),
          image: cold_chain_logistic_overview,
        },
        {
          title: "Why Choose AER?",
          description: (
            <>
              <p>
              Whatever you're shipping, AER’s professional cold chain Logistics services experts offer solutions that are economical, safe, and secure, all while being customized to your organization's specific requirements.
              </p>
              <p>
              With years of experience in cold chain Logistics we know how to keep quality of your goods intact throughout shipping process.{" "}
              </p>
              <p>
              Collaborate with AER Logistics and eliminate the problem of product loss and enter in a world of efficient cold chain shipping.
              </p>
            </>
          ),
          image: cold_chain_logistic_why_choose,
        },
        {
          title: "",
          description: (
            <>
              <p>
              AER takes care of everything for you, including government-compliant warehousing and cutting-edge packaging.
              </p>
              <p>Our Value Added Services Include:</p>
              <ul>
                <li>Cold Chain Warehousing</li>
                <li>Cold chain packaging</li>
                <li>Cold Chain Storage</li>
                <li>Product Tracking and Traceability </li>
                <li>Quality Assurance Services</li>
                <li>Custom Packaging Solutions</li>
                <li>Regulatory Compliance</li>
                <li>Inventory Management</li>
              </ul>
            </>
          ),
          image: cold_chain_logistic_unknown,
        },
      ];

      const servicesData = [
        {
          title: "Track and Monitor",
          description:
            "Customize and check the visibility of your goods with our advanced monitoring technology.",
        },
        {
          title: "Globally Assured Services",
          description:
            "Efficient quality management system to ensure that your goods are transported with the best quality",
        },
        {
          title: "Cold Chain Packaging",
          description:
            "Leverage our passive and active cold chain packaging services for your goods and its secure transportation",
        },
        {
          title: "Cold Chain Storage",
          description:
            "Utilize our flexible and scalable global storage network for cold, frozen, and ice-cold",
        },
        {
          title: "Regulations Support",
          description:
            "Take advantage of our efficient compliance services and strong affiliations network",
        },
        {
          title: "Flexible Solutions",
          description:
            "Share your requirements and we will offer personalized and flexible solutions for your specific needs",
        },
        
      ];

  return (
    <section className='cold_chain_section'>
    <HeroSection
      backgroundImage={cold_chain_hero}
      title="Cold Chain Logistics"
      subtitle="Partner with leading cold chain solution experts to save your time and efforts  "
      buttonText="Contact Us !"
      buttonUrl="demo"
    />
    <TransportationServices services={toggleServices} />
    <AirFreightSolutions services={servicesData} />
    <LogisticsSolutionFooter
      title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
    />
  </section>
  )
}

export default ColdChainLogistics

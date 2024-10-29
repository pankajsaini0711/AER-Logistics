
import HeroSection from "../../components/hero-section/hero-section"
import LogisticsSolutionFooter from "../../components/logistic-solution-footer/logistic-solution-footer"
import image from './data/images/home page.jpg'
import OceanFreightSolution from "../../components/ocean-freight-solution/ocean-freight-solution";
import { FaBoxes } from 'react-icons/fa'; // Replace with your icons
import { SlLocationPin } from "react-icons/sl";
import { BsBox, BsInbox  } from "react-icons/bs";
import { FiAlertCircle,FiGrid } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import TransportationServices from "../../components/service-items/service-items";


import brokerimage from "../../components/service-items/images/us custom broker.jpg";
import domestictransportation from "../../components/service-items/images/domestic-transportation.jpg";
import oceanFreight from "../../components/service-items/images/ocean freight.jpg";
import airfreight from "../../components/service-items/images/air freight services.jpg";
import insurance from "../../components/service-items/images/cargo insurance.jpg";
import warehousemgmt from "../../components/service-items/images/warehouse management.jpg";
import ocean_freight_hero from "../../components/service-items/images/herosection/ocean_freight_hero.png";

import ocean_service_overview from "../../components/service-items/images/ocean-service-overview.png";
import ocean_service_why_choose from "../../components/service-items/images/ocean-service-why-choose.png";
import ocean_service_unknown from "../../components/service-items/images/ocean-service-unknown.png";



interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}

const OceanFreight = () => {

  const servicesData = [
    {
      icon: BiFileBlank,
      title: 'Licensed NVOCC',
      description: 'We offer shipment services through NVOCC Ocean Carrier',
    },
    {
      icon: BsInbox,
      title: 'Full Container Load/ Less Than Container Load',
      description: 'Avail full container or less than container load services',
    },
    {
      icon: SlLocationPin,
      title: 'Cross Dock Operations',
      description: 'We will directly transfer goods with minimal or no storage in between',
    },
    {
      icon: BsBox,
      title: 'Packaging and Crating',
      description: 'Careful preparation and protection of goods for transportation or storage',
    },
    {
      icon: FiAlertCircle,
      title: 'Project Cargo (OOG)',
      description: 'Meticulous planning and custom transport solutions for safe and efficient delivery worldwide',
    },
    {
      icon: FiGrid,
      title: 'Break Bulk',
      description: "Shipment of diverse commodities with specialized handling to ensure each item's safe delivery to its destination",
    }
  ];

  const toggleServices: Service[] = [
    {
      title: "",
      description:<>
      <p>Whether you're shipping thousands of TEUs or the occasional less than container load, when you partner with us, you'll enjoy access to:</p>
      <p>Direct services serving 100+ countries via the world's largest consolidation network</p>
      <p>Oversized, overweight, project and breakbulk cargo expertise</p>
      <p>Strong relationships with core and niche carriers</p>
      <p>End-to-end ocean shipping visibility</p>
      <p>24/7 customer support</p>
      <p>And much more!</p>
      </>,
      image: ocean_service_overview,
    },
    {
      title: "Why Choose AER?",
      description:<>
      <p>We are a licensed Non-Vessel Operating Common Carrier and Ocean Transportation Intermediary.</p>
      <p>With over 40 years of experience with ocean freight, we source predictably priced capacity throughout the year.</p>
      <p>As a result, we provide highly competitive rates and the flexibility to offer customized options that meet your requirements.</p>
      </>,
      image: ocean_service_why_choose,
    },
    {
      title: "",
      description:<>
      <p>Whether you need to ship standard container loads, oversized commodities, or other cargo, AER's ocean freight solutions have what you need:</p>
      <ul>
        <li>Ocean import and export services </li>
        <li>Full-container-load (FCL) and less than container load (LCL) options </li>
        <li>Transatlantic and transpacific expertise </li>
        <li>Foreign banking support </li>
        <li>Sight draft creation </li>
        <li>Legalization support </li>
        <li>Certificates of origin construction </li>
        <li>Letters of credit development </li>
        <li>Direct filing via the Automated Export System </li>
        <li>Containerization with reefer service </li>
        <li>Supplier consolidation </li>
        <li>Exclusive charters </li>
      </ul>
      </>,
      image: ocean_service_unknown,
    },
  ];
  return (
    <section className="ocean_freight_section">
      <HeroSection
        backgroundImage={ocean_freight_hero}
        title="Ocean Freight"
        subtitle="Navigating the Waves of Global Trade"
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
       <TransportationServices services = {toggleServices} />
      <OceanFreightSolution services={servicesData} />
      <LogisticsSolutionFooter
        title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
      />
    </section>
  )
}

export default OceanFreight
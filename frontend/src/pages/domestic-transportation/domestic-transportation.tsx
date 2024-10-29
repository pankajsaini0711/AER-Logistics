
import DomesticTransportationServices from "../../components/domestic-transportation-services/domestic-transportation-services"
import HeroSection from "../../components/hero-section/hero-section"
import LogisticsSolutionFooter from "../../components/logistic-solution-footer/logistic-solution-footer"
import {FiInfo, FiClock, FiBox, FiTruck, FiThermometer, FiGlobe, FiUser, FiAlertCircle, FiDatabase, FiLink   } from 'react-icons/fi';
import { BsCursor } from "react-icons/bs";
import { PiSuitcase } from "react-icons/pi";
import TransportationServices from "../../components/service-items/service-items";


import domestic_ground_hero from "../../components/service-items/images/herosection/domestic_ground_hero.png";
import domestic_ground_overview from "../../components/service-items/images/domestic-service-overview.png";
import domestic_ground_why_choose from "../../components/service-items/images/domestic-service-why-choose.png";
import domestic_ground_unknown from "../../components/service-items/images/domestic-service-unknown.png";

interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}

const DomesticTransporation = () => {
const servicesTitle = {title:"We Offer Solutions For Every Requirement"}
const services = [
  {
    icon: FiClock,
    title: 'Time Critical Freight Solution ',
    description: 'Swift and Reliable Delivery for Urgent Shipments.',
  },
  
  {
    icon: FiInfo,
    title: 'Expedite Shipments Distribution',
    description: 'Rapid Distribution Solutions for important Shipments.',
  },
  {
    icon: FiTruck,
    title: 'Full Truckload / Less than Truckload',
    description: 'We offer complete truckload or multiple shipments in one truck.',
  },
  {
    icon: FiBox,
    title: 'Box-trucks, Sprinter Vans and Cargo Vans',
    description: 'We use versatile vehicles to transport your goods.',
  },
  {
    icon: FiThermometer,
    title: 'Temperature Controlled Services',
    description: 'Ensure goods are transported under regulated conditions.',
  },
  {
    icon: FiGlobe,
    title: 'White Gloves',
    description: 'Specialized care and attention for handling fragile goods.',
  },
  {
    icon: BsCursor,
    title: '24x7 Freight Tracking Visibility',
    description: 'Track and monitor your freight shipments from any place',
  },
  {
    icon: FiDatabase,
    title: 'Permitted Loads',
    description: 'Transportation service with legal permitted loads',
  },
  {
    icon: FiUser,
    title: 'Customized Routing Solution',
    description: 'Best routes to optimize efficiency and meet specific logistical needs.',
  },
  {
    icon: PiSuitcase,
    title: 'Heavy Haul',
    description: 'Ship your Heavy loads that require specialized equipment',
  },
  {
    icon: FiLink,
    title: 'Integration with Expedite Service',
    description: 'Partnered with expedite service to ensure on time delivery',
  },
  {
    icon: FiAlertCircle,
    title: 'Hazmat',
    description: 'Special handling, packaging and labeling services',
  },
];


const toggleServices: Service[] = [
  {
    title: "Overview",
    description:<>
    <p>Having a transportation strategy that adapts to the ever changing disruptions in market conditions is pivotal.</p>
    <p>Whether you're looking to find more efficient routes, manage volume fluctuations or uncover cost savings, we have solutions to match your business.</p>
    </>,
    image: domestic_ground_overview,
  },
  {
    title: "Why Choose AER?",
    description:<>
    <p>Whether you are using company assets or our vetted network of over 10,000 carriers, we transport a wide range of products including oversized, hazardous, bulk, temperature-controlled, packaged and other types of goods.</p>
    <p>Take full advantage of our extensive local, regional, and national ground transportation networks.</p>
    </>,
    image: domestic_ground_why_choose,
  },
  {
    title: "",
    description:<>
    <p>Our high-capacity and flexible modes of road transportation ensure the safe, secure, fast and cost-effective delivery of your freight.</p>
    <p>Our experienced and cutting-edge technology will enhance your day-to-day transport operations and visibility.</p>
    </>,
    image: domestic_ground_unknown,
  },
];


  return (
    <section className="domestic_ground_section">
    <HeroSection
      backgroundImage={domestic_ground_hero}
      title="Domestic Ground"
      subtitle="Crossing the roads and connecting you globally"
      buttonText="Contact Us !"
      buttonUrl="demo"
    />
    <TransportationServices services = {toggleServices} />
    <DomesticTransportationServices  services ={services}/>
    <LogisticsSolutionFooter
      title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
    />
  </section>
  )
}

export default DomesticTransporation
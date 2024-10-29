import HeroSection from "../../components/hero-section/hero-section";
import LogisticsSolutionFooter from "../../components/logistic-solution-footer/logistic-solution-footer";
// import image from './data/images/home page.jpg'
import { FaBoxes } from "react-icons/fa"; // Replace with your icons
import { SlLocationPin } from "react-icons/sl";
import { BsBox, BsInbox } from "react-icons/bs";
import { FiAlertCircle, FiPackage,FiMap ,FiInfo,FiMinimize2,FiMonitor,FiRepeat,FiShare,FiMapPin,FiTruck } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";

import TransportationServices from "../../components/service-items/service-items";

import brokerimage from "../../components/service-items/images/us custom broker.jpg";
import domestictransportation from "../../components/service-items/images/domestic-transportation.jpg";
import oceanFreight from "../../components/service-items/images/ocean freight.jpg";
import airfreight from "../../components/service-items/images/air freight services.jpg";
import insurance from "../../components/service-items/images/cargo insurance.jpg";
import warehousemgmt from "../../components/service-items/images/warehouse management.jpg";
import ware_housing_hero from "../../components/service-items/images/herosection/ware_housing_hero.png";
import DomesticTransportationServices from "../../components/domestic-transportation-services/domestic-transportation-services";
import werehouse_service_overview from "../../components/service-items/images/werehouse-service-overview.png";
import warehouse_service_why_choose from "../../components/service-items/images/warehouse-service-why-choose.png";
import warehouse_service_unknown from "../../components/service-items/images/warehouse-service-unknown.png";



interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}

const WarehouseManagement = () => {
// const servicesTitle = {title:"We Offer Solutions For Every Requirement"}

  const servicesData = [
    {
      icon: FiInfo,
      title: "Full Warehousing Services",
      description: "Complete warehouse for your goods with ensured safe and reliable management",
    },
    {
      icon: FiPackage,
      title: "Packing and Assembly",
      description: "Expert packing and assembly services ensuring precision and efficiency for your products",
    },
    {
      icon: FiMap,
      title: "Distribution and Fulfilment Services",
      description:
        "Storage, handling, and shipping of products from suppliers to customers, ensuring efficient order ",
    },
    {
      icon: FiMinimize2,
      title: "Cargo consolidation",
      description:
        "We combine multiple smaller shipments into a single larger shipment, optimizing space and reducing costs ",
    },
    {
      icon: FiMonitor,
      title: "Warehouse Management System",
      description:
        "Software to oversee and optimize your warehouse operations.",
    },
    {
      icon: FiRepeat,
      title: "Inbound & Outbound Processing",
      description:
        "Receive goods from suppliers and ship them to customers with optimized processing",
    },
    {
      icon: FiShare,
      title: "Receive, Store & Pack",
      description:
        "Manage the essential warehouse tasks of accepting goods, storing them, and preparing for shipment easily",
    },
    {
      icon: FiMapPin,
      title: "Inventory Tracking",
      description:
        "Ensure real-time monitoring of inventory items to view accurate insights into their location and current status",
    },
    {
      icon: FiTruck,
      title: "Consolidation & De-consolidation",
      description:
        "Consolidate or de-consolidate shipments for efficient distribution",
    },
  ];

  const toggleServices: Service[] = [
    {
      title: "Overview",
      description: (
        <>
          <p>Today’s supply chains are under enormous stress.</p>
          <p>
            Between JIT manufacturing requiring leaner and leaner inventories
            and the fast growing sector of e-commerce pressuring businesses to
            deliver goods faster and faster, companies need a reliable partner
            that can fulfill all of their warehouse needs.
          </p>
          <p>
            From short-term storage to virtual warehousing, delegating your
            warehouse management means trusting a third party with your bottom
            line. That's why it's important to find the right partner.
          </p>
        </>
      ),
      image: werehouse_service_overview,
    },
    {
      title: "Why Choose AER?",
      description: (
        <>
          <p>
            AER Logistics warehousing services streamline your supply chain and
            optimize your logistics operations.{" "}
          </p>
          <p>
            Our solutions provide a secure, scalable, and flexible storage
            environment for your inventory.{" "}
          </p>
          <p>
            AER will design and implement logistics solutions customized to your
            exact needs, including production, warehousing, fulfillment,
            distribution to the final customer, and reverse logistics.
          </p>
        </>
      ),
      image: warehouse_service_why_choose,
    },
    {
      title: "",
      description: (
        <>
          <p>
            Our international warehousing team is dedicated to providing
            scalable, adaptable warehouse management solutions to businesses so
            they can increase productivity. These solutions include:
          </p>
          <ul>
            <li>Inventory Management</li>
            <li>Temporary Staging</li>
            <li>Assembly, Kitting and Packing</li>
            <li>Virtual warehousing</li>
            <li>Pick and Pack</li>
            <li>Warehouse space in various locations</li>
            <li>Temperature-controlled facilities</li>
            <li>Bonded facilities</li>
            <li>Long- and short-term storage</li>
            <li>Risk management expertise</li>
            <li>Cross Docking 24x7</li>
          </ul>
        </>
      ),
      image: warehouse_service_unknown,
    },
  ];
  return (
    <section className="warehouse_managment">
      <HeroSection
        backgroundImage={ware_housing_hero}
        title="Warehousing"
        subtitle="Trust AER Logistics for your Warehouse Managent because we can handle it !"
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      
      <TransportationServices services={toggleServices} />
    <DomesticTransportationServices services ={servicesData}/>

      <LogisticsSolutionFooter
        title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
      />
    </section>
  );
};

export default WarehouseManagement;

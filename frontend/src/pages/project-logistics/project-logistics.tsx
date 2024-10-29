import React from "react";
import HeroSection from "../../components/hero-section/hero-section";
import TransportationServices from "../../components/service-items/service-items";
import LogisticsSolutionFooter from "../../components/logistic-solution-footer/logistic-solution-footer";
import domestictransportation from "../../components/service-items/images/domestic-transportation.jpg";
import oceanFreight from "../../components/service-items/images/ocean freight.jpg";
import airfreight from "../../components/service-items/images/air freight services.jpg";
import project_logistic_hero from "../../components/service-items/images/herosection/project_logistic_hero.png";
import AirFreightSolutions from "../../components/air-freight-solution/air-freight-solution";
import { FiMinimize2 } from "react-icons/fi";
import { PiGasPump,PiSolarPanel,PiBatteryCharging,PiTrafficCone ,PiCity,PiBoat,PiLightbulbFilament,PiMoney} from "react-icons/pi";
import project_logistic_overview from "../../components/service-items/images/project_logistic_overview.png";
import project_logistic_why_choose from "../../components/service-items/images/project_logistic_why_choose.png";
import project_logistic_unknown from "../../components/service-items/images/project_logistic_unknown.png";
import DomesticTransportationServices from "../../components/domestic-transportation-services/domestic-transportation-services";




interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}
const ProjectLogistics = () => {
  const servicesData = [
    {
        icon: PiGasPump,
      title: "Oil and Gas",
      description:
        "Our worldwide resources offer services for the upstream, midstream, downstream sectors, and site restock solutions, ensuring the success of your inland or overseas Oil and Gas projects.",
    },
    {
        icon: PiSolarPanel,
      title: "Renewable Energy",
      description:
        "We provide you end to end logistics solutions for all renewable energy industry including the wind, solar and hydro power plants.",
    },
    {
        icon: PiBatteryCharging,
      title: "Power and Industry Specific ",
      description:
        "We provide you with custom technical and connectivity solutions to power your industrial project while optimizing your costs, lowering your risks, and boosting the safety of your operations.",
    },
    {
        icon: PiTrafficCone,
      title: "Mining Projects",
      description:
        "From mine development, resupply, or closure, commodities import and export, to managing logistics   from a remote location, we provide highly specialized end-to-end transport solutions for your mining business.",
    },
    {
        icon: PiCity,
      title: "Giga Factory",
      description:
        " Our group of professionals provide improved supervision and flexibility while decreasing costs and managing risks to ensure the successful and timely completion of any construction project.",
    },
    {
        icon: PiBoat,
      title: "Marine Logistics",
      description:
        "From freight forwarding to shore base administration, we provide comprehensive marine logistics services. GEODIS's reliable vessel tracking system is a highly valued feature. ",
    },
    {
        icon: PiLightbulbFilament,
      title: "Management of Material and Energy",
      description:
        "Our experts will manage the material, energy solutions, warehouse and laydown, dedicated heavy-duty warehouses, PO, rigging and heavy movement for your projects.",
    },
    {
        icon: PiMoney,
      title: "Ocean and Air Chartering",
      description:
        "You can utilize the high capacity transportation services offered by our Air and Ocean Chartering Teams and ensure on-time delivery.",
    },
  ];


  const toggleServices: Service[] = [
    {
      title: "Overview",
      description: (
        <>
          <p>
            Stop worrying about the transportation complexities of over-sized
            and heavy cargo, when you can connect with AER Logistics for your
            projects.{" "}
          </p>
          <p>
            Trust AER Logistics with your project if you need to transport
            out-of-gauge, extraordinary, bulky, or heavy freight, or if you have
            specific engineering needs.
          </p>
          <p>
            We have the expertise and resources to design and implement the most
            effective end-to-end customized and multi-modal transportation
            solutions.
          </p>
        </>
      ),
      image: project_logistic_overview,
    },
    {
      title: "Why Choose AER?",
      description: (
        <>
          <p>
            We have highly trained professionals including project managers,
            pricing managers, project specific engineers and ground crews to
            ensure that your projects are delivered on time and on budget.
          </p>
          <p>
              With all the necessary assets and a large network of vendors and
            partners, AER Logistics ensures the success of your project
            regardless of your location. 
          </p>
          <p>
            This is why Fortune 500 companies trust AER Logistics for their
            special projects.
          </p>
        </>
      ),
      image: project_logistic_why_choose,
    },
    {
      title: "",
      description: (
        <>
          <p>
            Best in class and safe value added project logistics solutions of
            AER Logistics include:
          </p>
          <ul>
            <li>Renewable Energy</li>
            <li>Oil and Gas Energy</li>
            <li>Capital Projects</li>
            <li>Chartering </li>
            <li>Energy Solutions</li>
            <li>Subcontractor Management</li>
            <li>Marine Logistics</li>
            <li>Transport Engineering </li>
            <li>Project Turnkey Contracts</li>
          </ul>
        </>
      ),
      image: project_logistic_unknown,
    },
  ];


  return (
    <section className="project_logistic_section">
      <HeroSection
        backgroundImage={project_logistic_hero}
        title="Project Logistics"
        subtitle="We deliver your unique and complex projects through our innovative project logistics solutions."
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      <TransportationServices services={toggleServices} />
      {/* <AirFreightSolutions services={servicesData} /> */}
    <DomesticTransportationServices services ={servicesData}/>

      <LogisticsSolutionFooter
        title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
      />
    </section>
  );
};

export default ProjectLogistics;

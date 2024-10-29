import AirFreightSolution from "../../components/air-freight-solution/air-freight-solution";
import HeroSection from "../../components/hero-section/hero-section";
import LogisticsSolutionFooter from "../../components/logistic-solution-footer/logistic-solution-footer";
import image from "./data/images/home page.jpg";
import TransportationServices from "../../components/service-items/service-items";

// import brokerimage from "../../components/service-items/images/us custom broker.jpg";
import air_service_overview from "../../components/service-items/images/air-service-overview.png";
import air_service_unknown from "../../components/service-items/images/air-service-unknown.png";
import air_service_why_choose from "../../components/service-items/images/air-service-why-choose.png";
import air_freight_hero from "../../components/service-items/images/herosection/air_freight_hero.png";



interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}

const AirFreight = () => {
  const servicesData = [
    {
      title: "Global Courier ",
      description:
        "Diverse courier solutions to connect your business worldwide",
    },
    {
      title: "Domestic Air Freights",
      description:
        "Fast and reliable air freight solutions for seamless domestic logistics ",
    },
    {
      title: "Expedite Air",
      description:
        "We offer expedited air freight services for efficient transportation of your goods",
    },
    {
      title: "International Couriers Services",
      description:
        "Global logistics solutions for swift, secure, and reliable delivery of packages",
    },
    {
      title: "Deconsolidation (LTL) Air Freight",
      description:
        "Efficient handling of consolidated shipments for cost-effective and flexible air freight solutions",
    },
    {
      title: "Standard Air",
      description:
        "Reliable and timely air freight services for various cargo needs",
    },
    {
      title: "Priority Air Service",
      description:
        "Priority air services designed for swift deliveries with top-notch reliability",
    },
    {
      title: "Charter Service",
      description:
        "We provide transport options for urgent or specialized cargo needs",
    },
    {
      title: "Next Day Air",
      description:
        "Guaranteed fast and efficient air freight service ensuring delivery within the next business day",
    },
  ];

  const toggleServices: Service[] = [
    {
      title: "",
      description: (
        <>
          <p>
            Although global capacity and demand can change instantly, we are
            committed to provide stable, reliable services that maintain your
            supply chain’s integrity. 
          </p>
          <p>
            When you need reliable air freight to achieve your business and
            sustainability goals, we can support you with our wide range of
            services making sure your shipments reach their destination quickly,
            safely and in perfect condition.
          </p>
        </>
      ),
      image: air_service_overview,
    },
    {
      title: "Why Choose AER?",
      description: (
        <>
          <p>
            Global or regional - when you need a fast airfreight service, AER
            has a range of products and a choice of speeds to precisely match
            your requirements. 
          </p>
          <p>
            We have a team of experienced airfreight experts standing by to work
            with you to ensure your goods are delivered on time and in perfect
            condition.
          </p>
        </>
      ),
      image: air_service_why_choose,
    },
    {
      title: "",
      description: (
        <>
          <p>Core & Value-Added Services.</p>
          <ul>
            <li>General cargo consolidation</li>
            <li>Express / time sensitive airfreight</li>
            <li>Direct airline services</li>
            <li>Peak period capacity solutions</li>
            <li>Temperature control</li>
            <li>Sea+Air / Air+Sea</li>
            <li>Charter</li>
            <li>Oversize</li>
            <li>Dangerous Goods</li>
          </ul>
        </>
      ),
      image: air_service_unknown,
    },
  ];

  return (
    <section className="air-freight-section">
      <HeroSection
        backgroundImage={air_freight_hero}
        title="Air Freight"
        subtitle="Trust AER Logistics to deliver your goods quickly, safely, and in perfect condition."
        buttonText="Contact Us !"
        buttonUrl="demo"
      />
      <TransportationServices services={toggleServices} />
      <AirFreightSolution services={servicesData} />
      <LogisticsSolutionFooter
        title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
      />
    </section>
  );
};

export default AirFreight;

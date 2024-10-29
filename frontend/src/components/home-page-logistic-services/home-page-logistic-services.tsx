import './home-page-logistic-services.scss';
import domestictransportation from "./images/domestic-transportation.jpg";
import AirFreight from './images/air_freight.svg';
import cold_chain from './images/cold_chain.svg';
import domestic_ground from './images/domestic_ground.svg';
import ocean_freight from './images/ocean_freight.svg';
import project_logistics from './images/project_logistics.svg';
import transportation_technology from './images/transportation_technology.svg';
import warehousing from './images/warehousing.svg';

const servicesData = [
  {
    title: "Air Freight",
    description: "Reliable and affordable Air Freight services for your domestic and international shipping needs.",
    image: AirFreight
  },
  {
    title: "Ocean Freight",
    description: "Best solutions for transporting cargo across seas, ensuring timely and secure delivery",
    image: ocean_freight
  },
  {
    title: "Domestic Ground",
    description: "Efficient domestic transportation services to ensure on-time delivery",
    image: domestic_ground
  },
  {
    title: "Warehousing Management",
    description: "Expert warehouse management services for optimized storage and inventory control",
    image: warehousing
  },
  {
    title: "Cold Chain Logistics",
    description: "We offer diverse quality services, from specialized packaging and real-time monitoring to temperature-regulated transportation",
    image: cold_chain
  },
  {
    title: "Project Logistics",
    description: "We handle every detail, from planning and execution to delivery, ensuring timely and efficient project-specific requirements",
    image: project_logistics
  },
  {
    title: "Transportation Technology",
    description: "We provide various transportation technology services to ensure faster deliveries and improved services",
    image: transportation_technology
  }
];

const HomePageLogisticServices = () => {
  return (
    <div className="logistics-services">
      <h1 className="logistics-services__title">A QUICK GLIMPSE INTO AER LOGISTICS</h1>
      <div className="logistics-services__flex-container">
        {servicesData.map((service, index) => (
          <div key={index} className="logistics-services__card">
            <img src={service.image} alt={service.title} className="logistics-services__card-image" />
            <div className="logistics-services__card-overlay">
              <h2 className="logistics-services__card-title">{service.title}</h2>
              <p className="logistics-services__card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageLogisticServices;

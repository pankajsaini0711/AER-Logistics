import "./service-items.scss";

interface Service {
  title: string;
  description: string | React.ReactElement;
  image: string;
}

interface ServiceItemProps extends Service {
  isReversed: boolean;
}

interface TransportationServicesProps {
  services : Service[]
}


const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  image,
  isReversed,
}) => (
  <div className={`service-item ${isReversed ? "reversed" : ""}`}>
    <div className="service-feature-image">

    <img src={image} alt={title} className="service-items-image" />
    </div>
    <div className="service-info">
      <h2>{title}</h2>
      {description}
      {title === "Warehouse Management" && (
        <button className="learn-more">Learn More</button>
      )}
      {(title === "Cargo Insurance" ||
        title === "Licensed US Customs Broker") && (
        <>
          <button className="learn-more">Learn More</button>
          <button className="get-a-quote">Get a Quote</button>
        </>
      )}
    </div>

  </div>
);

const TransportationServices: React.FC<TransportationServicesProps> = ({services}) => (
  <div className="transportation-services container">
    {services.map((service, index) => (
      <ServiceItem
        key={service.title}
        {...service}
        isReversed={index % 2 == 0}
      />
    ))}
  </div>
);
export default TransportationServices;

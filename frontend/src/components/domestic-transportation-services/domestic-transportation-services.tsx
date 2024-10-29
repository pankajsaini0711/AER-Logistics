import React from 'react';
import './domestic-transportation-services.scss';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
}

interface DomesticTransportationServicesProps {
  services: Service[];
}

const DomesticTransportationServices: React.FC<DomesticTransportationServicesProps> = ({ services }) => {
  
  return (
    <div className="services-container">
      <h2>We Offer Solutions For Every Requirement</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-icon">
              <service.icon size={40} color='black' />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DomesticTransportationServices;
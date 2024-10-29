import React from 'react';
import './ocean-freight-solution.scss';
import { IconType } from 'react-icons';

interface Service {
    icon: IconType;
    title: string;
    description: string;
  }
  
  interface OceanFreightSolutionProps {
    services: Service[];
  }
const OceanFreightSolution: React.FC<OceanFreightSolutionProps> = ({ services }) => {
    
  return (
    <div className="service-list ocean-service container ">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon-container">
            <service.icon size={32} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OceanFreightSolution;

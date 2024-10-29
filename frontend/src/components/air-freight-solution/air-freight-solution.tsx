import React from 'react';
import './air-freight-solution.scss'

interface ServiceProps {
  title: string;
  description: string;
}

const LogisticsService: React.FC<ServiceProps> = ({ title, description }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

interface AirFreightSolutionsProps {
  services: ServiceProps[];
}

const AirFreightSolutions: React.FC<AirFreightSolutionsProps> = ({ services }) => {
  return (
    <div className="air-freight-logistics-services">
    <h2>Navigating Global Waters, Seamlessly!</h2>  
    <div className="services-flex">
      {services.map((service, index) => (
        <LogisticsService
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </div>
  );
};

export default AirFreightSolutions
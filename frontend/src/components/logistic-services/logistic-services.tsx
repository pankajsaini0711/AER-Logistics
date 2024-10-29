import React from 'react';
import './logistic-services.scss';
import shipImage from './data/images/ship.jpg';
import roadImage from './data/images/road.jpg';
import warehouseImage from './data/images/warehouse.jpg';

const LogisticsServices: React.FC = () => {
  return (
    <section className="logistics-services">
      <h2>Best In Class Logistics Services</h2>
      <p>
        Take a look at our modern and reliable fleet of vehicles that are ready to transport your goods safely
        and efficiently.
      </p>
      <div className="service-images">
        <img src={shipImage} alt="Ocean freight" className="service-image" />
        <img src={roadImage} alt="Road transport" className="service-image" />
        <img src={warehouseImage} alt="Warehousing" className="service-image" />
      </div>
    </section>
  );
};

export default LogisticsServices;
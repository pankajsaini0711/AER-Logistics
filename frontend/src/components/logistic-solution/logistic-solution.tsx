import React from 'react';
import './logistic-solution.scss';
import { FaBuilding, FaTruck, FaFileAlt, FaLayerGroup } from 'react-icons/fa';

const LogisticSolutions: React.FC = () => {
  const solutions = [
    {
      icon: <FaBuilding />,
      title: "Efficient Transportation",
      description: "Delivering your goods on time, every time"
    },
    {
      icon: <FaTruck />,
      title: "Express Shipping",
      description: "Efficient ocean freight solutions for cost-effective transportation of goods."
    },
    {
      icon: <FaFileAlt />,
      title: "Efficient Logistics Solutions",
      description: "Secure ground transportation options for domestic and international shipments."
    },
    {
      icon: <FaLayerGroup />,
      title: "Diverse services",
      description: "We provide quality and diversity with our services"
    }
  ];

  return (
    <section className="logistic-solutions">
      <h2>One Stop Solution To All Logistic Needs</h2>
      <div className="solutions-container">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-item">
            <div className="solution-icon">{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogisticSolutions;
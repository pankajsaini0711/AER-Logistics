import React from "react";
import "./industry.scss";
import { IconType } from "react-icons";

interface keyPoint {
  icon: IconType;
  title: string;
  description: string;
}

interface KeyPointProp {
  keyPointData: keyPoint[];
}
const KeyPoint: React.FC<KeyPointProp> = ({ keyPointData }) => {
  return (
    <div className="key-point-parent">
      <section className="key-point-section">
        {keyPointData.map((keyPoint, index) => (
          <div className="" key={index}>
            <div className="icon-container">
              <keyPoint.icon size={32} />
            </div>
            <div className="card-content">
              <p className="card-description">{keyPoint.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default KeyPoint;

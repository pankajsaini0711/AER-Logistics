import React from 'react';
import './industry.scss';

export interface IndustryInformationProps {
  description?: React.ReactElement;

}

const IndustryInformation: React.FC<IndustryInformationProps> = ({
    description
}) => {
  return (
    <section >
      <div className="industry-information">
        <h2>Overview</h2>
        <div className='industry-description'>

            {description}
        </div>
      </div>
    </section>
  );
};

export default IndustryInformation;
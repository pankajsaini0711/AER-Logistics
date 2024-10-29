import './accreditations.scss';
import defence from './data/images/defence.png';
import minority from './data/images/minority.png';
import wca from './data/images/wca.png';
import elite from './data/images/elite.png';

const logos = [
  { src: defence, alt: 'Defense Logistics Agency' },
  { src: minority, alt: 'National Minority Supplier Development Council' },
  { src: wca, alt: 'WCA Leading the World in Logistics Partnering' },
  { src: elite, alt: 'Elite Global Logistics Network' },
];

const AccreditationsAndMemberships = () => {
  return (
    <div className="accreditations-memberships">
      <h2>Accreditations and Memberships</h2>
      <p>
        Become a member today and gain access to our state-of-the-art warehouses for efficient storage
        and management of your goods.
      </p>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default AccreditationsAndMemberships;

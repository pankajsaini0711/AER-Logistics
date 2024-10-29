import React from 'react';
import './homepage-contact-us.scss';
import footerImage from '../home-page-logistic-services/images/footer_image.svg';
interface HomePageContactUsProps {
  title: string;
  subtitle?: string;
  CTAText?: string;
  CTALink?: string;
}

const HomePageContactUs: React.FC<HomePageContactUsProps> = ({
  title,
  subtitle,
  CTAText = "Contact Us !",
  CTALink = "#"
}) => {
  return (
    <div className="banner-container">
      <img
        src={footerImage}
        alt="Logistics port at sunset"
        className="banner-image"
      />
      <div className="content-overlay">
        <h1 className="banner-title">{title}</h1>
        {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        <a href={CTALink} className="contact-button">{CTAText}</a>
      </div>
    </div>
  );
};

export default HomePageContactUs;

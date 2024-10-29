import React from 'react';
import './hero-section.scss';
import VideoPlayer from '../video-player/video-player';

export interface HeroSectionProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  title: string;
  subtitle: string| React.ReactElement;
  buttonText: string;
  buttonUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundVideo,
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonUrl
}) => {
  return (
    <section className={`hero-section ${backgroundImage ? 'with-image' : 'with-video'}`}>
      {backgroundVideo && <VideoPlayer videoSrc={backgroundVideo} />}
      {backgroundImage && <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>}
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href={buttonUrl} className="hero-button">{buttonText}</a>
      </div>
    </section>
  );
};

export default HeroSection;
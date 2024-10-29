import HeroSection from "../../components/hero-section/hero-section";
import HomePageLogisticServices from "../../components/home-page-logistic-services/home-page-logistic-services";
import HomePageContactUs from "../../components/homepage-contact-us/homepage-contact-us";
import homePageVideo from "./data/videos/home-video.mp4"
const HomePage = () => {
  return (
    <>

      <HeroSection
       backgroundVideo={homePageVideo}
        title="AER LOGISTICS"
        subtitle="Anywhere , everywhere responsibly"
        buttonText="Why AER?"
        buttonUrl="demo"
      />
     <HomePageLogisticServices />
      <HomePageContactUs 
        title="AER LOGISTICS"
        subtitle="Connect with us for best Logistics services"
        CTAText = 'Contact Us !'
        CTALink="https://example.com/quote"
      />
    </>
  );
};

export default HomePage;

import HeroSection from "../../../components/industry/hero-section";
// import domestic_ground_hero from "../../components/service-items/images/herosection/domestic_ground_hero.png";
import ShowFreightImage from "../hero-section-images/industry-hero-show.png"

import IndustryInformation from "../../../components/industry/information";
import KeyPoint from "../../../components/industry/key-points";
import { PiUserCircleCheck,PiTruckTrailer ,PiChatsCircle ,PiClockUser ,PiBus,PiBookOpenText  } from "react-icons/pi";
import LogisticsSolutionFooter from "../../../components/logistic-solution-footer/logistic-solution-footer";
const description:React.ReactElement = 
        <>
            <p>Our show freight shipping solutions bring simplicity, precision, and cost-savings to the total process, operating in both the domestic and international trade show industry. </p>

            <p>We provide a one-stop logistical platform and we cooperate with both event organizers and exhibitors.</p>

            <p>AER Logistics provides a long list of turnkey services that include trade show shipping, installation, and storage. We are here to provide customized solutions that ensure your trade show is a success. </p>

            <p>Our trade show shipping services include specialized freight logistics to transport your exhibit and comprehensive warehousing before and after the event.</p>

        </>

const ShowFreight = () => {
  const keyPointData = [
    {
      icon: PiUserCircleCheck,
      title: 'Licensed NVOCC',
      description: 'Skilled trade show freight agents that understand trade show logistics, handling everything from paperwork to acting as mediators between the general services contractor, the carrier, and the exhibitor.',
    },
    {
      icon: PiTruckTrailer,
      title: 'Licensed NVOCC',
      description: 'Coordinated through skilled and trusted carriers who take responsibility in guaranteeing that your exposition materials arrive and leave the show on schedule.',
    },
    {
      icon: PiChatsCircle,
      title: 'Licensed NVOCC',
      description: 'Our support team is here 24/7 to assist you with fast, reliable solutions to any issue you encounter.',
    },
    {
      icon: PiClockUser,
      title: 'Licensed NVOCC',
      description: 'Comprehensive understanding of trade show setup and yard marshaling processes.',
    },
    {
      icon: PiBus,
      title: 'Licensed NVOCC',
      description: 'A personalized shipment coordinator to update you on the progress of your shipment throughout the process.',
    },
    {
      icon: PiBookOpenText,
      title: 'Licensed NVOCC',
      description: 'We assist our customers with the essential papers, such as the Bill of Lading (BOL) or Material Handling Agreement (MHA), to ensure the successful movement of their trade show items.',
    },
    
]
  return (
    <section className="show-freight-section">


    <HeroSection
      backgroundImage={ShowFreightImage}
      title="Show Freight"
      subtitle="Let the experts in event show transportation make your trade show a huge success."
      buttonText="Contact Us !"
      buttonUrl="demo"
    />
    <IndustryInformation description={description}/>
    <KeyPoint keyPointData={keyPointData}/>
    <LogisticsSolutionFooter
        title="AER Logistics: ANYWHERE, EVERYWHERE RESPONSIBLY!"
      />
    </section>

  );
};

export default ShowFreight;

import React from 'react';
// import './logistic-solution-footer.scss';

interface IndustryFooterInfoProps {
    title: string;
     backgroundImage?: string;

    // subtitle?: string;
    // quoteText?: string;
    // learnMoreText: string;
    // quoteLink?: string;
    // learnMoreLink: string;
}

// const IndustryFooterInfo: React.FC<IndustryFooterInfoProps> = ({ title, subtitle, quoteText, learnMoreText, quoteLink, learnMoreLink }) => {
  const IndustryFooterInfo: React.FC<IndustryFooterInfoProps> = ({ title}) => {
  // return (
  //   <div className="logistics-container">
  //     <h1>{title}</h1>
  //     {subtitle &&  <p>{subtitle}</p>}
  //     <div className="buttons">
  //       {quoteText && quoteLink &&  <a href={quoteLink} className="quote-button">{quoteText}</a>}
  //       <a href={learnMoreLink} className="learn-more-button">{learnMoreText}</a>
  //     </div>
  //   </div>
  // );
  return (
    <div className="logistics-container">
      <h1>{title}</h1>
    </div>
  );
};

export default IndustryFooterInfo;

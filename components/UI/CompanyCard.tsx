import { FC } from 'react';
import './ui.css';
import Image from 'next/image';

interface CompanyCardProps {
  logoSrc: string;
  about: string;
  websiteUrl: string;
  foundedDate: string;
  founders: string[];
  stageInvested: string;
  sector: string;
  coInvestors: string[];
  padding?: string;
  paddingBottom?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

  // const logoStyle: React.CSSProperties = {
  //   width: '100%',
  //   height: '100%',
  //   objectFit: 'contain'
  //   // position: ''
  // };
  
  // const detailsStyle: React.CSSProperties = {
  //   display: 'none',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   background: 'rgba(255, 255, 255, 0.9)',
  //   zIndex: 10,
  //   padding: '10px',
  //   boxSizing: 'border-box',
  //   overflow: 'auto',
  // };

const CompanyCard: FC<CompanyCardProps> = ({
  logoSrc,
  about,
  websiteUrl,
  foundedDate,
  founders,
  stageInvested,
  sector,
  coInvestors,
  padding,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight
}) => {

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: '165px',
    height: '150px',
    padding: padding,
    paddingBottom: paddingBottom,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight
  };

  const imageWrapperStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={cardStyle} className="company-card-size">
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer" style={{position: 'relative'}}>
        <div style={imageWrapperStyle}>
          <Image 
            src={logoSrc} 
            alt="Company Logo" 
            width={165} // Specify width
            height={150} // Specify height
            style={{objectFit: 'contain'}}
            className="company-logo-color"
          />
        </div>
      </a>
    </div>
  );
};

export default CompanyCard;

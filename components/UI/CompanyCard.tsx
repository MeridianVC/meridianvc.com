import { FC } from 'react';
import './ui.css';

interface CompanyCardProps {
  logoSrc: string;
  about: string;
  websiteUrl: string;
  foundedDate: string;
  founders: string[];
  stageInvested: string;
  sector: string;
  coInvestors: string[];
}

const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: '150px',
    height: '150px',
  };
  
  const logoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    border: '2px solid transparent',
  };
  
  const detailsStyle: React.CSSProperties = {
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(255, 255, 255, 0.9)',
    zIndex: 10,
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto',
  };

const CompanyCard: FC<CompanyCardProps> = ({
  logoSrc,
  about,
  websiteUrl,
  foundedDate,
  founders,
  stageInvested,
  sector,
  coInvestors,
}) => {

  return (
    <div style={cardStyle} className="company-card-size">
      <img src={logoSrc} alt="Company Logo" style={logoStyle} className="company-logo-color"/>
      <div style={detailsStyle}>
        <div><strong>About:</strong> {about}</div>
        <div><strong>Visit Website:</strong> <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Link</a></div>
        <div><strong>Founded:</strong> {foundedDate}</div>
        <div><strong>Founders:</strong> {founders.join(', ')}</div>
        <div><strong>Stage Invested:</strong> {stageInvested}</div>
        <div><strong>Sector:</strong> {sector}</div>
        <div><strong>Co-investors:</strong> {coInvestors.join(', ')}</div>
      </div>
    </div>
  );
};

export default CompanyCard;

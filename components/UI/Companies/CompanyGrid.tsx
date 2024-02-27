import { FC } from 'react';
import companies from '@/mockDatabase/companies';
import CompanyCard from './CompanyCard'; // Import the CompanyCard component

const gridStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 'clamp(10px, 5vw, 50px)',
  margin: '0 clamp(5vw, 13vw, 25vw)',
  maxWidth: '1200px'
};



const CompanyGrid: FC = () => {
  return (
    <div style={gridStyle} className="company-grid-margin">
      {companies.map((company, index) => (
        <CompanyCard
          key={index}
          logoSrc={company.logoSrc}
          about={company.about}
          websiteUrl={company.websiteUrl}
          foundedDate={company.foundedDate}
          founders={company.founders}
          stageInvested={company.stageInvested}
          sector={company.sector}
          coInvestors={company.coInvestors}
          padding={company.padding}
          paddingBottom={company.paddingBottom}
          paddingTop={company.paddingTop}
          paddingLeft={company.paddingLeft}
          paddingRight={company.paddingRight}
        />
      ))}
    </div>
  );
};

export default CompanyGrid;

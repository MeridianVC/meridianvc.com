import Section from '../Structural/Section';
import Spacer from '../Structural/Spacer';
import Header from '../Text/Header';
import { CompanyProvider } from '../UI/Companies/CompanyContext';
import { CompanyGrid } from '../UI/Companies/CompanyGrid';
import { FundSelector } from '../UI/Companies/FundSelector';

const portfolioSectionStyle: React.CSSProperties = {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Section5Companies = () => {
  return (
    <>
      <CompanyProvider>
        <Section id="investments" isFullHeight={false} style={portfolioSectionStyle}>
          <Spacer height={'7.5rem'} />
          <Header type="H1" isCentered={true} paddingLeft="0px" marginBottom="clamp(1rem, 2rem, 3.5rem)">
            Our Investments
          </Header>
          <FundSelector />
          <CompanyGrid />
          <Spacer height={'4rem'} />
        </Section>
      </CompanyProvider>
    </>
  );
};

export default Section5Companies;

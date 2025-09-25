import Section from '../Structural/Section';
import Spacer from '../Structural/Spacer';
import Header from '../Text/Header';
import CompanyGrid from '../UI/Companies/CompanyGrid';
import FundSelector from '../UI/FundSelector';

const portfolioSectionStyle: React.CSSProperties = {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Section5Companies = () => {
  return (
    <>
      <Section id="section5_investments" isFullHeight={true} style={portfolioSectionStyle}>
        <Spacer height={'15vh'} />
        <Header type="H1" isCentered={true} paddingLeft="0px" marginBottom="clamp(2vh, 4vh, 7vh)">
          {' '}
          Our Investments{' '}
        </Header>
        <FundSelector />
        <CompanyGrid />
        <Spacer height={'8vh'} />
      </Section>
    </>
  );
};

export default Section5Companies;

import { FC } from 'react';
import Section from '../Structural/Section';
import Spacer from '../Structural/Spacer';
import Header from '../Text/Header';
import CompanyGrid from '../UI/CompanyGrid';
import FundSelector from '../UI/FundSelector';

const portfolioSectionStyle: React.CSSProperties = {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

const horizontalLineStyle: React.CSSProperties = {
    borderBottom: '2px solid #444444',
    width: '15%',
    marginBottom: 'clamp(0px, 3vw, 50px)',
    maxWidth: '185px',
}
  

const Section5Companies = () => {
    return (
        <>
            <Section id="section5_companies" isFullHeight={true} style={portfolioSectionStyle}>
            <Spacer height={'15vh'}/>
                <Header type="H1" isCentered={true} paddingLeft="0px" marginBottom='clamp(2vh, 4vh, 7vh)'> Our Investments </Header>
                <FundSelector/>
                <CompanyGrid/>
            </Section>
        </>
    )

}

export default Section5Companies






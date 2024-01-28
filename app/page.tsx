// This is the main entrypoint for our application

import './globals.css';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from '@/components/Globe/GlobePlaceholder';
import FillHorizontal from '@/components/Structural/FillHorizontal';
import FillVertical from '@/components/Structural/FillVertical';
import Navbar from '@/components/UI/Navbar';
import Header from '@/components/Text/Header';
import Spacer from '@/components/Structural/Spacer';
import Section from '@/components/Structural/Section';
import ContentBlock from '@/components/Structural/ContentBlock';
import PrinciplesCard from '@/components/UI/PrinciplesCard';

// dynamically load the globe only when DOM is present
const Globe = dynamic(() => import('../components/Globe/Globe'), {
    ssr: false,
    loading: () => <PlaceholderMap/> // loads placeholder while 3D globe renders
});

const mainContentStyle: React.CSSProperties = {
  width: '100vw',
  maxWidth: '2000px',  
  height: '1500vh',
  minHeight: '1500vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: 'transparent',
  top: '0',
  paddingLeft: '5vw',
  paddingRight: '5vw',
};

const globeStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -2
};

const landingStyle: React.CSSProperties = {
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const compassStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(5.5rem, 8vw, 8rem)',
  marginRight: 'clamp(2vw, 7vw, 20vw)',
  marginTop: 'clamp(2vh, 5vh, 10vh)',
  marginLeft: 'auto',
};  

const legendStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(18rem, 60vw, 33rem)',
  position: 'relative',
  paddingRight: 'clamp(.5vw, 7vw, 20vw)',
  paddingBottom: 'clamp(5vh, 10vh, 10vh)',
  marginLeft: 'auto',
  marginTop: 'auto',
};

const principlesStyle: React.CSSProperties = {
  justifyContent: 'space-around',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const cardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  flexWrap: 'wrap',
}

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <FillVertical side='left' />
      <FillVertical side='right' />
      <FillHorizontal />
      <FillHorizontal behind />
        <main style={mainContentStyle}>
          <Section id="section1_landing" style={landingStyle}>
            <ContentBlock>
              <Spacer/>
              <img src="./compass.svg" alt="Compass" style={compassStyle}/>
              <Header type='H1'> Championing bold ideas and visionary founders to fuel world-changing innovation. </Header>
            </ContentBlock>
            <ContentBlock>
                <img src="./legend.svg"alt="Legend"style={legendStyle} className="legend"/>
            </ContentBlock>
          </Section>
          <Section id="section2_principles">
          <Header type='H1'> Our Principles </Header>
            <div style={cardContainerStyle}>
              <PrinciplesCard 
                title="Vision"
                imagePath="/vision.svg" // Add image path if available
                numberDisplay="01"
                content="We invest in bold leaders who exhibit a rare blend of imagination and execution. Leaders who see what others don’t and courageously sail into the unknown."
              />
              <PrinciplesCard 
                title="Collaboration"
                imagePath="/collaboration.svg" // Add image path if available
                numberDisplay="02"
                content="Our investment goes beyond capital. We invest time in our founders – helping chart your course, acquire key talent, and connect you with key partners along your journey."
              />
              <PrinciplesCard 
                title="Growth"
                imagePath="/growth.svg" // Add image path if available
                numberDisplay="03"
                content="As former operators, we understand how to build and scale startups. We will work with you to safeguard against common missteps and position you best for growth-stage capital."
              />
            </div>
          </Section>
        </main>
      <Globe style={globeStyle} />
    </>
  );
};

export default Home;
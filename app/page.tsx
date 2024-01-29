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
import PrinciplesCard from '@/components/UI/PrinciplesCard';

// dynamically load the globe only when DOM is present
const Globe = dynamic(() => import('../components/Globe/Globe'), {
    ssr: false,
    loading: () => <PlaceholderMap/> // loads placeholder while 3D globe renders
});

const mainContentStyle: React.CSSProperties = {
  width: '92%',
  maxWidth: '2000px',  
  height: '1500vh',
  minHeight: '1500vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: 'transparent',
  top: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  gap: '20px',
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
  marginRight: 'clamp(5vw, 8vw, 20vw)',
  marginBottom: 'clamp(5vh, 10vh, 10vh)',
  marginLeft: 'auto',
  marginTop: 'auto'
};

const principlesSectionStyle: React.CSSProperties = {
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  alignItems: 'center',
}

const principleCardGap = 'principle-card-gap';

const principleCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(1vw, 2vw, 3vw)',
  flexWrap: 'wrap',
  margin: '0 clamp(5vw, 5vw, 7vw)',
}

const principlesHeader: React.CSSProperties = {
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 'clamp(2vh, 3vh, 20vh)',
  alignItems: 'center'
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
            <div>
              <Spacer/>
              <img src="./compass.svg" alt="Compass" style={compassStyle}/>
              <Header type='H1'> Championing bold ideas and visionary founders to fuel world-changing innovation. </Header>
            </div>
            <div>
                <img src="./legend.svg"alt="Legend"style={legendStyle} className="legend"/>
            </div>
          </Section>
          <Section id="section2_principles" style={principlesSectionStyle}>
            <div style={principlesHeader}>
              <Spacer/>
              <Header type='H1' isCentered={true}> Our Guiding Principles </Header>
            </div>
            <div style={principleCardContainerStyle} className={principleCardGap}>
              <PrinciplesCard 
                title="Vision"
                imagePath="/vision.svg" // Add image path if available
                numberDisplay="01"
                content="We invest in bold leaders who exhibit a rare blend of imagination and execution. Leaders who see what others don’t and courageously journey into the unknown."
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
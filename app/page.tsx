// This is the main entrypoint for our application

import './globals.css';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from '@/components/Globe/GlobePlaceholder';
import FillHorizontal from '@/components/UI/FillHorizontal';
import FillVertical from '@/components/UI/FillVertical';
import CardWrapper from '@/components/UI/CardWrapper'
import PrinciplesCard from '@/components/UI/PrinciplesCard'
import Navbar from '@/components/UI/Navbar';
import Header from '@/components/Text/Header';
import Spacer from '@/components/UI/Spacer';

// dynamically load the globe only when DOM is present
const Globe = dynamic(() => import('../components/Globe/Globe'), {
    ssr: false,
    loading: () => <PlaceholderMap/> // loads placeholder while 3D globe renders
});

const globeStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -2
};

const compassContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '75vw', // Adjust width as needed
  height: '10vh', // Adjust height as needed
};

const compassStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: '6rem',
  position: 'absolute',
  right: 0,
};

const legendContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: '75vw', // Adjust width as needed
  height: '40vh', // Adjust height as needed
};

const legendStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: '30rem',
  position: 'absolute',
  right: 0,
  bottom: 0,
};

const mainContentStyle: React.CSSProperties = {
  width: '80vw',
  maxWidth: '80vw',
  height: '1500vh',
  minHeight: '1500vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  position: 'absolute',
  backgroundColor: 'transparent',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '2vh, 3vw',
};

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <FillVertical side='left' />
      <FillVertical side='right' />
      <FillHorizontal />
      <FillHorizontal behind />
      <main style={mainContentStyle}>
        <Spacer height='10rem'/>
        <div style={compassContainerStyle}>
          <img 
            src="./compass.svg" 
            alt="Compass" 
            style={compassStyle}
          />
        </div>
        <Header type='H1'> Championing bold ideas and visionary founders to fuel world-changing innovations. </Header>
        <div style={legendContainerStyle}>
          <img 
            src="./Legend.png" 
            alt="Legend" 
            style={legendStyle}
          />
        </div>
        {/* <CardWrapper>
            <PrinciplesCard title='Card 1' content='This is the content of Card 1.' />
            <PrinciplesCard title='Card 2' content='This is the content of Card 2.' />
        </CardWrapper> */}
      </main>
      <Globe style={globeStyle} />
    </>
  );
};

export default Home;

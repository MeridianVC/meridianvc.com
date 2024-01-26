// This is the main entrypoint for our application

import './globals.css';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from '../components/Globe/GlobePlaceholder';
import FillHorizontal from '../components/UI/FillHorizontal';
import FillVertical from '../components/UI/FillVertical';
import CardWrapper from '../components/UI/CardWrapper'
import PrinciplesCard from '../components/UI/PrinciplesCard'
import Navbar from '../components/UI/Navbar';
import Header from '../components/Text/Header';

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

const mainContentStyle: React.CSSProperties = {
  width: '100vw',
  maxWidth: '100%',
  height: '1500vh',
  minHeight: '1500vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  backgroundColor: 'transparent',
  top: '0',
  left: '50%',
  transform: 'translateX(-50%)',
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
        <Header type='H1' isBackgroundColored>Early stage venture capital for badass people. </Header>
          <div>Hello there</div>
        <CardWrapper>
            <PrinciplesCard title='Card 1' content='This is the content of Card 1.' />
            <PrinciplesCard title='Card 2' content='This is the content of Card 2.' />
        </CardWrapper>
      </main>
      <Globe style={globeStyle} />
    </>
  );
};

export default Home;

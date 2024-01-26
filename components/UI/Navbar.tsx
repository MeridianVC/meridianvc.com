// Navbar contains logo and navigation links

import { FC } from 'react';

const wordmarkStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  objectFit: 'contain',
  objectPosition: 'center',
  overflow: 'hidden',
  flexShrink: 1,
  width: '12rem',
  maxWidth: '100%',
  marginTop: 'auto',
  marginBottom: 'auto',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'auto',
};

const linkStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '4vw',
  fontSize: '1rem',
};

const navStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 1,
  gap: '4vw',
  justifyContent: 'space-between',
  color: '#1E1E1E',
  width: '91.5vw',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  paddingRight: '0.1rem',
  letterSpacing: '0.025rem',
  top: 0,
  zIndex: 13,
  position: 'absolute'

};


interface NavbarProps {
  fake?: boolean;
}

const Navbar: FC<NavbarProps> = ({ fake }) => {
  const dynamicStyle: React.CSSProperties = fake ? {
    opacity: 0 // Apply reduced opacity if `fake` is true
  } : { // Else real Navbar needs these properties
    zIndex: 3,
    position: 'static',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
  };

  return (
    <nav style={{ ...navStyle, ...dynamicStyle }}>
      <img 
        src="./meridian_wordmark.svg" 
        alt="Meridian" 
        style={{ ...wordmarkStyle }}
      />
      <div style={{ ...linkStyle }}>
        <div>Principles</div>
        <div>Team</div>
        <div>Portfolio</div>
        <div>Investor Portal</div>
        <div>Get in Touch</div>
      </div>
    </nav>
  );
};

export default Navbar;
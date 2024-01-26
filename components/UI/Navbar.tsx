// Navbar contains logo and navigation links

import { FC } from 'react';

const borderThickness = '2px'; 

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
  width: 'auto',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  paddingRight: '0.1rem',
  letterSpacing: '0.025rem',
  top: 0,
  zIndex: 12,
  position: 'fixed',
  left: `calc(4vw - ${borderThickness})`,
  right: `calc(4vw - ${borderThickness})`,
};

const Navbar: FC = () => {
  return (
    <nav style={navStyle}>
      <img 
        src="./meridian_wordmark.svg" 
        alt="Meridian" 
        style={wordmarkStyle}
      />
      <div style={linkStyle}>
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
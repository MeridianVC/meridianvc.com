// Navbar contains logo and navigation links

import { FC } from 'react';

const borderThickness = '2px'; 

const wordmarkStyle: React.CSSProperties = {
  fontSize: '36px',
  letterSpacing: '2.8px',
  paddingTop: '5px',
}

const linkStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '4vw',
  fontSize: '1rem',
};

export const navHeight = 'clamp(70px, calc(7vh + 2px), calc(7vh + 2px))' // used in other components for height calcs

const navStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 1,
  gap: '4vw',
  height: navHeight,
  justifyContent: 'space-between',
  color: '#1E1E1E',
  width: 'auto',
  paddingRight: '0.1rem',
  letterSpacing: '0.025rem',
  top: 0,
  zIndex: 12,
  position: 'fixed',
  left: `calc(4vw - ${borderThickness})`,
  right: `calc(4vw - ${borderThickness})`,
  alignItems: 'center',
};

const Navbar: FC = () => {
  return (
    <nav style={navStyle}>
      <div style={wordmarkStyle}>
        MERIDIAN
      </div>
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
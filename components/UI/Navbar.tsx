"use client";

import { FC, useState } from 'react';
import { navHeight } from '../Structural/NavHeight';
import './ui.css';

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
  textDecoration: 'none',
  color: 'inherit',
};

const mobileLinkStyle: React.CSSProperties = {
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
};

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

const burgerStyle: React.CSSProperties = {
  display: 'none', // Default to not display, will be overridden by media query
  cursor: 'pointer',
};

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav style={navStyle}>
      <a href="./" style={wordmarkStyle}>MERIDIAN</a>
      <div className="burger" onClick={toggleMenu} style={{...burgerStyle, ...(isMenuOpen ? {display: 'flex'} : {})}}>
        ☰
      </div>
      <div style={{...linkStyle, ...(isMenuOpen ? mobileLinkStyle : {})}}>
        <a href="#section2_principles" className="navbar-hover">Principles</a>
        <a href="#section4_team" className="navbar-hover">Team</a>
        <a href="#section5_companies" className="navbar-hover">Investments</a>
        <a href="https://login.app.carta.com/credentials/login/" target="blank" className="navbar-hover">Investor Portal</a>
        <div className="navbar-hover">Get in Touch</div>
      </div>
    </nav>
  );
};

export default Navbar;

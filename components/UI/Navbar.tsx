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
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  return (
    <nav style={navStyle}>
      <a href="./" style={wordmarkStyle}>MERIDIAN</a>
      <div className={`nav-links ${isOpen ? 'nav-active' : ''}`} style={linkStyle}>
        <a href="#section2_principles" className="navbar-hover link-disappear">Principles</a>
        <a href="#section4_team" className="navbar-hover link-disappear">Team</a>
        <a href="#section5_companies" className="navbar-hover link-disappear">Investments</a>
        <a href="https://login.app.carta.com/credentials/login/" target="blank" className="navbar-hover link-disappear" link-disappear>Investor Portal</a>
        <div className="navbar-hover link-disappear">Get in Touch</div>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src="/Hamburger.svg" alt="Menu" />
      </div>
    </nav>
  );
};

export default Navbar;
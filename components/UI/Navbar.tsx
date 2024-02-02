"use client";

import { FC, useState } from 'react';
import { navHeight } from '../Structural/NavHeight';
import NavbarDropdown from './NavbarDropdown';
import { AnimatePresence } from 'framer-motion';
import GetInTouchButton from './GetInTouchButton';
import GetInTouchModal from './GetInTouchModal';
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
  transform: 'translate(0px, 3px)'
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
  zIndex: 101,
  position: 'fixed',
  left: `calc(4vw - ${borderThickness})`,
  right: `calc(4vw - ${borderThickness})`,
  alignItems: 'center',
};

const buttonStyle: React.CSSProperties = {
  position: 'relative',
  transform: 'translate(1.5px, -5px)',

}

interface Link {
  href: string;
  title: string;
}

const links: Link[] = [
  {href: "#section5_companies", title: "Investments"},
  {href: "#section4_team", title: "Team"},
  {href: "#section2_principles", title: "Principles"}
]

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // open modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // close modal
  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (
        <>
          <nav style={navStyle}>
            <a href="./" style={wordmarkStyle}>MERIDIAN</a>
            <div className={`nav-links ${isOpen ? 'nav-active' : ''}`} style={linkStyle}>
              <a href="#section2_principles" className="navbar-hover link-disappear">Principles</a>
              <a href="#section4_team" className="navbar-hover link-disappear">Team</a>
              <a href="#section5_companies" className="navbar-hover link-disappear">Investments</a>
              <a href="https://login.app.carta.com/credentials/login/" target="_blank" rel="noopener noreferrer" className="navbar-hover link-disappear">Investor Portal</a>
              <GetInTouchButton onClick={handleOpenModal} className="navbar-hover link-disappear" style={buttonStyle}/>
            </div>
            {isModalOpen && (
              <AnimatePresence>
                <GetInTouchModal onClose={handleCloseModal} isOpen={isModalOpen}/>
              </AnimatePresence>
            )}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              <img src="/Hamburger.svg" alt="Open menu" className="nav-link"/>
            </div>
          </nav>
          <AnimatePresence>
            {isOpen && (
                <NavbarDropdown isDropdownOpen={isOpen} setIsDropdownOpen={setIsOpen} links={links} toggleModal={handleOpenModal}/>
            )}
          </AnimatePresence>
        </>
  
  );
};

export default Navbar;
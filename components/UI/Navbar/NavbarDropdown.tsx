import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { motion, MotionStyle } from 'framer-motion';
import { navHeight } from '../../Structural/NavHeight';
import GetInTouchButton from './GetInTouchButton';
import '../ui.css'

type Link = {
  href: string;
  title: string;
};

interface DropdownMenuProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
  toggleModal: () => void;
  links: Link[];
}

const NavbarDropdown: React.FC<DropdownMenuProps> = ({ isDropdownOpen, setIsDropdownOpen, links, toggleModal }) => {
  const dropdownStyle: MotionStyle = {
    display: isDropdownOpen ? 'flex' : 'none',
    height: isDropdownOpen ? 'auto' : 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '20px',
    paddingTop: '20px',
    backgroundColor: '#FFF5DC',
    position: 'fixed',
    top: `calc(${navHeight} - 2px`,
    left: 'calc(4vw  - .5px)',
    right: 'calc(4vw  - .5px)',
    borderTop: 'solid 2px #444444',
    borderBottom: 'solid 2px #444444',
    borderRight: 'solid 2px #444444',
    borderLeft: 'solid 2px #444444',
    zIndex: 10,
    fontSize: '36px',
  };

  const listStyle: React.CSSProperties = {
    paddingBottom: '20px',
    paddingRight: '2px',
    margin: 0,
    listStyle: 'none',
    textAlign: 'right'
  }

  const navLinkStyle: React.CSSProperties = {
    paddingTop: '25px',
  }

  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  // This finds our div and attaches an HTML element to our document to be used by our portal for the modal
  useEffect(() => {
      const root = document.getElementById('modal-root');
      if (root instanceof HTMLElement) {
      setModalRoot(root);
      } else {
      console.error('Modal root element not found or is not an HTML element');
      }
  }, [])

  return (
    <>
    {modalRoot? ReactDOM.createPortal(
      <motion.div
          style={dropdownStyle}
          initial={{ y: '-40vh' }}
          animate={{ y: 0 }}
          exit={{ y: '-40vh' }}
          transition={{ type: 'easeInOut', stiffness: 100 }}
          className='mobile-modal'
      >
        <GetInTouchButton className="nav-link" onClick={() => toggleModal() }/>
        <a href="https://login.app.carta.com/credentials/login/" target="blank" className="nav-link" style={navLinkStyle}>Investor Portal</a>
        <ul style={listStyle}>
          {links.map((link, index) => (
              <li className="nav-link" key={index}>
              <a href={link.href} onClick={() => setIsDropdownOpen(false)}>{link.title}</a>
            </li>
          ))}
        </ul>
      </motion.div>, 
    modalRoot) : null}
    </>
  );
};

export default NavbarDropdown;
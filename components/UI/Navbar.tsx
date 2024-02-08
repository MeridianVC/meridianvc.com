"use client";

import { FC, useState, useEffect } from 'react';
import { navHeight } from '../Structural/NavHeight';
import NavbarDropdown from './NavbarDropdown';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import GetInTouchButton from './GetInTouchButton';
import GetInTouchModal from './GetInTouchModal';
import ReactDOM from 'react-dom';
import './ui.css';

/*
set initial nav height
the navbar will then transition from this initial height to the height we set for the rest of the site
ideally the height of the navbar automatically moves the other content up with it
globe is fixed and in the background, we'll either need to translate this or translate an element that covers it

phase 2:
get in touch / hamburger button appears
other 4 Navbar link items animate down in sequential order from right to left
This behavior may need to be turned off for mobile
*/

const borderThickness = '2px';

const wordmarkStyle: React.CSSProperties = {
  fontSize: '36px',
  letterSpacing: '2.8px',
  paddingTop: '5px',
  paddingLeft: '2px',
}

const linkStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '4vw',
  fontSize: '1rem',
  textDecoration: 'none',
  color: 'inherit',
  transform: 'translate(0px, 3px)',
  paddingRight: '.5px',
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
  transform: 'translate(0px, -5px)',
}

interface Link {
  href: string;
  title: string;
}

const links: Link[] = [
  {href: "#section2_principles", title: "Principles"},
  {href: "#section4_team", title: "Team"},
  {href: "#section5_companies", title: "Investments"}
]

const Navbar: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // open modal
  const handleOpenModal = () => {
    console.log('handle open modal');
    console.log(modalRoot);
    setIsModalOpen(true);
  };

  // close modal
  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  // grab our div set layout.tsx to attach the react portal to
  useEffect(() => {
      const root = document.getElementById('modal-root');
      if (root instanceof HTMLElement) {
        setModalRoot(root);
        console.log(root);
      } else {
        console.error('Modal root element not found or is not an HTML element');
      }
    }, [])

    // NEW SECTION

    const controls = useAnimation();

    const [initialY, setInitialY] = useState(0);

    type NavVariantsParams = {
      initialY: number;
    };
    
    const getNavVariants = ({ initialY }: NavVariantsParams) => {
      return {
        initial: { y: 800, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
      };
    };

  // loading animation, only invoked once on component mount
  useEffect(() => {
    if (isInitialLoad) {

      const calculatedY = (vh: number) => window.innerHeight * (vh / 2);

      setInitialY(calculatedY);

      controls.start("visible").then(() => {
        setIsInitialLoad(false); // might not even need the state variable, empty dependency array probably does the trick
      })
    }
  }, []);

  const navVariants = getNavVariants({ initialY });

  return (
        <>
          <AnimatePresence>
              <motion.nav
                style={navStyle}
                variants={navVariants}
                initial="initial"
                animate="visible"
                key="something"
              >
                {/* <nav style={navStyle}> */}
                  <a href="./" style={wordmarkStyle}>MERIDIAN</a>
                  <div className={`nav-links ${isDropdownOpen ? 'nav-active' : ''}`} style={linkStyle}>
                    <a href="#section2_principles" className="navbar-hover link-disappear">Principles</a>
                    <a href="#section4_team" className="navbar-hover link-disappear">Team</a>
                    <a href="#section5_companies" className="navbar-hover link-disappear">Investments</a>
                    <a href="https://login.app.carta.com/credentials/login/" target="_blank" rel="noopener noreferrer" className="navbar-hover link-disappear">Investor Portal</a>
                    <GetInTouchButton onClick={handleOpenModal} className="link-disappear" style={buttonStyle}/>
                  </div>
                    {modalRoot && ReactDOM.createPortal(
                      <AnimatePresence>
                        {isModalOpen && <GetInTouchModal onClose={handleCloseModal} isOpen={isModalOpen}/>}
                      </AnimatePresence>,
                      modalRoot)}
                  <div className="hamburger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src="/Hamburger.svg" alt="Open menu" className="nav-link"/>
                  </div>
                {/* </nav> */}
              </motion.nav>
          </AnimatePresence>
          <AnimatePresence>
            {isDropdownOpen && (
                <NavbarDropdown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} links={links} toggleModal={handleOpenModal}/>
            )}
          </AnimatePresence>
        </>
  
  );
};

export default Navbar;
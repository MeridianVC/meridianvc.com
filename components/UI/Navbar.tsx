"use client";

import React, { FC, useState, useEffect } from 'react';
import { navHeight } from '../Structural/NavHeight';
import NavbarDropdown from './NavbarDropdown';
import { AnimatePresence, motion, useAnimation, LayoutGroup } from 'framer-motion';
import GetInTouchButton from './GetInTouchButton';
import GetInTouchModal from './GetInTouchModal';
import ReactDOM from 'react-dom';
import './ui.css';
import { useAnimationContext } from '../Animation/AnimationContext';

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

const wordmarkStyle: React.CSSProperties = {
  zIndex: 101,
  paddingLeft: '2px',
  display: 'flex',
  position: 'fixed',
  alignItems: 'center',
  width: '223px',
  margin: '0 4vw',
  height: navHeight,
};

//style of everything except the wordmark in the navbar
const navbarStyle: React.CSSProperties = {
  zIndex: 100,
  height: navHeight,
  left: '4vw',
  right: '4vw',
  backgroundColor: '#FFF5DC',
  top: 0,
  position: 'fixed',
  borderBottom: '2px solid #444444',
  boxSizing: 'content-box', // this pushes our borderBottom out to better fit the vertical lines
  overflow: 'visible',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'center',
  letterSpacing: '0.025rem'
  
}

//this fills the background and extends on left / right to cover vertical lines
const fillStyle: React.CSSProperties = {
  backgroundColor: '#FFF5DC',
  zIndex: 99,
  position: 'fixed',
  width: '100%',
  height: `${navHeight}`,
  transform: 'translateX(-2px)',
  boxSizing: 'border-box',
}

//wordmark will slide out from under, then this element will disappear
const wordmarkCoverStyle: React.CSSProperties = {
  backgroundColor: '#FFF5DC',
  zIndex: 200,
  position: 'fixed',
  width: '100%',
  bottom: 0,
  height: '40vh'
}

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
  const [initialWordmarkScale, setInitialWordmarkScale] = useState<number>(1.5); //used as the initial wordmark scale animation
  const [start, setStart] = useState<boolean>(false); //animation does not start until the initial wordmark scale is ready
  const [showWordmarkCover, setshowWordmarkCover] = useState<boolean>(true); //for wordmark to slide out from under,
  
  const { setIsAnimating, setAnimationStarted } = useAnimationContext(); // animation state is set in this component

  // calculate initial scale based on viewport size, animation will not start until this value is set
  useEffect(() => {
    const calculateInitialScale = () => {
      const viewportWidth = window.innerWidth;
      const scale = Math.max(1.5, viewportWidth / 400); // minimum can be a scale of 1
      setInitialWordmarkScale(scale);
    };

    calculateInitialScale();

    setStart(true);

    // in case the user resizes as the animating is happening
    window.addEventListener('resize', calculateInitialScale);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', calculateInitialScale);
  }, []);

  // Used to open and close the get in touch button
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  // This finds our div and attaches an HTML element to our document to be used by our portal for the modal
  useEffect(() => {
      const root = document.getElementById('modal-root');
      if (root instanceof HTMLElement) {
        setModalRoot(root);
      } else {
        console.error('Modal root element not found or is not an HTML element');
      }
    }, [])

    const navbarControls = useAnimation();
    const wordmarkControls = useAnimation();
    const linkPrincipleControls = useAnimation();
    const linkTeamControls = useAnimation();
    const linkInvestmentsControls = useAnimation();
    const linkInvestorPortalControls = useAnimation();

    //NAVBAR ANIMATION
    useEffect(() => {
      const sequence = async () => {

        if(!start) return;

        await navbarControls.start({
          opacity: 1,
          transition: { duration: 0, delay: 1, ease: 'easeInOut' },
        });

        await navbarControls.start({
          y: '0vh',
          transition: { duration: .7, delay: .8, ease: 'easeInOut' },
        });
      
        await linkInvestorPortalControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: .1, delay: .2, ease: 'easeInOut' },
        })

        await linkInvestmentsControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: .1, ease: 'easeInOut' },
        })

        await linkTeamControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: .1, ease: 'easeInOut' },
        })

        await linkPrincipleControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: .1, ease: 'easeInOut' },
        })

      };

      sequence();

    }, [navbarControls, start, linkPrincipleControls, linkTeamControls, linkInvestmentsControls, linkInvestorPortalControls]);

    //WORDMARK ANIMATION
    useEffect(() => {

      if(!start) return;

      // setting to true will trigger the main content animation start
      if (setAnimationStarted) {
        setAnimationStarted(true);
      }
      
      const sequence = async () => {
        
        //move wordmark into view
        await wordmarkControls.start({
          y: '45vh',
          x: 'calc(50vw - 223px/2 - 4vw)',
          rotate: 0,
          transition: { duration: .5, delay: 1, ease: 'easeInOut' },
        });

        setshowWordmarkCover(false); // remove the div the wordmark slid out from under

        //move wordmark to top-center of nav while scaling down
        await wordmarkControls.start({
          y: '0vh',
          scale: 1,
          transition: { duration: .7, delay: .3, ease: 'easeInOut'  },
        });

        //slide wordmark from center to the left
        await wordmarkControls.start({
          x: '0vw',
          transition: { duration: .7, ease: 'easeInOut' },
        });

        // set is animating to false which will trigger the globe rendering
        if (setIsAnimating) {
          setIsAnimating(false);
        }
      };

      sequence();

    }, [wordmarkControls, start]);

  return (
        <>
          <motion.a href="./"
            style={{...wordmarkStyle, scale: initialWordmarkScale}} // this is effectively the initial scale
            animate={wordmarkControls}
            initial={{
              rotate: -25,
              y: '90vh',
              x: 'calc(50vw - 223px/2 - 4vw)',
            }}
            key="wordmark"
          >
            <img src="/meridianWordmark.svg" alt="Meridian Wordmark" />
          </motion.a>

          {showWordmarkCover && <div style={wordmarkCoverStyle}></div>} 

          <motion.nav
            initial={{ 
              y: `calc(105vh - ${navHeight})`,
              opacity: 0
              }}
            style={navbarStyle}
            animate={navbarControls}
          >
              <div className={`nav-links ${isDropdownOpen ? 'nav-active' : ''}`} style={linkStyle}>
                <motion.a href="#section2_principles" className="navbar-hover link-disappear" initial={{y: -100, opacity: 0}} animate={linkPrincipleControls}>Principles</motion.a>
                <motion.a href="#section4_team" className="navbar-hover link-disappear" initial={{y: -100, opacity: 0}} animate={linkTeamControls}>Team</motion.a>
                <motion.a href="#section5_investments" className="navbar-hover link-disappear" initial={{y: -100, opacity: 0}} animate={linkInvestmentsControls}>Investments</motion.a>
                <motion.a href="https://login.app.carta.com/credentials/login/" target="_blank" rel="noopener noreferrer" className="navbar-hover link-disappear" initial={{y: -100, opacity: 0}} animate={linkInvestorPortalControls}>Investor Portal</motion.a>
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

              <AnimatePresence>
                {isDropdownOpen && (
                    <NavbarDropdown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} links={links} toggleModal={handleOpenModal}/>
                )}
              </AnimatePresence>

          </motion.nav>

          <motion.div
            initial={{ 
              y: `calc(74vh)`,
              opacity: 0
              }}
              style={fillStyle}
            animate={navbarControls}
          />
        </>
  
  );
};

export default Navbar;
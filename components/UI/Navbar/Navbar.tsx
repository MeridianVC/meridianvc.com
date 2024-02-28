"use client";

import React, { FC, useState, useEffect, useRef } from 'react';
import { navHeight } from '../../Structural/NavHeight';
import NavbarDropdown from './NavbarDropdown';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import GetInTouchButton from './GetInTouchButton';
import GetInTouchModal from './GetInTouchModal';
import ReactDOM from 'react-dom';
import '../ui.css';
import { useAnimationContext } from '../../Animation/AnimationContext';
import useCleanAnimation from '../../Animation/useCleanAnimation';

const linkStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row-reverse',
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
  {href: "#section5_investments", title: "Investments"}
]

const Navbar: FC = () => {

  const modalRoot = useRef<HTMLElement | null>(null); //for the portal to attach our dropdowns to
  const wordmarkScale = useRef<number>(1.5); //used as the initial wordmark scale animation

  const [start, setStart] = useState<boolean>(false);  //animation does not start until the initial wordmark scale is ready, MainContentAnimation is driven by this Navbar animation
  const [showWordmarkCover, setshowWordmarkCover] = useState<boolean>(true); //for wordmark to slide out from under
  const [allowScroll, setAllowScroll] = useState(false); //scroll is disabled while animation is running
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isAnimating, setIsAnimating, setAnimationStarted } = useAnimationContext(); // animation state is set in this component

  useCleanAnimation(isAnimating, allowScroll); // this ensures no user scroll during animation

  // calculate initial scale based on viewport size, animation will not start until this value is set
  useEffect(() => {
    const calculateInitialScale = () => {
      const viewportWidth = window.innerWidth;
      const scale = Math.max(1.5, viewportWidth / 400); // minimum can be a scale of 1
      wordmarkScale.current = scale
    };

    calculateInitialScale();

    setStart(true);

    // in case the user resizes as the animating is happening
    window.addEventListener('resize', calculateInitialScale);

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
      const root = document.getElementById('modal-root'); //modal-root is created in layout.tsx
      if (root instanceof HTMLElement) {
        modalRoot.current = root
      } else {
        console.error('Modal root element not found or is not an HTML element');
      }
    }, [])

    // These variants are used for our navbar links
    const linkContainerVariants = {
      initial: { opacity: 0 }, // initial state for links
      animate: { 
        opacity: 1,
        transition: {
          when: "beforeChildren",
          delay: 2.2,
          duration: .5,
          staggerChildren: 0.035, // Stagger the animation of child components
        }
      },
    };

    const linkVariants = {
      initial: { y: -100, opacity: 0 },
      animate: { 
        opacity: 1,
        y: 0,
        transition: {
          duration: .15,
        }
      }
    };

    const navbarControls = useAnimation();
    const wordmarkControls = useAnimation();

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

      };

      sequence();

    }, [navbarControls, start]);

    //WORDMARK ANIMATION
    useEffect(() => {

      if(!start) return;
      
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

        //allows user to scroll
        if (!allowScroll) {
          setAllowScroll(true);
        }

        //slide wordmark from center to the left
        await wordmarkControls.start({
          x: '0vw',
          transition: { duration: .6, ease: 'easeInOut' },
        });

        // set is animating to false which will trigger the globe rendering
        if (setIsAnimating && isAnimating) {
          setIsAnimating(false);
        }
      };

      // setting to true will trigger the main content animation start
      if (setAnimationStarted) {
        setAnimationStarted(true);
      }

      sequence();

    }, [wordmarkControls, start]);

  return (
        <>
          <motion.a href="./"
            style={{...wordmarkStyle, scale: wordmarkScale.current}} // this is effectively the initial scale
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
              y: '105vh',
              opacity: 0
              }}
            
            style={navbarStyle}
            animate={navbarControls}
          >
              <motion.div 
                className={`nav-links ${isDropdownOpen ? 'nav-active' : ''}`} 
                style={linkStyle}
                initial="initial"
                animate="animate"
                variants={linkContainerVariants}>
                  <GetInTouchButton onClick={handleOpenModal} className="link-disappear" style={buttonStyle}/>
                  <motion.a href="https://login.app.carta.com/credentials/login/" target="_blank" rel="noopener noreferrer" className="navbar-hover link-disappear" variants={linkVariants}>Investor Portal</motion.a>
                  <motion.a href="#section5_investments" className="navbar-hover link-disappear"variants={linkVariants} >Investments</motion.a>
                  <motion.a href="#section4_team" className="navbar-hover link-disappear" variants={linkVariants}>Team</motion.a>
                  <motion.a href="#section2_principles" className="navbar-hover link-disappear" variants={linkVariants}>Principles</motion.a>
              </motion.div>
                {modalRoot.current && ReactDOM.createPortal(
                  <AnimatePresence>
                    {isModalOpen && <GetInTouchModal onClose={handleCloseModal} isOpen={isModalOpen}/>}
                  </AnimatePresence>,
                  modalRoot.current)}

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
              y: '105vh',
              opacity: 0
              }}
              style={fillStyle}
            animate={navbarControls}
          />
        </>
  
  );
};

export default Navbar;
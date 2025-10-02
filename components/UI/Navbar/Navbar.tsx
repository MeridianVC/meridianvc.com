'use client';

import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import React, { FC, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAnimationContext } from '../../Animation/AnimationContext';
import useCleanAnimation from '../../Animation/useCleanAnimation';
import { useScrollLock } from '../../hooks/useScrollLock';
import { navHeight } from '../../Structural/NavHeight';
import { Hamburger } from '../Icons/Hamburger';
import { XNotTwitter } from '../Icons/XNotTwitter';
import '../ui.css';
import GetInTouchButton from './GetInTouchButton';
import GetInTouchModal from './GetInTouchModal';
import NavbarDropdown from './NavbarDropdown';

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
  margin: '0',
  height: navHeight,
  appearance: 'unset',
  cursor: 'pointer',
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
  letterSpacing: '0.025rem',
};

//this fills the background and extends on left / right to cover vertical lines
const fillStyle: React.CSSProperties = {
  backgroundColor: '#FFF5DC',
  zIndex: 99,
  position: 'fixed',
  width: '100%',
  height: `${navHeight}`,
  transform: 'translateX(-2px)',
  boxSizing: 'border-box',
};

//wordmark will slide out from under, then this element will disappear
const wordmarkCoverStyle: React.CSSProperties = {
  backgroundColor: '#FFF5DC',
  zIndex: 200,
  position: 'fixed',
  width: '100%',
  bottom: 0,
  height: '40dvh',
};

const buttonStyle: React.CSSProperties = {
  position: 'relative',
  transform: 'translate(0px, -5px)',
};

interface Link {
  href: string;
  title: string;
}

const links: Link[] = [
  { href: '#principles', title: 'Principles' },
  { href: '#team', title: 'Team' },
  { href: '#investments', title: 'Investments' },
];

const Navbar: FC = () => {
  const modalRoot = useRef<HTMLElement | null>(null); //for the portal to attach our dropdowns to
  const wordmarkScale = useRef<number>(1.5); //used as the initial wordmark scale animation
  const { lockScroll, unlockScroll } = useScrollLock();

  const [start, setStart] = useState<boolean>(false); //animation does not start until the initial wordmark scale is ready, MainContentAnimation is driven by this Navbar animation
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
      wordmarkScale.current = scale;
    };

    calculateInitialScale();

    setStart(true);

    // in case the user resizes as the animating is happening
    window.addEventListener('resize', calculateInitialScale);

    return () => window.removeEventListener('resize', calculateInitialScale);
  }, []);

  // Used to open and close the get in touch button
  const handleOpenModal = () => {
    lockScroll();
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    unlockScroll();
    setIsModalOpen(false);
  };

  // This finds our div and attaches an HTML element to our document to be used by our portal for the modal
  useEffect(() => {
    const root = document.getElementById('modal-root'); //modal-root is created in layout.tsx
    if (root instanceof HTMLElement) {
      modalRoot.current = root;
    } else {
      console.error('Modal root element not found or is not an HTML element');
    }
  }, []);

  // These variants are used for our navbar links
  const linkContainerVariants = {
    initial: { opacity: 0 }, // initial state for links
    animate: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: 2.2,
        duration: 0.5,
        staggerChildren: 0.035, // Stagger the animation of child components
      },
    },
  };

  const linkVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };

  const navbarControls = useAnimation();
  const wordmarkControls = useAnimation();

  //NAVBAR ANIMATION
  useEffect(() => {
    const sequence = async () => {
      if (!start) return;

      await navbarControls.start({
        opacity: 1,
        transition: { duration: 0, delay: 1, ease: 'easeInOut' },
      });

      await navbarControls.start({
        y: '0dvh',
        transition: { duration: 0.7, delay: 0.8, ease: 'easeInOut' },
      });
    };

    void sequence();
  }, [navbarControls, start]);

  //WORDMARK ANIMATION
  useEffect(() => {
    if (!start) return;

    const sequence = async () => {
      //move wordmark into view
      await wordmarkControls.start({
        y: '45dvh',
        x: 'calc(50vw - 223px/2)',
        rotate: 0,
        transition: { duration: 0.5, delay: 1, ease: 'easeInOut' },
      });
      setshowWordmarkCover(false); // remove the div the wordmark slid out from under

      //move wordmark to top-center of nav while scaling down
      await wordmarkControls.start({
        y: '0dvh',
        scale: 1,
        transition: { duration: 0.7, delay: 0.3, ease: 'easeInOut' },
      });

      //allows user to scroll
      if (!allowScroll) {
        setAllowScroll(true);
      }

      //slide wordmark from center to the left
      await wordmarkControls.start({
        x: '4vw',
        transition: { duration: 0.6, ease: 'easeInOut' },
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

    void sequence();
  }, [wordmarkControls, start]);

  return (
    <>
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ ...wordmarkStyle, scale: wordmarkScale.current }} // this is effectively the initial scale
        animate={wordmarkControls}
        initial={{
          rotate: -25,
          y: '90dvh',
          x: 'calc(50vw - 223px/2 - 4vw)',
        }}
        key="wordmark"
      >
        <img src="/meridianWordmark.svg" alt="Meridian Wordmark" />
      </motion.button>

      {showWordmarkCover && <div style={wordmarkCoverStyle}></div>}

      <motion.nav
        initial={{
          y: '105dvh',
          opacity: 0,
        }}
        style={navbarStyle}
        animate={navbarControls}
      >
        <motion.div
          className={`nav-links ${isDropdownOpen ? 'nav-active' : ''}`}
          style={linkStyle}
          initial="initial"
          animate="animate"
          variants={linkContainerVariants}
        >
          <GetInTouchButton onClick={handleOpenModal} className="link-disappear" style={buttonStyle} />
          <motion.a
            href="https://login.app.carta.com/credentials/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-hover link-disappear"
            variants={linkVariants}
          >
            Investor Portal
          </motion.a>
          <motion.a href="#investments" className="navbar-hover link-disappear" variants={linkVariants}>
            Investments
          </motion.a>
          <motion.a href="#team" className="navbar-hover link-disappear" variants={linkVariants}>
            Team
          </motion.a>
          <motion.a href="#principles" className="navbar-hover link-disappear" variants={linkVariants}>
            Principles
          </motion.a>
        </motion.div>
        {modalRoot.current &&
          ReactDOM.createPortal(
            <AnimatePresence>
              {isModalOpen && <GetInTouchModal onClose={handleCloseModal} isOpen={isModalOpen} />}
            </AnimatePresence>,
            modalRoot.current
          )}

        <div className="hamburger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div style={{ position: 'relative', width: 34, height: 34 }}>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -45,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: 90,
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <XNotTwitter width={34} height={34} className="nav-link" />
                </motion.div>
              )}
              {!isDropdownOpen && (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotate: 90,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -45,
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                >
                  <Hamburger width={34} height={34} className="nav-link" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <AnimatePresence>
          {isDropdownOpen && (
            <NavbarDropdown
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
              links={links}
              toggleModal={handleOpenModal}
            />
          )}
        </AnimatePresence>
      </motion.nav>

      <motion.div
        initial={{
          y: '105dvh',
          opacity: 0,
        }}
        style={fillStyle}
        animate={navbarControls}
      />
    </>
  );
};

export default Navbar;

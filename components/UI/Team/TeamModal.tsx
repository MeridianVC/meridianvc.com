'use client';

import FillBottomModal from '@/components/Structural/FillBottomModal';
import Header from '@/components/Text/Header';
import Text from '@/components/Text/Text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { navHeight } from '../../Structural/NavHeight';
import { XNotTwitter } from '../Icons/XNotTwitter';
import '../ui.css';

const contentStyle: React.CSSProperties = {
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  paddingTop: 'clamp(40px, 25vh, 28vh)',
  paddingBottom: '120px',
  alignContent: 'start',
  justifyContent: 'space-between',
  gap: 'clamp(20px, 40px, 40px)',
  width: 'clamp(70%, 90%, 1100px)',
  maxWidth: '1200px',
  height: `calc(100vh - ${navHeight} - 2px)`,
  overflowX: 'hidden',
  overflowY: 'auto',
};

const closeButtonStyle: React.CSSProperties = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  height: 'auto',
  cursor: 'pointer',
  zIndex: 10,
};

const titleSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  justifyContent: 'space-between',
  flexWrap: 'wrap-reverse',
};

const linkSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF5DC',
};

const linkStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  textDecoration: 'underline',
};

const smallArrowStyle: React.CSSProperties = {
  width: '6.5px',
  maxWidth: '6.5px',
  position: 'relative',
  top: '-4px',
};

const sectionStyle: React.CSSProperties = {
  flex: 1,
  zIndex: 2,
};

const titleStyle: React.CSSProperties = {
  position: 'relative',
  top: '-10px',
  backgroundColor: '#FFF5DC',
};

const detailIconStyleTop: React.CSSProperties = {
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: -1,
  minWidth: '200px',
};

const detailIconStyleBottom: React.CSSProperties = {
  position: 'fixed',
  right: 0,
  bottom: `calc(${navHeight} + ${navHeight}/3`,
  pointerEvents: 'none',
};

const imageContainerStyle: React.CSSProperties = {
  position: 'relative',
  zIndex: 1,
};

const imageStyle: React.CSSProperties = {
  width: 'clamp(150px, 25vw, 300px)',
  maxWidth: '300px',
  mixBlendMode: 'multiply',
};

const imageBackgroundFill: React.CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  backgroundColor: '#FFF5DC',
  zIndex: -1,
};

const backgroundFillStyle: React.CSSProperties = {
  backgroundColor: '#FFF5DC',
};

interface TeamModalProps {
  imageSrc: string;
  name: string;
  title: string;
  linkedin?: string;
  email?: string;
  medium?: string;
  focus: string;
  education: string;
  experienceP1: string;
  experienceP2?: string;
  onClose: () => void;
  isOpen: boolean; // Added to control visibility
}

const TeamModal: FC<TeamModalProps> = ({
  imageSrc,
  name,
  title,
  linkedin,
  email,
  medium,
  focus,
  education,
  experienceP1,
  experienceP2,
  onClose,
  isOpen,
}): ReactElement => {
  //this style needs isOpen parameter
  const modalStyle: React.CSSProperties = {
    display: isOpen ? 'flex' : 'none', // Control visibility
    position: 'fixed',
    top: `calc(${navHeight} - 2px)`,
    bottom: 'auto',
    left: 'calc(4vw - 1px)',
    right: 'calc(4vw  - 1px)',
    height: `calc(100vh - ${navHeight})`,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5DC',
    zIndex: 9,
    borderTop: 'solid 2px #444444',
    borderRight: 'solid 2px #444444',
    borderLeft: 'solid 2px #444444',
    borderBottom: 'none',
  };

  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  // This finds our div and attaches an HTML element to our document to be used by our portal for the modal
  useEffect(() => {
    const root = document.getElementById('modal-root');
    if (root instanceof HTMLElement) {
      setModalRoot(root);
    } else {
      console.error('Modal root element not found or is not an HTML element');
    }
  }, []);

  useEffect(() => {
    // Close modal on ESC key press
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {modalRoot
        ? ReactDOM.createPortal(
            <motion.div
              style={modalStyle}
              initial={{ y: '100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '100vh' }}
              transition={{ stiffness: 100, ease: 'easeInOut' }}
              className="mobile-modal">
              <div style={contentStyle} className="team-modal-flex">
                <button style={closeButtonStyle} onClick={onClose} className="modal-link">
                  <XNotTwitter width={34} height={34} />
                </button>
                <Image
                  src="/visionModalTop.svg"
                  alt="Vision Icon"
                  width={695}
                  height={537}
                  style={detailIconStyleTop}
                  className="modalDetail"
                  priority={true}
                />
                <Image
                  src="/visionModalBottom.svg"
                  alt="Vision Icon"
                  width={298}
                  height={213}
                  style={detailIconStyleBottom}
                  className="modalDetail"
                  priority={true}
                />
                <div style={imageContainerStyle} className="team-modal-content">
                  <Image src={imageSrc} alt={name} style={imageStyle} width={300} height={300} priority={true} />
                  {/* <img src={imageSrc} alt={name} style={imageStyle} /> */}
                  <div style={imageBackgroundFill}></div>
                </div>
                <div style={sectionStyle} className="team-modal-content">
                  <div style={titleSectionStyle}>
                    <div>
                      <Header type="H4" style={backgroundFillStyle}>
                        {name}
                      </Header>
                      <Text variant="SmallFranklin" style={titleStyle}>
                        {title}
                      </Text>
                    </div>
                    <div style={linkSectionStyle} className="team-modal-links">
                      {linkedin && (
                        <div style={linkStyle} className="modal-link">
                          <a href={linkedin} target="_blank" rel="noreferrer">
                            <Text variant="SmallFranklin">LinkedIn </Text>
                          </a>
                          <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle} />
                        </div>
                      )}
                      {email && (
                        <div style={linkStyle} className="modal-link">
                          <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                            <Text variant="SmallFranklin">Email</Text>
                          </a>
                          <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle} />
                        </div>
                      )}
                      {medium && (
                        <div style={linkStyle} className="modal-link">
                          <a href={medium} target="_blank" rel="noreferrer">
                            <Text variant="SmallFranklin">Medium</Text>
                          </a>
                          <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <Header type="H4" style={backgroundFillStyle}>
                      {' '}
                      Focus{' '}
                    </Header>
                    <Text variant="SmallFranklin" style={backgroundFillStyle}>
                      {' '}
                      {focus}{' '}
                    </Text>
                  </div>
                  <div>
                    <Header type="H4" style={backgroundFillStyle}>
                      {' '}
                      Education{' '}
                    </Header>
                    <Text variant="SmallFranklin" style={backgroundFillStyle}>
                      {' '}
                      {education}{' '}
                    </Text>
                  </div>
                </div>
                <div style={sectionStyle}>
                  <div>
                    <Header type="H4" style={backgroundFillStyle}>
                      {' '}
                      Experience{' '}
                    </Header>
                    <Text variant="SmallFranklin" style={backgroundFillStyle}>
                      {' '}
                      {experienceP1}{' '}
                    </Text>
                    <br />
                    <Text variant="SmallFranklin" style={backgroundFillStyle}>
                      {' '}
                      {experienceP2}{' '}
                    </Text>
                  </div>
                </div>
              </div>
              <FillBottomModal />
            </motion.div>,
            modalRoot,
          )
        : null}
    </>
  );
};

export default TeamModal;

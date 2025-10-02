import FillBottomModal from '@/components/Structural/FillBottomModal';
import Header from '@/components/Text/Header';
import Text from '@/components/Text/Text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect } from 'react';
import { navHeight } from '../../Structural/NavHeight';
import { XNotTwitter } from '../Icons/XNotTwitter';
import '../ui.css';

interface TeamModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const GetInTouchModal: FC<TeamModalProps> = ({ onClose, isOpen }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const modalStyle: React.CSSProperties = {
    display: isOpen ? 'flex' : 'none', // Control visibility
    position: 'fixed',
    top: `calc(${navHeight} - 2px)`,
    left: 'calc(4vw  - 1px)',
    right: 'calc(4vw  - 1px)',
    height: `calc(100lvh - ${navHeight})`,
    justifyContent: 'center',
    backgroundColor: '#FFF5DC',
    zIndex: 10,
    borderTop: 'solid 2px #444444',
    borderRight: 'solid 2px #444444',
    borderLeft: 'solid 2px #444444',
    borderBottom: 'none',
  };

  const contentStyle: React.CSSProperties = {
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 'clamp(40px, 10rem, 14rem)',
    paddingBottom: '120px',
    justifyContent: 'center',
    gap: 'clamp(20px, 40px, 40px)',
    maxWidth: '1200px',
    height: `calc(100lvh - ${navHeight})`,
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

  const sectionStyle: React.CSSProperties = {
    flexGrow: 1,
    backgroundColor: '#FFF5DC',
    zIndex: 2,
    minWidth: '300px',
    maxWidth: 'clamp(150px, 50%, 50%)',
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

  const sectionSpacing: React.CSSProperties = {
    marginBottom: 'clamp(10px, 5vw, 20px)',
  };

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: '100lvh' }}
      animate={{ y: 0 }}
      exit={{ y: '100lvh' }}
      transition={{ stiffness: 100, ease: 'easeInOut' }}
      style={modalStyle}
      className="get-in-touch-modal-flex mobile-modal"
    >
      <button onClick={onClose} style={closeButtonStyle} className="modal-link">
        <XNotTwitter width={34} height={34} />
      </button>
      <div style={contentStyle} className="get-in-touch-content-flex">
        <div style={imageContainerStyle}>
          <Image
            src="/shipWheel.png"
            alt="Ship Wheel"
            width={300}
            height={400}
            style={imageStyle}
            priority={true}
            quality={50}
          />
          <div style={imageBackgroundFill}></div>
        </div>
        <div style={sectionStyle}>
          <Header type="H2" marginBottom="clamp(10px, 1vw, 20px)">
            Get in Touch
          </Header>
          <div style={sectionSpacing}>
            <Header type="H4">Building?</Header>
            <Text variant="SmallFranklin">
              {' '}
              Submit your startup deck to{' '}
              <span className="get-in-touch-hover">
                <a href="mailto:info@meridianvc.com" style={{ textDecoration: 'underline' }}>
                  info@meridianvc.com
                </a>
              </span>
            </Text>
          </div>
          <div style={sectionSpacing}>
            <Header type="H4">About Meridian</Header>
            <Text variant="SmallFranklin">
              We empower audacious founders who are at the forefront of building durable technologies that positively
              impact humanity. We believe that visionary founders are the architects of the future, and it’s our
              privilege to support them. We focus on investing in B2B software companies from Pre-Seed to Series A.
            </Text>
          </div>
          <div style={sectionSpacing}>
            <Header type="H4">Stay in Touch</Header>
            <Text variant="SmallFranklin">
              Connect on{' '}
              <span className="get-in-touch-hover">
                <a
                  href="https://www.linkedin.com/company/meridian-vc/"
                  target="_blank"
                  style={{ textDecoration: 'underline' }}
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </Text>
          </div>
        </div>
      </div>
      <FillBottomModal />
    </motion.div>
  );
};

export default GetInTouchModal;

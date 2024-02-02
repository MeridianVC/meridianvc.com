import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { navHeight } from '../Structural/NavHeight';
import { motion } from 'framer-motion';
import FillBottomModal from '@/components/Structural/FillBottomModal';
import Header from '@/components/Text/Header';
import Text from '@/components/Text/Text';
import './ui.css';


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
        top: `calc(${navHeight} - 2px`,
        left: 'calc(4vw - 3px)',
        right: 'calc(4vw - 3px)',
        height: `calc(100vh - ${navHeight})`,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5DC',
        zIndex: 8,
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
        paddingTop: 'clamp(40px, 28vh, 28vh)',
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

    const smallArrowStyle: React.CSSProperties = {
        width: '6.5px',
        maxWidth: '6.5px',
        position: 'relative',
        top: '-4px'
    }

    const sectionStyle: React.CSSProperties = {
        flex: 1,
        backgroundColor: '#FFF5DC',
        zIndex: 2,
    };

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        zIndex: 1
    }

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
        zIndex: -1
    };
    
    
        if (!isOpen) {
            return null; // This ensures the function doesn't return void
          }
    
        return (
            <motion.div
            className="modalStyle"
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ type: 'easeInOut', stiffness: 100 }}
        >
            <button onClick={onClose} className="closeButtonStyle modal-link">
                <Image src="/ModalX.svg" alt="Close" width={34} height={34} />
            </button>
            <div className="contentStyle team-modal-flex">
                <div className="imageContainerStyle team-modal-content">
                <Image 
                    src='/shipWheel.png'
                    alt="Ship Wheel" 
                    width={300}
                    height={500}
                    style={imageStyle} 
                    // className="company-logo-color"
                />
                    <div className="imageBackgroundFill"></div>
                </div>
                <div className="sectionStyle team-modal-content">
                    {/* Content sections */}
                    <Header type="H4">Building?</Header>
                    <Text variant="SmallFranklin">Focus</Text>
                    {/* Additional sections */}
                </div>
            </div>
            <FillBottomModal />
        </motion.div>
          );
        };
        
export default GetInTouchModal
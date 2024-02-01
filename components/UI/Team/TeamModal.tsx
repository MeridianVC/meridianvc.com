import React, { FC, useEffect, ReactElement } from 'react';
import { navHeight } from '../Navbar';
import { motion } from 'framer-motion';
import FillBottomModal from '@/components/Structural/FillBottomModal';
import Header from '@/components/Text/Header';
import Text from '@/components/Text/Text';
import '../ui.css';

interface TeamModalProps {
    imageSrc: string;
    name: string;
    title: string;
    linkedin: string;
    email: string;
    medium: string;
    focus: string;
    education: string;
    experience: string;
    onClose: () => void;
    isOpen: boolean; // Added to control visibility
};

const TeamModal: FC<TeamModalProps> = ({ 
    imageSrc, 
    name, 
    title, 
    linkedin, 
    email, 
    medium, 
    focus, 
    education, 
    experience, 
    onClose, 
    isOpen }): ReactElement => {

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
        zIndex: 100,
        borderTop: 'solid 2px #444444',
        borderRight: 'solid 2px #444444',
        borderLeft: 'solid 2px #444444',
        borderBottom: 'none',
        overflowY: 'auto',
    };

    // needed to make content inside scrollable without messing up formatting of box
    const modalContentScroll: React.CSSProperties = {
        overflowY: 'auto',
        width: '100%',
        // height: '100%',
        position: 'relative',
        display: 'flex',
    }

    const contentStyle: React.CSSProperties = {
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'start',
        gap: '40px',
        width: 'clamp(60%, 80%, 90%)',
        // height: 'auto',
        maxHeight: `calc(100% - ${navHeight})`,
        height: `calc(100% - ${navHeight})`,

    };

    const closeButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: 'large',
        cursor: 'pointer',
    };

    const titleSectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        justifyContent: 'space-between',
    }

    const linkSectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
    }

    const linkStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'underline',
    }

    const smallArrowStyle: React.CSSProperties = {
        width: '6.5px',
        maxWidth: '6.5px',
        position: 'relative',
        top: '-4px'
    }

    const sectionStyle: React.CSSProperties = {
        flex: 1,
    };

    const titleStyle: React.CSSProperties = {
        position: 'relative',
        top: '-10px',
    }

    const detailIconStyleTop: React.CSSProperties = {
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: -1,
        minWidth: '200px',
    }

    const detailIconStyleBottom: React.CSSProperties = {
        position: 'fixed',
        right: 0,
        bottom: `calc(${navHeight} + ${navHeight}/3`,
        pointerEvents: 'none',
    }

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        zIndex: 1
    }

    const imageStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '200px',
        mixBlendMode: 'multiply',
    };

    const imageBackgroundFill: React.CSSProperties = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#FFF5DC',
        zIndex: -1
    }


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
        <motion.div
            style={modalStyle}
            initial={{ y: '100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '100vh' }}
            transition={{ type: 'easeInOut', stiffness: 100 }}
        >
            <div style={contentStyle}>
                <button style={closeButtonStyle} onClick={onClose}>X</button>
                <img src="./visionModalTop.svg" alt="vision icon" style={detailIconStyleTop} className="modalDetail"/>
                <img src="./visionModalBottom.svg" alt="vision icon" style={detailIconStyleBottom} className="modalDetail"/>
                <div style={modalContentScroll}>
                    <div style={imageContainerStyle}>
                        <img src={imageSrc} alt={name} style={imageStyle} />
                        <div style={imageBackgroundFill}></div>
                    </div>
                    <div style={sectionStyle}>
                        <div style={titleSectionStyle}>
                            <div>
                                <Header type="H4">{name}</Header>
                                <Text variant="SmallFranklin" style={titleStyle}>{title}</Text>
                            </div>
                            <div style={linkSectionStyle}>
                                <div style={linkStyle} className="modal-link">
                                    <a href={linkedin} target="_blank"><Text variant="SmallFranklin">LinkedIn </Text></a>
                                    <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle} />
                                </div>
                                <div style={linkStyle} className="modal-link">
                                    <a href={`mailto:${email}`} target="_blank"><Text variant="SmallFranklin">Email</Text></a>
                                    <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle}/>
                                </div>
                                <div style={linkStyle} className="modal-link">
                                    <a href={medium} target="_blank"><Text variant="SmallFranklin">Medium</Text></a>
                                    <img src="./smallArrow.svg" alt="small arrow" style={smallArrowStyle}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Header type="H4"> Focus </Header>
                            <Text variant="SmallFranklin"> {focus} </Text>

                        </div>
                        <div>
                            <Header type="H4"> Education </Header>
                            <Text variant="SmallFranklin"> {education} </Text>
                        </div>
                    </div>
                    <div style={sectionStyle}>
                        <div>
                            <Header type="H4"> Experience </Header>
                            <Text variant="SmallFranklin"> {experience} </Text>
                        </div>
                    </div>
                </div>
            </div>
            {/* <FillBottomModal /> */}
        </motion.div>
    );
};

export default TeamModal;

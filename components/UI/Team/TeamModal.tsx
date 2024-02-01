import React, { FC, useEffect } from 'react';

interface TeamModalProps {
    photo: string;
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

const TeamModal: FC<TeamModalProps> = ({ photo, name, title, linkedin, email, medium, focus, education, experience, onClose, isOpen }) => {

    const modalStyle: React.CSSProperties = {
        display: isOpen ? 'flex' : 'none', // Control visibility
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000, // Ensure it's above other content
    };

    const contentStyle: React.CSSProperties = {
        backgroundColor: '#FFF',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        gap: '20px',
        maxWidth: '800px',
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

    const imageStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '200px',
    };

    const sectionStyle: React.CSSProperties = {
        flex: 1,
    };

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



    // Other styles remain the same

    return (
        <div style={modalStyle}>
            <div style={contentStyle}>
                <button style={closeButtonStyle} onClick={onClose}>X</button>
                <div>
                    <img src={photo} alt={name} style={imageStyle} />
                </div>
                <div style={sectionStyle}>
                    <h3>{name}</h3>
                    <p>{title}</p>
                    <a href={linkedin}>LinkedIn</a>
                    <a href={`mailto:${email}`}>Email</a>
                    <a href={medium}>Medium</a>
                    <p>Focus: {focus}</p>
                    <p>Education: {education}</p>
                </div>
                <div style={sectionStyle}>
                    <h4>Experience</h4>
                    <p>{experience}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamModal;

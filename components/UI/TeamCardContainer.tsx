import { FC } from 'react'; // Ensure React is imported
import './ui.css';
import TextBlock from '../Text/Text';

const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFF5DC',
    padding: '20px',
    border: '2px solid #444444',
    maxWidth: '400px',
    minWidth: '275px',
    minHeight: '250px',
    flexBasis: '300px',
    flexGrow: 1,
    flexShrink: 1,
    height: 'auto',
    color: '#1E1E1E',
    overflow: 'hidden',
};

import React from 'react';
import './TeamCardContainer.css'; // Assuming your styles are in TeamCardContainer.css

const TeamCardContainer: React.FC = ({ children }) => {
    return (
        <div className="team-card-container">
            {children}
        </div>
    );
}

export default TeamCardContainer;

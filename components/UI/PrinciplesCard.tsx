// This component is used for each of the 3 principles cards

import { FC, ReactNode } from 'react';
import TextBlock from '../Text/TextBlock';

interface UICardProps {
    title: string;
    imagePath: string;
    numberDisplay: string;
    content: ReactNode;
}

const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFF5DC',
    padding: '20px',
    maxWidth: '300px',
    border: '2px solid #444444',
    width: '400px',
    height: '270px',
    color: '#1E1E1E',
    overflow: 'scroll',
};

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
};


const UICard: FC<UICardProps> = ({ title, imagePath, numberDisplay, content }) => {
    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <h3>{title}</h3>
                <img src={imagePath} alt="principle icon" />
                <span>{numberDisplay}</span>
            </div>
            <TextBlock variant="BodyBaskerville">{content}</TextBlock>
        </div>
    );
};

export default UICard;

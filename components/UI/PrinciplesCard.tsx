// This component is used for each of the 3 principles cards

import { FC, ReactNode } from 'react';
import Text from '../Text/Text';
import Header from '../Text/Header';

interface UICardProps {
    title: string;
    imagePath: string;
    numberDisplay: string;
    content: ReactNode;
}

const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFF5DC',
    padding: '20px',
    border: '2px solid #444444',
    maxWidth: '400px',
    minWidth: '275px',
    minHeight: '275px',
    flexBasis: '300px',
    flexGrow: 1,
    flexShrink: 1,
    height: 'auto',
    color: '#1E1E1E',
    overflow: 'hidden',

};

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '15px',
    flexShrink: 1,
    flexGrow: 1,
    margin: '0',
    marginBottom: 'clamp(10px, .5vh, 10px)',
};

const imgStyle: React.CSSProperties = {
    height: 'auto',
    width: '100%',
}


const UICard: FC<UICardProps> = ({ title, imagePath, numberDisplay, content }) => {
    return (
        <div style={cardStyle}>
            <div style={headerStyle}>
                <h3>{title}</h3>
                <img src={imagePath} alt="principle icon" style={imgStyle}/>
                <h3>{numberDisplay}</h3>
            </div>
            <Text variant="BodyBaskerville" style={{paddingLeft: '3px'}}>{content}</Text>
        </div>
    );
};

export default UICard;

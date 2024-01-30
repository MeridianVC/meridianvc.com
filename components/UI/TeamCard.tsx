import { FC } from 'react';
import './ui.css';
import Text from '../Text/Text';
import Header from '../Text/Header';

interface TeamCardProps {
    name: string;
    role: string;
    imageSrc: string;
};

const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFF5DC',
    padding: '20px',
    border: '2px solid #444444',
    maxWidth: '400px',
    minWidth: '275px',
    minHeight: '420px',
    flexBasis: '300px',
    flexGrow: 1,
    flexShrink: 1,
    height: 'auto',
    color: '#1E1E1E',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: 'clamp(5px, 4vh, 20px)',
    mixBlendMode: 'multiply',
}

const TeamCard: FC<TeamCardProps> = ({ name, role, imageSrc }) => {
    return (
        <div style={cardStyle} className="teamCardHeight">
            <img src={imageSrc} alt={`${name}`} style={imageStyle}/>
            <div>
                <Header type="H4" lineHeight="clamp(8px, 2.5vh, 40px"> {name}</Header>
                <Text variant="SmallFranklin" paddingLeft="3px">{role}</Text>
            </div>
        </div>
    );
}

export default TeamCard;

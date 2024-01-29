import { FC } from 'react'; // Ensure React is imported
import './ui.css';
import Text from '../Text/Text';

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
    minHeight: '250px',
    flexBasis: '300px',
    flexGrow: 1,
    flexShrink: 1,
    height: 'auto',
    color: '#1E1E1E',
    overflow: 'hidden',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: '10px',
    mixBlendMode: 'multiply',
}

const roleStyle: React.CSSProperties = {
    marginBottom: '5px'
}

const TeamCard: FC<TeamCardProps> = ({ name, role, imageSrc }) => {
    return (
        <div style={cardStyle}>
            <img src={imageSrc} alt={`${name}`} style={imageStyle}/>
            <h4>{name}</h4>
            <Text variant="SmallFranklin">{role}</Text>
        </div>
    );
}

export default TeamCard;

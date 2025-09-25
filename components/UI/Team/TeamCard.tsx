import Image from 'next/image';
import { FC } from 'react';
import Header from '../../Text/Header';
import Text from '../../Text/Text';
import '../ui.css';

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  onCardClick: () => void; // Callback function to handle click
}

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
}

const cardStyle: React.CSSProperties = {
  backgroundColor: '#FFF5DC',
  padding: '20px',
  border: '2px solid #444444',
  maxWidth: '400px',
  minWidth: '275px',
  minHeight: '370px',
  flexBasis: '350px',
  height: 'auto',
  color: '#1E1E1E',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  cursor: 'pointer',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  marginBottom: 'clamp(5px, 4vh, 20px)',
  mixBlendMode: 'multiply',
};

const TeamCard: FC<TeamCardProps> = ({ name, role, imageSrc, onCardClick }) => {
  return (
    <div style={cardStyle} className="team-card-hover" onClick={onCardClick}>
      <Image src={imageSrc} alt={name} width={300} height={300} style={imageStyle} fill={false} />
      <div>
        <Header type="H4" lineHeight="clamp(4px, 2.5vh, 40px)">
          {name}
        </Header>
        <Text variant="SmallFranklin" paddingLeft="3px">
          {role}
        </Text>
      </div>
    </div>
  );
};

export default TeamCard;

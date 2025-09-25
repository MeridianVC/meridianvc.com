// This component is used for each of the 3 principles cards

import Image from 'next/image';
import { FC, ReactNode } from 'react';
import Text from '../Text/Text';

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
  minHeight: '250px',
  flexBasis: '375px',
  flexShrink: 1,
  height: 'auto',
  color: '#1E1E1E',
  overflow: 'hidden',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: 'clamp(5px, 10px, 20px)',
  flexShrink: 1,
  margin: '0',
  marginBottom: 'clamp(10px, 1vh, 10px)',
};

const imgStyle: React.CSSProperties = {
  height: 'auto',
  width: '100%',
};

const UICard: FC<UICardProps> = ({ title, imagePath, numberDisplay, content }) => {
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3>{title}</h3>
        <Image src={imagePath} alt="Principle Icon" width={100} height={30} style={imgStyle} priority />
        <h3>{numberDisplay}</h3>
      </div>
      <Text variant="BodyBaskerville" style={{ paddingLeft: '3px' }}>
        {content}
      </Text>
    </div>
  );
};

export default UICard;

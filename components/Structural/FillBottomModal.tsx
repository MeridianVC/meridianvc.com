// This component is built to fill space horizontally and contribute to the inner box effect

import { FC } from 'react';
import { navHeight } from './NavHeight';

const FillBottomModal: FC = () => {
  const fillStyle: React.CSSProperties = {
    height: `calc(${navHeight} + ${navHeight}/3)`,
    position: 'fixed',
    bottom: '-2px',
    zIndex: 11,
    backgroundColor: '#FFF5DC',
    width: 'calc(100% + 4px)',
    borderTop: '2px solid #444444',
    boxSizing: 'border-box',
  };

  return <div style={fillStyle} />;
};

export default FillBottomModal;

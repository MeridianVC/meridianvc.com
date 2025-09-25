// This component is built to fill space vertically and contribute to the inner box effect

import { FC } from 'react';
import { navHeight } from './NavHeight';

const fillStyle = (side: 'left' | 'right'): React.CSSProperties => ({
  position: 'fixed',
  top: navHeight,
  bottom: 0,
  [side]: 0,
  width: '4%',
  height: '100%',
  zIndex: 2,
  backgroundColor: '#FFF5DC',
});

const FillVertical: FC<{ side: 'left' | 'right' }> = ({ side }) => {
  return <div style={fillStyle(side)} />;
};

export default FillVertical;

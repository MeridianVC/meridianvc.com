// This component is built to fill space vertically and contribute to the inner box effect

import React, { FC } from 'react';

const fillStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    position: 'fixed',
    top: 0,
    bottom: 0,
    [side]: 0,
    borderRight: side === 'left' ? '2px solid #444444' : undefined,
    borderLeft: side === 'right' ? '2px solid #444444' : undefined,
    width: '4%',
    zIndex: 10,
    backgroundColor:"#FFF5DC",
});

const FillVertical: FC<{ side: 'left' | 'right' }> = ({ side }) => {
    return <div style={fillStyle(side)} />;
};

export default FillVertical

import React, { FC } from 'react';

interface SpacerProps {
    height?: string;
}

const Spacer: FC<SpacerProps> = ({ height = '8rem' }) => {
    const dynamicHeight= 'clamp(12vh, 12vw, 13vh)' || height

    const style: React.CSSProperties = {
        height: dynamicHeight,
        display: 'block',
        backgroundColor: 'transparent',
        pointerEvents: 'none'
    };

    return <div style={style} />;
};

export default Spacer;

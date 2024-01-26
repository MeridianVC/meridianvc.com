import React, { FC } from 'react';

interface SpacerProps {
    height?: string;
}

const Spacer: FC<SpacerProps> = ({ height = '5rem' }) => {
    const style: React.CSSProperties = {
        height: height,
        display: 'block',
        backgroundColor: 'transparent',
        pointerEvents: 'none'
    };

    return <div style={style} />;
};

export default Spacer;

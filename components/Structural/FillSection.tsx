// This component is built to fill space horizontally and perfectly cover the map at the grey border edge

import { FC } from 'react';

const FillSection: FC = () => {

    const borderThickness = '2px';

    const fillStyle: React.CSSProperties = {
        height: '100%', // will grow to section height
        position: 'absolute',
        top: 0,
        zIndex: -1,
        backgroundColor: '#FFF5DC',
        width: 'calc(100% + 4px)',
        left: '-2px',
        borderBottom: `${borderThickness} solid #444444`,
        borderTop: `${borderThickness} solid #444444`,
        boxSizing: 'content-box'
    };

    return <div style={fillStyle} />;
};

export default FillSection;
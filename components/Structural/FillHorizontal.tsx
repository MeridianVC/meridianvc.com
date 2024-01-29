// This component is built to fill space horizontally and contribute to the inner box effect

import { FC } from 'react';
import { navHeight } from '../UI/Navbar';

interface FillHorizontalProps {
    behind?: boolean; // Add a new prop for the "behind" logic
}

const FillHorizontal: FC<FillHorizontalProps> = ({behind = false}) => {

    const borderThickness = '2px';

    const fillStyle: React.CSSProperties = {
        height: behind? `calc(${navHeight} - ${borderThickness})` : `${navHeight}`, // This  moves down to better fit vertical elements
        position: 'fixed',
        top: 0,
        zIndex: behind ? 10 : 11, // "No you don't understand, it goes to 11."
        backgroundColor: "#FFF5DC",
        width: behind ? '100%' : undefined,
        left: behind ? '0' : `calc(4vw - ${borderThickness}/2)`, // These ensure the width of the line overlaps..
        right: behind ? '0' : `calc(4vw - ${borderThickness}/2)`, // .. in the center of the vertical lines
        borderBottom: behind ? undefined : `${borderThickness} solid #444444`,
        boxSizing: behind ? 'content-box' : 'border-box'
    };

    return <div style={fillStyle} />;
};

export default FillHorizontal;

import { FC } from 'react';
import { navHeight } from './NavHeight';

interface SpacerProps {
    height?: string;
}

const Spacer: FC<SpacerProps> = ({ height = navHeight }) => { //default height is navHeight

    const style: React.CSSProperties = {
        height: height, //otherwise height is defined as a prop
        display: 'block',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        width: '100%',
    };

    return <div style={style} />;
};

export default Spacer;

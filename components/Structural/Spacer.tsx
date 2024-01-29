import { FC } from 'react';
import { navHeight } from '../UI/Navbar';

interface SpacerProps {
    height?: string;
}

const Spacer: FC<SpacerProps> = ({ height = navHeight }) => {

    const style: React.CSSProperties = {
        height: height,
        display: 'block',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        width: '100%',
    };

    return <div style={style} />;
};

export default Spacer;

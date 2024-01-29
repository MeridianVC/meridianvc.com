import { FC, ReactNode } from 'react';

interface CardWrapperProps {
    children: ReactNode;
}

const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
};

const CardWrapper: FC<CardWrapperProps> = ({ children }) => {
    return (
        <div style={wrapperStyle}>
            {children}
        </div>
    );
};

export default CardWrapper;

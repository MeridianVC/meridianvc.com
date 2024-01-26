import { FC, ReactNode } from 'react';

interface UICardProps {
    title?: string;
    content?: ReactNode;
}

const cardStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "10px",
    maxWidth: "300px",
};

const UICard: FC<UICardProps> = ({ title, content }) => {
    return (
        <div style={cardStyle}>
            {title && <h3>{title}</h3>}
            <div>{content}</div>
        </div>
    );
};

export default UICard;

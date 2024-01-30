import { FC, ReactNode } from 'react'; // Ensure React is imported

interface TeamCardContainerProps {
    children: ReactNode;
    style?: React.CSSProperties;
}

const cardContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(1vw, 3vw, 4vw)',
    flexWrap: 'wrap',
    margin: '0 clamp(5vw, 5vw, 7vw)',
  }

const TeamCardContainer: FC<TeamCardContainerProps> = ({ children, style }) => {
    const combinedTextStyle = {
        ...cardContainerStyle,
        ...style
      };

    return (
        <div style={combinedTextStyle}>
            {children}
        </div>
    );
}

export default TeamCardContainer;

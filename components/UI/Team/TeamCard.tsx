import Link from 'next/link';
import { FC } from 'react';
import Header from '../../Text/Header'; // Adjust the import path as necessary
import Text from '../../Text/Text'; // Adjust the import path as necessary

interface TeamCardProps {
    name: string;
    role: string;
    imageSrc: string;
};

const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFF5DC',
    padding: '20px',
    border: '2px solid #444444',
    maxWidth: '400px',
    minWidth: '275px',
    minHeight: '420px',
    flexBasis: '350px',
    height: 'auto',
    color: '#1E1E1E',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const imageStyle: React.CSSProperties = {
    width: '100%',
    marginBottom: 'clamp(5px, 4vh, 20px)',
    mixBlendMode: 'multiply',
};

const TeamCard: FC<TeamCardProps> = ({ name, role, imageSrc }) => {
    // Dynamic path for the team modal
    const teamModalPath = `/team/${encodeURIComponent(name)}`;

    return (
        <Link href={teamModalPath}>
            <div style={cardStyle} className="teamCardHeight"> {/* Use <a> with style if needed */}
                <img src={imageSrc} alt={name} style={imageStyle} />
                <div>
                    <Header type="H4" lineHeight="clamp(4px, 2.5vh, 40px)">{name}</Header>
                    <Text variant="SmallFranklin" paddingLeft="3px">{role}</Text>
                </div>
            </div>
        </Link>
    );
};

export default TeamCard;

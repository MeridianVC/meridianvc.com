import { FC } from 'react';
import Text from '../Text/Text';
import './ui.css'

interface LatestContentCardProps {
    author: string;
    title: string;
    imagePath: string;
    date: Date;
    source: string;
    link: string;
}

const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFF5DC',
    paddingTop: 'clamp(5px, 1.5vh, 30px)',
    paddingLeft: 'clamp(5px, 1.5vh, 30px)',
    paddingRight: 'clamp(5px, 1.5vh, 30px)',
    border: '2px solid #444444',
    maxWidth: '600px',
    minWidth: '300px',
    flexBasis: '475px',
    height: 'auto',
    color: '#1E1E1E',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
};

const imageContainerStyle: React.CSSProperties = {
    width: '40%',
    height: '100%',
    overflow: 'hidden',
}

const textStyle: React.CSSProperties = {
    width: '60%',
}

const cardMain: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: 'clamp(10px, 1vw, 30px)',
    height: '100%',
}

const imageStyle: React.CSSProperties = {
    mixBlendMode: 'multiply',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
}

const linkStyle: React.CSSProperties = {
    position: 'relative',
    alignSelf: 'end',
    paddingBottom: 'clamp(5px, .8vh, 15px)'
}

const contentStyle: React.CSSProperties = {
    paddingBottom: 'clamp(2px, .25vh, 20px)',
}

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};

const LatestContentCard: FC<LatestContentCardProps> = ({ author, title, imagePath, date, source, link }) => {
    const testDate = formatDate(new Date(date));
    
    return (
        <a href={link} style={cardStyle} target="_blank" rel="noopener" className="content-card-hover">
                <div style={cardMain}>
                    <div style={imageContainerStyle}>
                        <img src={imagePath} alt="principle icon" style={imageStyle}/>
                    </div>
                    <div style={textStyle}>
                        <Text variant="SmallFranklin" style={contentStyle}>{author}</Text>
                        <Text variant="BodyBaskerville">{title}</Text>
                    </div>
                </div>
                <Text variant="ExtraSmallFranklin" style={linkStyle}>{testDate} – <span style={{textDecoration: "underline"}}>{source}</span></Text>
        </a>
    );
};

export default LatestContentCard;

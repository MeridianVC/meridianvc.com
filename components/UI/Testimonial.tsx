import { FC } from 'react';
import Text from '../Text/Text';
import Image from 'next/image';
import './ui.css';

interface TestimonialProps {
    alignment: 'left' | 'right';
    statement: string;
    name: string;
    company: string;
    imageSrc: string;
    left: string;
}

const Testimonial: FC<TestimonialProps> = ({ alignment, statement, name, company, imageSrc, left }) => {
    const isLeftAligned = alignment === 'left';

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isLeftAligned ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: 'clamp(20px, 30px, 40px)',
        padding: '10px'
    };

    const statementStyle: React.CSSProperties = {
        position: 'relative',
        textAlign: isLeftAligned ? 'left' : 'right',
        marginLeft: isLeftAligned ? undefined : 'auto',
        marginRight: isLeftAligned ? 'auto' : undefined,
        width: '55%',
        maxWidth: '1300px',
    };

    const nameStyle: React.CSSProperties = {
        marginTop: '1rem',
        textAlign: isLeftAligned ? 'left' : 'right',
        marginLeft: isLeftAligned ? '0px' : 'auto'
    };

    const companyStyle: React.CSSProperties = {
        textAlign: isLeftAligned ? 'left' : 'right',
    };

    const imageStyle: React.CSSProperties = {
        width: 'clamp(50px, 15vw, 110px)',
        height: 'auto',
        borderRadius: '50%',
        objectFit: 'cover',
        marginTop: 'clamp(20px, calc(10rem - 16vw), 100px)', // This marginTop will increase as the screen-width decreases
        mixBlendMode: 'multiply',
    };

    const leftQuoteStyle: React.CSSProperties = {
        color: '#E64702',
        fontSize: '45px',
        position: 'relative',
        top: '10px',
        left: '-5px',
        display: 'inline-block'

    }

    const rightQuoteStyle: React.CSSProperties = {
        color: '#E64702',
        fontSize: '45px',
        position: 'absolute',
        left: `${left}`,
        top: 0,
        display: 'inline-block'
    }

    const lastWordStyle: React.CSSProperties = {
        whiteSpace: 'nowrap', 
        position: 'relative',
    }

    // This work ensures the right quote text decoration never ends up on a line alone
    let words = statement.trim().split(/\s+/);
    words.pop();
    let trimmedStatement = words.join(' ');
    let lastWord = statement.trim().split(/\s+/).pop();

    return (
        <div style={containerStyle}>
            <Image 
                src={imageSrc} 
                alt={name}
                width={100}
                height={100}
                style={imageStyle} 
            />
            <div className="testimonialContent">
                <Text variant="BodyBaskerville" className="testimonialStatement" style={statementStyle}>
                    <span style={leftQuoteStyle}>“</span>
                        {trimmedStatement + ' '}
                    <span style={lastWordStyle}>{lastWord}<span style={rightQuoteStyle}>”</span></span>
                </Text>
                <div>
                    <Text variant="BodyBaskerville" style={nameStyle}>{name} </Text>
                    <Text variant="ExtraSmallFranklin" style={companyStyle}>{company}</Text>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

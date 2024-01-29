import { FC } from 'react';
import TextBlock from '../Text/TextBlock';
import './ui.css';

interface TestimonialProps {
    alignment: 'left' | 'right';
    statement: string;
    name: string;
    company: string;
    imageSrc: string;
}

const Testimonial: FC<TestimonialProps> = ({ alignment, statement, name, company, imageSrc }) => {
    const isLeftAligned = alignment === 'left';

    const testimonialSmallContainer = 'testimonialSmallContainer';
    const testimonialSmallStatement = 'testimonialSmallStatement';
    const testimonialFounderPhotoRight = 'testimonialFounderPhotoRight';
    const testimonialFounderPhotoLeft = 'testimonialFounderPhotoLeft';

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isLeftAligned ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: '20px',
        padding: '20px'
    };

    const statementStyle: React.CSSProperties = {
        color: '#3f3f3f',
        fontSize: '1.25rem',
        lineHeight: '1.4',
        position: 'relative',
        textAlign: isLeftAligned ? 'left' : 'right',
        marginLeft: isLeftAligned ? undefined : 'auto',
        marginRight: isLeftAligned ? 'auto' : undefined,
        width: '65%',
        top: 0,
    };

    const nameStyle: React.CSSProperties = {
        marginTop: '1rem',
        textAlign: isLeftAligned ? 'left' : 'right',
    };

    const companyStyle: React.CSSProperties = {
        textAlign: isLeftAligned ? 'left' : 'right',
    };

    const imageStyle: React.CSSProperties = {
        width: 'clamp(70px, 100px, 100px)',
        height: 'auto',
        borderRadius: '50%',
        objectFit: 'cover',
        marginTop: '10px',
        mixBlendMode: 'multiply',
    };

    return (
        <div style={containerStyle} className={testimonialSmallContainer}>
            <img src={imageSrc} alt={name} style={imageStyle} className={isLeftAligned ? testimonialFounderPhotoLeft : testimonialFounderPhotoRight}/>
            <div>
                <div style={statementStyle} className={testimonialSmallStatement}>“{statement}”</div>
                <div style={nameStyle}>{name}</div>
                <TextBlock variant="SmallFranklin" style={companyStyle}>{company}</TextBlock>
            </div>
        </div>
    );
};

export default Testimonial;

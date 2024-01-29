import { FC } from 'react';
import Text from '../Text/Text';
import Header from '../Text/Header';
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

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isLeftAligned ? 'row' : 'row-reverse',
        alignItems: 'flex-start',
        gap: '20px',
        padding: '20px'
    };

    const statementStyle: React.CSSProperties = {
        position: 'relative',
        textAlign: isLeftAligned ? 'left' : 'right',
        marginLeft: isLeftAligned ? undefined : 'auto',
        marginRight: isLeftAligned ? 'auto' : undefined,
        width: '55%',
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
        marginTop: '15px',
        mixBlendMode: 'multiply',
    };

    return (
        <div style={containerStyle}>
            <img src={imageSrc} alt={name} style={imageStyle} className={isLeftAligned ? "testimonialFounderLeft" : "testimonialFounderPhotoRight"}/>
            <div className="testimonialContent">
                <Header type="H5" className="testimonialStatement" style={statementStyle} >“{statement}”</Header>
                <div>
                    <Header type="H6" style={nameStyle}>{name}</Header>
                    <Text variant="SmallFranklin" style={companyStyle}>{company}</Text>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;

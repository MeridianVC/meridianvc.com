import { FC } from 'react';
import CardWrapper from './CardWrapper'; // Adjust the import path as needed

interface FounderStatementProps {
    alignment: 'left' | 'right';
    statement: string;
    name: string;
    company: string;
    imageSrc: string;
}

const FounderStatement: FC<FounderStatementProps> = ({ alignment, statement, name, company, imageSrc }) => {
    const isLeftAligned = alignment === 'left';

    const statementStyle: React.CSSProperties = {
        color: '#3f3f3f',
        fontSize: '1.25rem',
        lineHeight: '1.4',
        textAlign: isLeftAligned ? 'left' : 'right',
    };

    const nameStyle: React.CSSProperties = {
        fontWeight: 'bold',
        fontSize: '1rem',
        marginTop: '1rem',
        textAlign: isLeftAligned ? 'left' : 'right',
    };

    const companyStyle: React.CSSProperties = {
        fontSize: '0.875rem',
        marginTop: '0.5rem',
        textAlign: isLeftAligned ? 'left' : 'right',
    };

    const imageStyle: React.CSSProperties = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
    };

    return (
        <CardWrapper>
            {isLeftAligned ? (
                <img src={imageSrc} alt={name} style={imageStyle} />
            ) : null}
            <div>
                <div style={statementStyle}>{statement}</div>
                <div style={nameStyle}>{name}</div>
                <div style={companyStyle}>{company}</div>
            </div>
            {!isLeftAligned ? (
                <img src={imageSrc} alt={name} style={imageStyle} />
            ) : null}
        </CardWrapper>
    );
};

export default FounderStatement;

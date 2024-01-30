import { FC } from 'react';

const Footer: FC = () => {
    const borderThickness = '2px';

    const footerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#FFF5DC',
        borderTop: `${borderThickness} solid #444444`,
        borderBottom: `${borderThickness} solid #444444`,
        padding: '20px',
        boxSizing: 'border-box',
        position: 'relative', // if you need to position something absolutely within
        fontSize: '0.85rem', // Adjust font size as necessary
        width: 'calc(100% + 4px)',
        left: '-2px',
        zIndex: 9
    };

    const sectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '20%', // Adjust the width as necessary
    };

    const stampStyle: React.CSSProperties = {
        marginTop: '20px', // Adjust the margin as necessary
        width: '200px', // Adjust the width as necessary
    };

    // Add additional specific styles for other sections if needed

    return (
        <div style={footerStyle}>
            <div style={sectionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div style={sectionStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div style={sectionStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad cupiditate necessitatibus inventore veniam officia ipsam minus quidem recusandae? Quo, asperiores! Laborum fugiat porro quisquam adipisci est facilis exercitationem rem.
            </div>
            <div style={sectionStyle}>
                {/* Links and icons go here */}
            </div>
            
            <div style={sectionStyle}>
                {/* Prepared By text goes here */}
                <img src="./stampBoston.svg" alt="Boston Stamp" style={stampStyle} />
                <img src="./stampUtah.svg" alt="Utah Stamp" style={stampStyle} />
            </div>
        </div>
    );
};

export default Footer;

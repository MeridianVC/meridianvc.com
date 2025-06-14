import { FC } from 'react';
import Image from 'next/image';
import Text from '../Text/Text';

const Footer: FC = () => {

    const footerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF5DC',
        borderTop: '2px solid #444444',
        paddingTop: 'clamp(15px, 4vw, 60px)',
        paddingBottom: '100px',
        paddingLeft: '2px',
        paddingRight: '2px',
        boxSizing: 'border-box',
        position: 'relative',
        fontSize: '0.85rem',
        width: 'calc(100% + 4px)',
        left: '-2px',
        zIndex: 9,
        gap: '25px',
    };

    const sectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(5px, 10px, 15px)',
        flexGrow: 1,
        flexShrink: 1,
        width: 'fit-content',
    }

    const linkGroupStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(5px, 10px, 15px)',
        flexShrink: 0,
        width: 'fit-content',
    }

    const rightContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 'clamp(5px, 5vw, 20px)',
        gap: 'clamp(20px, 40px, 60px)',
        justifyContent: 'flex-start',
        maxWidth: '30%',
    };

    const leftContainerStyle: React.CSSProperties = {
        maxWidth: '70%',
        display: 'flex',
        flexDirection: 'row',
        gap: 'clamp(20px, 3vw, 60px)'
    }

    const linkStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        justifyContent: 'flex-start',
        flexShrink: 0,
        width: '100%'
    }

    const preparedBySectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        paddingRight: 'clamp(0px, 4vw, 40px)',
    }

    const bottomBadgeStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        paddingBottom: '40px'
    }

    const stampStyle: React.CSSProperties = {
        maxWidth: '300px'
    }

    return (
    <div>
        <footer style={footerStyle} className="footer">
            <div style={leftContainerStyle} className="footer-left-flex-column">
                <div style={sectionStyle} className="footer-small-remove">
                    <Text variant="BodyBaskerville">
                        Legal
                    </Text>
                    <Text variant="SmallBaskerville">
                        The Founders and other third-parties have not received compensation for this feedback and have not invested in the Fund, although the Founders and other third-parties may have an incentive to make a positive statement due to their ongoing relationship with the firm. The companies identified do not represent all of the companies purchased, sold, or recommended for portfolios advised by the Firm. The Firm&apos;s complete track record and companies comprising the portfolio of each fund is available upon request. The reader should not assume that all investments in the companies identified were or will be profitable. Past performance is not indicative of future performance.
                    </Text>
                </div>
                <div style={sectionStyle}>
                    <Text variant="BodyBaskerville">
                        About
                    </Text>
                    <Text variant="SmallBaskerville" style={{marginBottom: "10px"}}>
                        At Meridian, we empower audacious founders who are at the forefront of building durable technologies that positively impact humanity. We believe that visionary founders are the architects of the future, and it’s our privilege to support them. As an early-stage venture capital firm, we specialize in investing in B2B software companies from Pre-Seed to Series A.
                    </Text>     
                    <Text variant="BodyBaskerville">
                        Ethos
                    </Text>
                    <Text variant="SmallBaskerville">
                        Integrity, relentless work ethic, entrepreneurship, accountability, and a commitment to learning.
                    </Text>  
                </div>
                <div style={linkGroupStyle}>
                    <Text variant="BodyBaskerville">
                        Links
                    </Text>
                    <a href='https://www.linkedin.com/company/meridian-vc/' target="_blank" style={linkStyle} className="footer-link">
                        <Image 
                            src="/linkedin.svg"
                            alt="Linkedin"
                            width={19}
                            height={19}
                        />
                        Connect on Linkedin
                    </a>
                    <a href='mailto:info@meridianvc.com' target="_blank" style={linkStyle} className="footer-link">
                        <Image 
                            src="/email.svg"
                            alt="Email"
                            width={19}
                            height={19}
                        />
                        Email us
                    </a>
                    <a href='https://medium.com/@devon_45585' target="_blank" style={linkStyle} className="footer-link">
                        <Image 
                            src="/medium.svg"
                            alt="Medium"
                            width={19}
                            height={19}
                        />
                        Read our writing
                    </a>
                </div>
            </div>
            <div style={rightContainerStyle} className ="footer-right-flex-column">
                <img src="Stamps.jpg" alt="stamps"style={stampStyle}/>
                <div style= {preparedBySectionStyle} className="prepared-by-section">
                    <Text variant="BodyBaskerville">Prepared By:</Text>
                    <a href='https://www.linkedin.com/in/devon-gethers/' target="_blank" className="footer-link">
                        <Image 
                            src="/signatureDevon.svg"
                            alt="Devon Signature"
                            width={140}
                            height={28}
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/kevinkarltonhaney/' target="_blank" className="footer-link">
                        <Image 
                            src="/signatureKarlton.svg"
                            alt="Karlton Signature"
                            width={140}
                            height={28}
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/andmckay/' target="_blank" className="footer-link">
                        <Image 
                            src="/signatureMckay.svg"
                            alt="Mckay Signature"
                            width={140}
                            height={28}
                        />
                    </a>
                </div>
            </div>
            <div style={bottomBadgeStyle}>
                <Image 
                    src="/MVbadge.svg"
                    alt="MV Badge"
                    width={52}
                    height={29}
                />
                {new Date().getFullYear()} Meridian Ventures &ndash; All Rights Reserved
            </div>
        </footer>
    </div>
    );
};

export default Footer;

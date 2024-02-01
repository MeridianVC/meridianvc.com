// This is the main entrypoint for our application
import './globals.css';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from '@/components/Globe/GlobePlaceholder';
import FillHorizontal from '@/components/Structural/FillHorizontal';
import FillVertical from '@/components/Structural/FillVertical';
import Navbar from '@/components/UI/Navbar';
import Header from '@/components/Text/Header';
import Spacer from '@/components/Structural/Spacer';
import Section from '@/components/Structural/Section';
import PrinciplesCard from '@/components/UI/PrinciplesCard';
import Testimonial from '@/components/UI/Testimonial';
import FillSection from '@/components/Structural/FillSection';
import TeamCard from '@/components/UI/Team/TeamCard';
import TeamCardContainer from '@/components/UI/Team/TeamCardContainer';
import CompanyGrid from '@/components/UI/CompanyGrid';
import LatestContentCard from '@/components/UI/LatestContentCard';
import Footer from '@/components/UI/Footer';

const teamMembers = [
  {
      name: "Devon Gethers",
      role: "Managing Partner",
      imageSrc: "./headshotDevon.png",
      photo: "path/to/photoDevon.jpg",
      title: "Managing Partner",
      linkedin: "https://linkedin.com/in/devongethers",
      email: "devongethers@example.com",
      medium: "https://medium.com/@devongethers",
      focus: "Devon allocates his time to identifying and investing in startups with high growth potential, portfolio construction, capital raising, and managing key relationships with portfolio companies.",
      education: "Devon holds a B.S. in Finance from the University of Utah, where he graduated Summa Cum Laude. He is currently a candidate at Harvard Business School, Class of 2025.",
      experience: "Prior to co-founding Meridian, Devon served as the CEO and Founder at EarlyAdmit, an EdTech startup dedicated to improving educational and professional outcomes for underserved minorities. This commitment culminated in its acquisition by PE in 2023. During his tenure at Mercato Partners, a $2B AUM growth equity firm investing in Enterprise SaaS and Branded Consumer, further showcased his impact and contributions. Here, Devon reviewed emerging investment opportunities, supported the team’s investment efforts by conducting financial analysis, due diligence, and industry research, supported senior investors with a $400M fundraise, and closely collaborated with portfolio companies on strategic initiatives. This blend of entrepreneurial operator success and investment expertise positions Devon as a preferred strategic partner to founders."
  },
  {
      name: "Karlton Haney",
      role: "Managing Partner",
      imageSrc: "/headshotKarlton.png",
      photo: "path/to/photoKarlton.jpg",
      title: "Managing Partner",
      linkedin: "https://linkedin.com/in/karltonhaney",
      email: "karltonhaney@example.com",
      medium: "https://medium.com/@karltonhaney",
      focus: "Strategic Planning",
      education: "Stanford University",
      experience: "12 years in strategic roles"
  },
  {
      name: "Dallin Anderson",
      role: "Advisor",
      imageSrc: "./headshotDallin.png",
      photo: "path/to/photoDallin.jpg",
      title: "Advisor",
      linkedin: "https://linkedin.com/in/dallinanderson",
      email: "dallinanderson@example.com",
      medium: "https://medium.com/@dallinanderson",
      focus: "Financial Advising",
      education: "MIT",
      experience: "10 years in finance"
  },
  {
      name: "Heather Harmon",
      role: "Advisor",
      imageSrc: "./headshotHeather.png",
      photo: "path/to/photoHeather.jpg",
      title: "Advisor",
      linkedin: "https://linkedin.com/in/heatherharmon",
      email: "heatherharmon@example.com",
      medium: "https://medium.com/@heatherharmon",
      focus: "Marketing",
      education: "University of California, Berkeley",
      experience: "8 years in marketing"
  },
  {
      name: "Zach Thomas",
      role: "Advisor",
      imageSrc: "./headshotZach.png",
      photo: "path/to/photoZach.jpg",
      title: "Advisor",
      linkedin: "https://linkedin.com/in/zachthomas",
      email: "zachthomas@example.com",
      medium: "https://medium.com/@zachthomas",
      focus: "Technology Development",
      education: "Carnegie Mellon University",
      experience: "10 years in tech industry"
  }
];

// dynamically load the globe only when DOM is present
const Globe = dynamic(() => import('../components/Globe/Globe'), {
    ssr: false,
    loading: () => <PlaceholderMap/> // loads placeholder while 3D globe renders
});

const FundSelector = dynamic(() => import('@/components/UI/PortfolioFundSelect'), {
  ssr: false,
  loading: () => <div>Content loading...</div>
})

const mainContentStyle: React.CSSProperties = {
  width: '92%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  backgroundColor: 'transparent',
  top: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  gap: '20px',
};

const globeStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -2
};

const landingStyle: React.CSSProperties = {
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const compassStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(5.5rem, 8vw, 8rem)',
  marginRight: 'clamp(2vw, 7vw, 20vw)',
  marginTop: 'clamp(2vh, 5vh, 10vh)',
  marginLeft: 'auto',
};  

const legendStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(18rem, 60vw, 33rem)',
  position: 'relative',
  marginRight: 'clamp(5vw, 8vw, 20vw)',
  marginBottom: 'clamp(5vh, 10vh, 10vh)',
  marginLeft: 'auto',
  marginTop: 'auto',
  backgroundColor: 'transparent',
};

const principlesSectionStyle: React.CSSProperties = {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const principleCardGap = 'principle-card-gap';

const principleCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(30px, 2vw, 2vw)',
  flexWrap: 'wrap',
  margin: '0 clamp(30px, 5vw, 25vw)'
}

const principlesHeader: React.CSSProperties = {
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 'clamp(2vh, 3vh, 20vh)',
  alignItems: 'center'
}

const foundersSectionStyle: React.CSSProperties = {
  zIndex: 9, // to sit over top of all site content including the vertical bars
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const portfolioSectionStyle: React.CSSProperties = {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const latestSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
}

const latestCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  padding: '20px',
  maxWidth: '1500px',
  margin: '0 auto',
}

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <FillVertical side='left' />
      <FillVertical side='right' />
      <FillHorizontal />
      <FillHorizontal behind />
        <main style={mainContentStyle}>
          <Section id="section1_landing" style={landingStyle}>
            <div>
                <Spacer/>
                <img src="./compass.svg" alt="Compass" style={compassStyle}/>
                <Header type='H1' paddingLeft='clamp(3vw, 3vw, 20px)' marginTop='clamp(5px, 5vh, 10vh)' marginBottom='clamp(2vh, 5vh, 8vh)'> 
                    Championing bold ideas and visionary founders to fuel world-changing innovation.
                </Header>
            </div>
            <div>
                  <img src="./legend.svg"alt="Legend"style={legendStyle} className="legend"/>
            </div>
          </Section>
          <Section id="section2_principles" style={principlesSectionStyle} isFullHeight={false}>
              <Spacer height={'10vh'}/>
              <div style={principlesHeader}>
                    <Header type='H1' isCentered={true} marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 4vh, 4vh)'> 
                        Guiding Principles 
                    </Header>
              </div>
              <div style={principleCardContainerStyle} className={principleCardGap}>
                  <PrinciplesCard 
                    title="Vision"
                    imagePath="/vision.svg"
                    numberDisplay="01"
                    content="We invest in bold leaders who exhibit a rare blend of imagination and execution. Leaders who see what others don’t and courageously venture into the unknown."
                  />
                  <PrinciplesCard 
                    title="Collaboration"
                    imagePath="/collaboration.svg"
                    numberDisplay="02"
                    content="Our investment goes beyond capital. We invest time in our founders – helping chart the course, acquire key talent, and make connections with key partners along the journey."
                  />
                  <PrinciplesCard 
                    title="Growth"
                    imagePath="/growth.svg"
                    numberDisplay="03"
                    content="As former operators, we understand how to build and scale startups. We work with our founders to safeguard against common missteps and position our companies for growth-stage capital."
                  />
              </div>
              <Spacer height={'30vh'}/>
          </Section>
          <Section id="section3_founders" style={foundersSectionStyle} isFullHeight={false}>
              <Header type='H1' isCentered={true} marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 4vh, 7vh)'> 
                  What Founders Say 
              </Header>
              <div>
                  <Testimonial 
                    alignment="left"
                    statement="Meridian added value from day one. Devon and Karlton stand out among their peers as diligent and insightful. Their contributions have attracted top-tier investors, refined our financing, and improved our GTM and product strategy."
                    name="Cody Eddings"
                    company="SnapRefund"
                    imageSrc="./headshotCodyEddings.png"
                  />
                  <Testimonial 
                    alignment="right"
                    statement="Meridian immediately impressed us with their unwavering support. Devon and Karlton's passion for adding value is illustrated through their consistent and meaningful assistance, displaying a level of integrity unmatched in VC. Their involvement in key areas such as fundraising, customer growth, and partnerships has made them the most active contributors on our cap table."
                    name="Ben Wunderman"
                    company="Packsmith"
                    imageSrc="./headshotBenWunderman.png"
                  />
                  <Testimonial 
                    alignment="left"
                    statement="The team at Meridian consistently proves their worth. Their hustle and engagement with portfolio companies have yielded tangible benefits for us, including introductions to investors and new customers for our pipeline. Their provision of resources, potential hires, and market insights has been invaluable. Cannot speak highly enough of these guys!"
                    name="Atikh Bana"
                    company="Acctual"
                    imageSrc="./headshotAtikh.png"
                  />
              </div>
              <Spacer height={'10vh'} />
              <FillSection/>
          </Section>
          <Section id="section4_team" isFullHeight={true}>
              <Header type="H1" paddingLeft='clamp(3vw, 3vw, 20px)' marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(15px, 8vh, 100px)'> 
                  Our team of seasoned operators and investors, at your side as you chart your course. 
              </Header>
              <TeamCardContainer teamMembers={teamMembers}/>
              {/* style={{marginBottom: 'clamp(1vw, 3vw, 4vw)'}} */}
          </Section>
          <Section id="section5_companies" isFullHeight={true} style={portfolioSectionStyle}>
          <Spacer height={'20vh'}/>
              <Header type="H1" isCentered={true} paddingLeft="0px" marginBottom='clamp(15px, 4vh, 100px)'> Our Investments </Header>
              {/* <FundSelector/> */}
              <CompanyGrid/>
          </Section>
          <Section id="section6_latest" isFullHeight={true} style={latestSectionStyle}>
              <Header type="H1" isCentered={true} marginBottom='clamp(2vh, 5vh, 8vh)' style={principlesHeader}>Our Latest</Header>
              <div style={latestCardContainerStyle}>
                  <LatestContentCard
                      author="Devon Gethers"
                      title="Redefining Healthtech: Our Latest Venture Has Already Saved Consumers $50M"
                      imagePath="./placeholderImage.png"
                      date={new Date()}
                      source="Linkedin"
                      link="Linkedin.com"
                  />
                  <LatestContentCard
                      author="Devon Gethers"
                      title="Redefining Healthtech: Our Latest Venture Has Already Saved Consumers $50M"
                      imagePath="./placeholderImage.png"
                      date={new Date()}
                      source="Linkedin"
                      link="Linkedin.com"
                  />
                  <LatestContentCard
                      author="Devon Gethers"
                      title="Redefining Healthtech: Our Latest Venture Has Already Saved Consumers $50M"
                      imagePath="./placeholderImage.png"
                      date={new Date()}
                      source="Linkedin"
                      link="Linkedin.com"
                  />
                  <LatestContentCard
                      author="Devon Gethers"
                      title="Redefining Healthtech: Our Latest Venture Has Already Saved Consumers $50M"
                      imagePath="./placeholderImage.png"
                      date={new Date()}
                      source="Linkedin"
                      link="Linkedin.com"
                  />
              </div>
          </Section>
          <Section id="section7_footer">
              <Footer />
          </Section>
          {/* <div style={footerSpacerStyle}></div> */}
        </main>
      <Globe style={globeStyle} />
    </>
  );
};

export default Home;
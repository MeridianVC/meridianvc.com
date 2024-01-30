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
import TeamCard from '@/components/UI/TeamCard';
import TeamCardContainer from '@/components/UI/TeamCardContainer';
import CompanyGrid from '@/components/UI/CompanyGrid';

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
  marginTop: 'auto'
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
  gap: 'clamp(1vw, 1vw, 3vw)',
  flexWrap: 'wrap',
  margin: '0 clamp(5vw, 5vw, 7vw)',
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
  position: 'static',
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
                <Header type='H1' paddingLeft='clamp(3vw, 3vw, 20px)' marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 5vh, 8vh)'> 
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
                        Our Guiding Principles 
                    </Header>
              </div>
              <div style={principleCardContainerStyle} className={principleCardGap}>
                  <PrinciplesCard 
                    title="Vision"
                    imagePath="/vision.svg"
                    numberDisplay="01"
                    content="We invest in bold leaders who exhibit a rare blend of imagination and execution. Leaders who see what others don’t and courageously journey into the unknown."
                  />
                  <PrinciplesCard 
                    title="Collaboration"
                    imagePath="/collaboration.svg"
                    numberDisplay="02"
                    content="Our investment goes beyond capital. We invest time in our founders – helping chart your course, acquire key talent, and connect you with key partners along your journey."
                  />
                  <PrinciplesCard 
                    title="Growth"
                    imagePath="/growth.svg"
                    numberDisplay="03"
                    content="As former operators, we understand how to build and scale startups. We will work with you to safeguard against common missteps and position you best for growth-stage capital."
                  />
              </div>
              <Spacer height={'30vh'}/>
          </Section>
          <Section id="section3_founders" style={foundersSectionStyle} isFullHeight={false}>
              <Header type='H1' isCentered={true} marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 4vh, 7vh)'> 
                  What Our Founders Say 
              </Header>
              <div>
                  <Testimonial 
                    alignment="left"
                    statement="Meridian added value from Day 1. Devon and Karlton stand out among their peers as diligent and insightful. Their contributions have attracted top-tier investors, refined our financing, and improved our GTM and product strategy."
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
                    statement="The team at Meridian, reminiscent of our own founding team, consistently proves their worth daily. Their hustle and engagement with portcos have yielded tangible benefits, including introductions to investors and new customers for our pipeline. Their provision of valuable resources, potential hires, and market insights has been invaluable. Can't speak highly enough of these guys!"
                    name="Atikh Bana"
                    company="Acctual"
                    imageSrc="./headshotAtikh.png"
                  />
              </div>
              <Spacer height={'10vh'}/>
              <FillSection/>
          </Section>
          <Section id="section4_team" isFullHeight={true} >
              <Header type="H1" paddingLeft='clamp(3vw, 3vw, 20px)' marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(2vh, 5vh, 8vh)'> 
                  Seasoned operators and founders at your side as you chart your course. 
              </Header>
              <TeamCardContainer style={{marginBottom: "clamp(1vw, 1vw, 3vw)"}}>
                  <TeamCard 
                    name="Devon Gethers"
                    role="Managing Partner"
                    imageSrc="./headshotDevon.png"
                  />
                  <TeamCard 
                    name="Karlton Haney"
                    role="Managing Partner"
                    imageSrc="/headshotKarlton.png"
                  />
              </TeamCardContainer>
              <TeamCardContainer>
                  <TeamCard 
                    name="Dallin Anderson"
                    role="Advisor"
                    imageSrc="./headshotDallin.png"
                  />
                  <TeamCard 
                    name="Heather Harmon"
                    role="Advisor"
                    imageSrc="./headshotHeather.png"
                  />
                  <TeamCard 
                    name="Zach Thomas"
                    role="Advisor"
                    imageSrc="./headshotZach.png"
                  />
              </TeamCardContainer>
          </Section>
          <Spacer height={'20vh'}/>
          <Section id="section5_companies" isFullHeight={true} style={portfolioSectionStyle}>
              <Header type="H1" isCentered={true} paddingLeft="0px"> Our Investments </Header>
              {/* <FundSelector/> */}
              <CompanyGrid/>
          </Section>
        </main>
      <Globe style={globeStyle} />
    </>
  );
};

export default Home;
import Section5Companies from '@/components/Sections/section5_investments';
import FillSection from '@/components/Structural/FillSection';
import FillVertical from '@/components/Structural/FillVertical';
import Main from '@/components/Structural/Main';
import Section from '@/components/Structural/Section';
import Spacer from '@/components/Structural/Spacer';
import Header from '@/components/Text/Header';
import Footer from '@/components/UI/Footer';
import LatestContentCard from '@/components/UI/LatestContentCard';
import Navbar from '@/components/UI/Navbar/Navbar';
import PrinciplesCard from '@/components/UI/PrinciplesCard';
import TeamCardContainer from '@/components/UI/Team/TeamCardContainer';
import Testimonial from '@/components/UI/Testimonial';
import { latestContent } from '@/mockDatabase/latestContent';
import { teamMembers } from '@/mockDatabase/teamMembers';
import Image from 'next/image';
import { FC } from 'react';
import '../components/Sections/sections.css';
import '../components/UI/ui.css';
import { ClientGlobe, ClientMainContentAnimation } from './client-only';
import './globals.css';

const landingStyle: React.CSSProperties = {
  justifyContent: 'space-between',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  top: 'auto',
  bottom: 0,
};

const compassStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(5.5rem, 8vw, 8rem)',
  marginRight: 'clamp(2vw, 7vw, 20vw)',
  marginTop: 'clamp(2vh, 5vh, 10vh)',
  marginLeft: 'auto',
  rotate: '-3.5deg',
};

const legendStyle: React.CSSProperties = {
  aspectRatio: 'auto',
  width: 'clamp(288px, 60vw, 600px)',
  position: 'relative',
  paddingRight: 'clamp(5vw, 8vw, 20vw)',
  paddingBottom: 'clamp(5px, 10vh, 12vh)',
  marginLeft: 'auto',
  marginTop: 'auto',
  backgroundColor: 'transparent',
};

const principlesSectionStyle: React.CSSProperties = {
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const principleCardContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'clamp(30px, 2vw, 2vw)',
  flexWrap: 'wrap',
  margin: '0 clamp(30px, 5vw, 25vw)',
};

const principlesHeader: React.CSSProperties = {
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 'clamp(2vh, 3vh, 20vh)',
  alignItems: 'center',
};

const foundersSectionStyle: React.CSSProperties = {
  zIndex: 9, // to sit over top of all site content including the vertical bars
  justifyContent: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const latestSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
};

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
};

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <FillVertical side="right" />
      <FillVertical side="left" />
      <ClientMainContentAnimation>
        <Main>
          <Section id="section1_landing" style={landingStyle}>
            <div>
              <Spacer />
              <Image src="/compass.svg" alt="Compass" width={100} height={100} style={compassStyle} priority />
              <Header
                type="H1"
                paddingLeft="clamp(3vw, 3vw, 20px)"
                paddingRight="clamp(3vw, 3vw, 20px)"
                marginTop="clamp(5px, 5vh, 10vh)"
                marginBottom="clamp(2vh, 5vh, 8vh)"
                maxWidth="950px">
                Championing bold ideas and visionary founders to fuel world-changing innovation.
              </Header>
            </div>
            <div>
              <Image
                src="/legend.svg"
                alt="Legend"
                width={500}
                height={300}
                style={legendStyle}
                className="legend"
                priority
              />
            </div>
          </Section>
          <Section id="section2_principles" style={principlesSectionStyle} isFullHeight={false}>
            <Spacer height={'10vh'} />
            <div style={principlesHeader}>
              <Header type="H1" isCentered={true} marginTop="clamp(2vh, 7vh, 10vh)" marginBottom="clamp(2vh, 4vh, 4vh)">
                Guiding Principles
              </Header>
            </div>
            <div style={principleCardContainerStyle} className="principle-card-gap">
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
                content="Our investment goes beyond capital. We invest time in our founders – helping chart the course, acquire key talent, and make connections with partners along the journey."
              />
              <PrinciplesCard
                title="Growth"
                imagePath="/growth.svg"
                numberDisplay="03"
                content="As former operators, we understand how to build and scale startups. We work with our founders to safeguard against common missteps and position our companies best for growth-stage capital."
              />
            </div>
            <Spacer height={'30vh'} />
          </Section>
          <Section id="section3_founders" style={foundersSectionStyle} isFullHeight={false}>
            <Header type="H1" isCentered={true} marginTop="clamp(2vh, 7vh, 10vh)" marginBottom="clamp(2vh, 4vh, 7vh)">
              What Founders Say
            </Header>
            <div>
              <Testimonial
                alignment="left"
                statement="I like to pride myself on the degree of grit harnessed in my DNA and as I went down the venture road, I saw the same in Devon. The team at Meridian has provided unparalleled value to Transend and I cannot recommend them enough. "
                name="Matt Lekawa"
                company="Transend"
                imageSrc="/headshotMattLekawa.png"
                left="57px"
              />
              <Testimonial
                alignment="right"
                statement="Meridian immediately impressed us with their unwavering support. Devon and Karlton's passion for adding value is illustrated through their consistent and meaningful assistance, displaying a level of integrity unmatched in VC. Their involvement in key areas such as fundraising, customer growth, and partnerships has made them the most active contributors on our cap table."
                name="Ben Wunderman"
                company="Packsmith"
                imageSrc="/headshotBenWunderman.png"
                left="39px"
              />
              <Testimonial
                alignment="left"
                statement="The team at Meridian consistently proves their worth. Their hustle and engagement with portfolio companies has been hugely beneficial for us, including introductions to investors, valuable new hires, and potential customers. I highly recommend working with these guys!"
                name="Atikh Bana"
                company="Acctual"
                imageSrc="/headshotAtikh.png"
                left="40px"
              />
            </div>
            <Spacer height={'5vh'} />
            <FillSection />
          </Section>
          <Section id="section4_team" isFullHeight={true}>
            <Spacer height={'5vh'} />
            <Header
              type="H1"
              paddingLeft="clamp(3vw, 3vw, 20px)"
              paddingRight="clamp(3vw, 3vw, 20px)"
              marginTop="clamp(2vh, 7vh, 10vh)"
              marginBottom="clamp(15px, 8vh, 100px)"
              maxWidth="950px">
              Seasoned operators and investors, at your side as you chart your course.
            </Header>
            <TeamCardContainer teamMembers={teamMembers} />
            <Spacer height={'5vh'} />
          </Section>
          <Section5Companies />
          <Section id="section6_latest" isFullHeight={true} style={latestSectionStyle} className="our-latest">
            <Header type="H1" isCentered={true} marginBottom="clamp(2vh, 5vh, 8vh)" style={principlesHeader}>
              Our Latest
            </Header>
            <div style={latestCardContainerStyle}>
              {latestContent.map((content, index) => (
                <LatestContentCard
                  key={index}
                  author={content.author}
                  title={content.title}
                  imagePath={content.imagePath}
                  date={new Date(content.date)}
                  source={content.source}
                  link={content.link}
                />
              ))}
            </div>
          </Section>
          <Section id="section7_footer">
            <Footer />
          </Section>
        </Main>
      </ClientMainContentAnimation>
      <ClientGlobe />
    </>
  );
};

export default Home;

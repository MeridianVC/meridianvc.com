// This is the main entrypoint for our application
import './globals.css';
import { FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
import TeamCardContainer from '@/components/UI/Team/TeamCardContainer';
import CompanyGrid from '@/components/UI/CompanyGrid';
import LatestContentCard from '@/components/UI/LatestContentCard';
import Footer from '@/components/UI/Footer';

// dynamically load the globe only when DOM is present
const Globe = dynamic(() => import('../components/Globe/Globe'), {
  ssr: false,
  // loading: () => <PlaceholderMap/> // removed for now – would rather have nothing for .5 seconds
});

const teamMembers = [
  {
      name: "Devon Gethers",
      role: "Managing Partner",
      imageSrc: "/headshotDevon.png",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/devon-gethers/",
      email: "devon@meridianventures.co",
      medium: "https://medium.com/@devon_45585",
      focus: "Devon allocates his time to identifying and investing in startups with high growth potential, portfolio construction, capital raising, and managing key relationships with portfolio companies.",
      education: "Devon holds a B.S. in Finance from the University of Utah, where he graduated Summa Cum Laude. He is currently a candidate at Harvard Business School, Class of 2025.",
      experienceP1: "Prior to co-founding Meridian, Devon served as the CEO and Founder at EarlyAdmit, an EdTech startup dedicated to improving educational and professional outcomes for underserved minorities. This commitment culminated in its acquisition by PE in 2023.",
      experienceP2: "During his tenure at Mercato Partners, a $2B AUM growth equity firm investing in Enterprise SaaS and Branded Consumer, further showcased his impact and contributions. Here, Devon reviewed emerging investment opportunities, supported the team's investment efforts by conducting financial analysis, due diligence, and industry research, supported senior investors with a $400M fundraise, and closely collaborated with portfolio companies on strategic initiatives. This blend of entrepreneurial operator success and investment expertise positions Devon as a preferred strategic partner to founders."
  },
  {
      name: "Karlton Haney",
      role: "Managing Partner",
      imageSrc: "/headshotKarlton.png",
      title: "Managing Partner",
      linkedin: "https://www.linkedin.com/in/kevinkarltonhaney/",
      email: "karlton@meridianventures.co",
      focus: "Karlton focuses his time on sourcing startups, making new investments, and managing relationships with portfolio companies.",
      education: "B.S. in Industrial Engineering from the University of Arkansas. Member of the Harvard Business School Class of 2025.",
      experienceP1: "Prior to co-founding Meridian, Karlton was a private equity buyout and growth investor at The Stephens Group. In his role at Stephens Group, he reviewed new investment opportunities, supported the team’s investment efforts by conducting financial analysis, due diligence, and industry research, and worked closely with portfolio companies on strategic priorities. Before Stephens Group, he worked in various finance and strategy roles at Walmart Inc."
  },
  {
      name: "Dallin Anderson",
      role: "Advisor",
      imageSrc: "/headshotDallin.png",
      title: "Advisor",
      linkedin: "https://linkedin.com/in/dallinanderson",
      focus: "Fund strategy and new investment advisory.",
      education: "B.S. in Accounting from Brigham Young University. MBA from Harvard Business School.",
      experienceP1: "Founder and Managing Director of Serial Capital, an investor in seed and growth-stage companies across various sectors.",
      experienceP2: "Prior to Serial Capital, Dallin was Co-Founder, Chairman and President of Tolero Pharmaceuticals. Tolero was acquired in 2017 by Dainippon Sumitomo Pharmaceuticals."
  },
  {
      name: "Heather Harmon",
      role: "Advisor",
      imageSrc: "/headshotHeather.png",
      title: "Advisor",
      linkedin: "https://www.linkedin.com/in/heatheraharmon/",
      focus: "New investment advisory and mentorship for portfolio founders.",
      education: "Heather completed a Pre-medicine degree from UC San Diego and University of Washington, attended the Universidad of Guadalajara, and UC Berkeley Haas School of Business for Artificial Intelligence.",
      experienceP1: "Ms. Harmon is a 4x founder and former venture-backed COO and public company executive. She is a passionate proptech and fintech leader, who has built and managed highly engaged technical teams, led product management, scaled operations from startup through M&A, and created great user products.",
      experienceP2: "Currently, she is advising early stage companies on raising capital, scaling a team, defining a product roadmap, and balancing resource constraints."
  },
  {
      name: "Zach Thomas",
      role: "Advisor",
      imageSrc: "/headshotZach.png",
      title: "Advisor",
      focus: "Fund raising and LP relations.",
      linkedin: "https://www.linkedin.com/in/zachary-smith-b835721/",
      education: "B.S. in Finance from the University of Utah.",
      experienceP1: "Mr. Smith is Managing Director at Crescent Capital ($40B private equity fund) on the Investor Relations team. Prior to joining Crescent, Zachary spent 20 years at Wells Fargo Asset Management.",
      experienceP2: "He is an LP in Harlem Capital, Beta Boom, First Close Partners, and other minority-owned funds and has made over 50 angel investments. He is a founding board member of the University of Utah’s IMPACT Program, an internship program focused on post-grad education and employment, in partnership with HBCUs nationwide."
  }
];

const latestContents = [
  {
    author: "Utah Business",
    title: "45 Lessons from Utah Founders",
    imagePath: "/contentPhotos/45Lessons.png",
    date: new Date(new Date("2024-01-29").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "Utah Business",
    link: "https://www.utahbusiness.com/45-lessons-from-utah-founders/"
  },
  {
    author: "Devon Gethers",
    title: "InsurTech: The Next Frontier of FinTech",
    imagePath: "/contentPhotos/Insurtech.png",
    date: new Date(new Date("2023-11-25").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "Medium",
    link: "https://medium.com/@devon_45585/insurance-technology-the-next-frontier-of-fintech-854aba3a2f70"
  },
  {
    author: "Devon Gethers",
    title: "How We Started Meridian Ventures",
    imagePath: "/contentPhotos/MeridianLaunch.png",
    date: new Date(new Date("2023-08-03").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "Utah Business",
    link: "https://www.utahbusiness.com/how-devon-gethers-cofounded-meridian-ventures/"
  },
  {
    author: "TechCrunch",
    title: "Cast AI Raises $35M Series B",
    imagePath: "/contentPhotos/Cast.png",
    date: new Date(new Date("2023-11-07").getTime() + (7 * 60 * 60 * 1000)).toISOString(),
    source: "TechCrunch",
    link: "https://techcrunch.com/2023/11/07/cast-ai-which-helps-companies-optimize-cloud-spend-lands-35m/"
  },
];

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
  marginBottom: 'clamp(5vh, 10vh, 12vh)',
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
                <Image 
                    src="/compass.svg" 
                    alt="Compass" 
                    width={100}
                    height={100}
                    style={compassStyle} 
                    priority
                  />
                <Header type='H1' paddingLeft='clamp(3vw, 3vw, 20px)' marginTop='clamp(5px, 5vh, 10vh)' marginBottom='clamp(2vh, 5vh, 8vh)'> 
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
                    content="As former operators, we understand how to build and scale startups. We work with our founders to safeguard against common missteps and position our companies best for growth-stage capital."
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
                    statement="Meridian added value from day one. Devon and Karlton stand out among their peers as diligent and insightful. Their contributions have attracted top-tier investors, refined our financing, and improved our go-to-market and product strategy."
                    name="Cody Eddings"
                    company="SnapRefund"
                    imageSrc="/headshotCodyEddings.png"
                  />
                  <Testimonial 
                    alignment="right"
                    statement="Meridian immediately impressed us with their unwavering support. Devon and Karlton's passion for adding value is illustrated through their consistent and meaningful assistance, displaying a level of integrity unmatched in VC. Their involvement in key areas such as fundraising, customer growth, and partnerships has made them the most active contributors on our cap table."
                    name="Ben Wunderman"
                    company="Packsmith"
                    imageSrc="/headshotBenWunderman.png"
                  />
                  <Testimonial 
                    alignment="left"
                    statement="The team at Meridian consistently proves their worth. Their hustle and engagement with portfolio companies have yielded tangible benefits for us, including introductions to investors and new customers for our pipeline. Their provision of resources, potential hires, and market insights has been invaluable. Cannot speak highly enough of these guys!"
                    name="Atikh Bana"
                    company="Acctual"
                    imageSrc="/headshotAtikh.png"
                  />
              </div>
              <Spacer height={'5vh'} />
              <FillSection/>
          </Section>
          <Section id="section4_team" isFullHeight={true}>
              <Spacer height={'5vh'} />
              <Header type="H1" paddingLeft='clamp(3vw, 3vw, 20px)' marginTop='clamp(2vh, 7vh, 10vh)' marginBottom='clamp(15px, 8vh, 100px)'> 
                  Seasoned operators and investors, at your side as you chart your course. 
              </Header>
              <TeamCardContainer teamMembers={teamMembers}/>
              <Spacer height={'5vh'}/>
          </Section>
          <Section id="section5_companies" isFullHeight={true} style={portfolioSectionStyle}>
          <Spacer height={'15vh'}/>
              <Header type="H1" isCentered={true} paddingLeft="0px" marginBottom='clamp(2vh, 4vh, 7vh)'> Our Investments </Header>
              {/* <FundSelector/> */}
              <CompanyGrid/>
          </Section>
          <Section id="section6_latest" isFullHeight={true} style={latestSectionStyle}>
              <Header type="H1" isCentered={true} marginBottom='clamp(2vh, 5vh, 8vh)' style={principlesHeader}>Our Latest</Header>
              <div style={latestCardContainerStyle}>
                  {latestContents.map((content, index) => (
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
        </main>
      <Globe style={globeStyle} />
    </>
  );
};

export default Home;
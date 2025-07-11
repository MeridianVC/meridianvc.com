const companies = [
  {
    logoSrc: '/companyLogos/CastAI.svg',
    about: 'about',
    websiteUrl: 'https://cast.ai',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    paddingTop: '9px',
  },
  {
    logoSrc: '/companyLogos/Hona.svg',
    about: 'about',
    websiteUrl: 'https://www.hona.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '7px',
  },
  {
    logoSrc: '/companyLogos/Bowtie.svg',
    about: 'about',
    websiteUrl: 'https://www.bowtie.works',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },

  {
    logoSrc: '/companyLogos/Packsmith.svg',
    about: 'about',
    websiteUrl: 'https://packsmith.io',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Deasie.svg',
    about: 'about',
    websiteUrl: 'https://www.deasie.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Eden.svg',
    about: 'about',
    websiteUrl: 'https://edenmed.com/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '16px',
    paddingBottom: '25px',
  },
  {
    logoSrc: '/companyLogos/Vigil.svg',
    about: 'about',
    websiteUrl: 'https://getvigil.com/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '25px',
    paddingTop: '28px',
  },
  {
    logoSrc: '/companyLogos/Rebuy.svg',
    about: 'about',
    websiteUrl: 'https://www.rebuyengine.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '5px',
  },
  {
    logoSrc: '/companyLogos/Trestle.png',
    about: 'about',
    websiteUrl: 'https://www.gotrestle.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Transend.png',
    about: 'about',
    websiteUrl: 'https://www.transendfinancial.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    paddingBottom: '10px',
  },
  {
    logoSrc: '/companyLogos/Reset.svg',
    about: 'about',
    websiteUrl: 'https://www.getreset.co',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '15px',
  },
  {
    logoSrc: '/companyLogos/OneImaging.png',
    about: 'about',
    websiteUrl: 'https://oneimaging.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Pave.svg',
    about: 'about',
    websiteUrl: 'https://Pave.dev',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '10px',
    paddingTop: '20px',
  },
  {
    logoSrc: '/companyLogos/Abode.svg',
    about: 'Company1 is a leading innovator in the tech industry, known for its cutting-edge solutions.',
    websiteUrl: 'https://www.ownabode.com',
    foundedDate: 'January 1, 2010',
    founders: ['Founder One', 'Founder Two'],
    stageInvested: 'Series A',
    sector: 'Technology',
    coInvestors: ['Investor A', 'Investor B'],
    padding: '10px',
    paddingLeft: '15px',
  },
  {
    logoSrc: '/companyLogos/Sante.png',
    about: 'about',
    websiteUrl: 'https://www.santehq.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '15px',
  },
  {
    logoSrc: '/companyLogos/Flitch.png',
    about: 'about',
    websiteUrl: 'https://www.getflitch.com/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Leaseup.svg',
    about: 'about',
    websiteUrl: 'https://www.leaseup.co',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Olive.png',
    about: 'about',
    websiteUrl: 'https://www.olive.travel',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '12px',
    paddingBottom: '17px',
  },
  {
    logoSrc: '/companyLogos/Pier.png',
    about: 'about',
    websiteUrl: 'https://www.pier-finance.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Palm.png',
    about: 'about',
    websiteUrl: 'https://getpalm.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Scanbase.png',
    about: 'about',
    websiteUrl: 'https://www.scanbase.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Walt.svg',
    about: 'about',
    websiteUrl: 'https://www.heywalt.ai/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '14px',
    paddingBottom: '30px',
  },
  {
    logoSrc: '/companyLogos/Eqtble.png',
    about: 'about',
    websiteUrl: 'https://www.eqtble.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Acctual.png',
    about: 'about',
    websiteUrl: 'https://acctual.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Transcrypts.png',
    about: 'about',
    websiteUrl: 'https://www.transcrypts.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Parallel.svg',
    about: 'about',
    websiteUrl: 'https://getparallel.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Trigo.svg',
    about: 'about',
    websiteUrl: 'https://trigodata.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '10px',
  },
  {
    logoSrc: '/companyLogos/AciDev.svg',
    about: 'about',
    websiteUrl: 'https://www.aci.dev',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '8px',
  },
  {
    logoSrc: '/companyLogos/Pathwork.png',
    about: 'about',
    websiteUrl: 'https://www.pathworklife.com',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
  },
  {
    logoSrc: '/companyLogos/Heva.svg',
    about: 'about',
    websiteUrl: 'https://heva.co/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '5px',
    paddingBottom: '10px',
  },
  {
    logoSrc: '/companyLogos/Krevera.png',
    about: 'about',
    websiteUrl: 'https://www.krevera.com/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    paddingTop: '5px',
  },
  {
    logoSrc: '/companyLogos/OptainHealth.png',
    about: 'about',
    websiteUrl: 'https://www.optainhealth.com/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '5px',
    paddingBottom: '15px',
  },
  {
    logoSrc: '/companyLogos/Lumif.png',
    about: 'about',
    websiteUrl: 'https://lumif.ai/',
    foundedDate: 'founded date',
    founders: ['founder one', 'founder two'],
    stageInvested: 'seed',
    sector: 'sector',
    coInvestors: ['Investor C', 'Investor D'],
    padding: '5px',
  },
];

export default companies;

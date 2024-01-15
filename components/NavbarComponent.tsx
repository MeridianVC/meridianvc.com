import { FC } from 'react';
import styled from 'styled-components';

const LinkStyles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4vw;
  font-size: 1rem;
`;

const Links: FC = () => {
  return (
    <LinkStyles>
      <div>Principles</div>
      <div>Team</div>
      <div>Portfolio</div>
      <div>Investor Portal</div>
      <div>Get in Touch</div>
    </LinkStyles>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 4vw;
  justify-content: space-between;
  background-color: #FFF6DF;
  color: #1E1E1E;
  width: 92vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: .1rem;
  letter-spacing: .025rem;
`;

const Navbar: FC = () => {
  return (
    <Nav>
    <img
        src="./meridian_wordmark.svg"
        className="aspect-[7.84] object-contain object-center w-[175px] overflow-hidden shrink-0 max-w-full my-auto antialiased"
      />
      <Links/>
    </Nav>
  );
}

export default Navbar;
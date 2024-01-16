"use client";

// Navbar contains logo and navigation links

import { FC } from 'react';
import styled from 'styled-components';

const Wordmark = styled.img`
    aspect-ratio: auto;
    object-fit: contain;
    object-position: center;
    overflow: hidden;
    flex-shrink: 1;
    width: 12rem;
    max-width: 100%;
    margin-top: auto;
    margin-bottom: auto;
	  -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
`

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
        <Wordmark src="./meridian_wordmark.svg" />
        <Links/>
    </Nav>
  );
}

export default Navbar;
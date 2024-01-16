// This component sets the basic structure of the single scroll
"use client";

import styled from 'styled-components';
import Navbar from './NavbarComponent';
import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from '../Globe/GlobePlaceholder';
import ScrollHandler from '../UtilityComponents/ScrollHandler';

const Globe = dynamic(() => import('../Globe/Globe'), { // ensures globe is loaded only when DOM is present
    ssr: false,
    loading: () => <PlaceholderMap/> // loads placeholder while 3D globe renders
});

// CSS COMPONENTS
const OuterContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #FFF6DF;
`;
const InnerBorderBox = styled.div`
    border: 2px solid #444444;
    position: relative;
    flex: grow;
    width: calc(92vw - 4px); // width is 
    background-color: #FFF6DF;
    stroke-width: 2px;
    overflow: hidden;
`;

// TYPES
type BaseProps = {
    children: ReactNode;
};

// REACT COMPONENTS
const Base: FC<BaseProps> = ({ children }) => {
    return (
        <>
        <ScrollHandler/>
        <OuterContainer>
            <Navbar/>
            <InnerBorderBox>
                <Globe />
            </InnerBorderBox>
        </OuterContainer>
        </>
    );
};

export default Base;

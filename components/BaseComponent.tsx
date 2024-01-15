// This component sets the basic structure of the single scroll
"use client";

import styled from 'styled-components';
import Navbar from './NavbarComponent';
import React, { ReactNode, Suspense } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from './GlobePlaceholder';


const Globe = dynamic(() => import('./Globe'), {
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
    flex: grow;
    width: 92vw;
    background-color: #FFF6DF;
    stroke-width: 2px;
`;

// TYPES
type BaseProps = {
    children: ReactNode;
};

// REACT COMPONENTS
const Base: React.FC<BaseProps> = ({ children }) => {
    return (
        <OuterContainer>
            <Navbar/>
            <InnerBorderBox>
                {/* {children} */}
                <Globe />
            </InnerBorderBox>
        </OuterContainer>
    );
};

export default Base;

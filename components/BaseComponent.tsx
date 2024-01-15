// This component sets the basic structure of the single scroll
"use client";

import styled from 'styled-components'
import Navbar from './NavbarComponent'
import React, { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Globe = dynamic(() => import('./Globe'), {
    ssr: false,
})

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

`

const InnerBorderStyle = styled.div`
    border: 2px solid #444444;
    flex: grow;
    width: 92vw;
    background-color: #FFF6DF;
    stroke-width: 2px;
`

// TYPES
type BaseProps = {
    children: ReactNode;
}

// REACT COMPONENTS
const Base: React.FC<BaseProps> = ({ children }) => {
    return (
        <OuterContainer>
            <Navbar/>
            <InnerBorderStyle>
                {/* {children} */}
                <Globe />
            </InnerBorderStyle>
        </OuterContainer>
    );
};

export default Base;

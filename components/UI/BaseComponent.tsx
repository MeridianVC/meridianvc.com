"use client"

// This component sets the structure for the background of the single scroll
// Nav is still included for now but we may want to move it

import styled from 'styled-components';
import Navbar from './NavbarComponent';
import { FC, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PlaceholderMap from '../Globe/GlobePlaceholder';

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
    width: 92%;
    background-color: #FFF6DF;
    stroke-width: 2px;
    overflow: hidden;
`;

// REACT COMPONENTS
const Base: FC = () => {
    // const [isGlobeLoaded, setGlobeLoaded] = useState(false);

    // useEffect(() => {

    //     setGlobeLoaded(true);
    // }, [])

    return (
        <OuterContainer>
            <Navbar/>
            <InnerBorderBox>
                {/* {isGlobeLoaded ? <Globe /> : <PlaceholderMap />}  */}
                <Globe />
            </InnerBorderBox>
        </OuterContainer>
    );
};

export default Base;

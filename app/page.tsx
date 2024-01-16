// This is the main entrypoint for our application
// Scroll Provider is only available on "client" components, all that need access to scroll state are in Base
// All content above will have advantages with SEO, CDN's, and accessability

import Base from '../components/UI/BaseComponent';
import './globals.css';
import { ScrollProvider } from '../contexts/ScrollContext';

// Cant use styled-components on server-side here. 
// Might be possible with config and if not, we will incorporate a different CSS solution

// import styled from 'styled-components';

// const Main = styled.main`
//     width: 92vw;
//     height: 80vh;
//     position: bottom;
//     max-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     overflow: hidden;
//     background-color: #FFF6DF;
//     background-color: transparent;
// `;

export default function Home() {
  return (
    <>
    {/* <Main> */}
      <main className="mainContentScroll">
          <h1 className="text-grey-900 bg-light-green text-6xl bg-amber-100">
            Early-stage venture capital for audacious investors and visionary founders.
          </h1>
      </main>
      {/* </Main> */}
      <ScrollProvider>
        <Base />
      </ScrollProvider>
    </>

  )};
  
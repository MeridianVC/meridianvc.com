// This is a server-side component that renders the main scroll content

import { FC } from 'react';

const ScrollContentStyle: React.CSSProperties = {
    // backgroundColor: "#FFF5DC",
    backgroundColor: "transparent",
    width: "88%",
    height: "1500vh",
    // maxHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
};

const ScrollContent: FC = () => {
    
    return (
        <main style={{...ScrollContentStyle}}>
            Div with some main content
        </main>
    )
}

export default ScrollContent;
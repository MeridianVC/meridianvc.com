// This component creates the static map layer used when 3d Globe is not avialable

import { FC } from 'react';

const placeholderImageStyle: React.CSSProperties = {
    width: '5555px',
    objectFit: 'cover',
    height: '1500px',
    offset: '200px',  // 'offset' is not a standard CSS property and might not have the intended effect
    position: 'fixed',
    top: '-110px',
    left: '0px',
};

const PlaceholderMap: FC = () => {
    return (
        <img src="./map.png" alt="Map Image" style={placeholderImageStyle}/>
    )
}

export default PlaceholderMap;
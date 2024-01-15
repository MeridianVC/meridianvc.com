// This component creates the static map layer used when 3d Globe is not avialable

import styled from 'styled-components';

const PlaceholderImage = styled.img`
    width: 100%;
    height: auto;
`

const PlaceholderMap = () => {
    return (
        <PlaceholderImage src="./map.png" alt="Map Image"/>
    )
}

export default PlaceholderMap;
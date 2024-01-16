// This component creates the static map layer used when 3d Globe is not avialable

import { FC } from 'react';
import styled from 'styled-components';

const PlaceholderImage = styled.img`
    width: 5555px;
    object-fit: cover;
    height: 1500px;
    offset: 200px;
    position: relative;
    top: -110px;
    left: 0px;
`

const PlaceholderMap: FC = () => {
    return (
        <PlaceholderImage src="./map.png" alt="Map Image"/>
    )
}

export default PlaceholderMap;
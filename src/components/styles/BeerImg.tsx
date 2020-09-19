import styled, { css } from 'styled-components';

import defaultImg from '../../assets/images/no-image-size740x480.jpg';

interface Props {
    imagey: any
}

export const BeerImg = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-image: url(${defaultImg});
        
        /* background-image: url(${({imagey}: Props) => (imagey ? defaultImg : defaultImg)}); */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

    ${({imagey}) => imagey && css`
        background-image: url(${imagey});
    `}
`;

/* background-image: ${({imagey}: Props) => (url(imagey))}; */
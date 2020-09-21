import styled, { css } from 'styled-components';

import defaultImg from '../../assets/images/no-image-size740x480.jpg';

interface Props {
    beerimage: string | null;
}

export const Label = styled.img<Props>`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-image: url(${({ beerimage }) => beerimage ? beerimage : defaultImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
    @media ${({ theme }) => theme.mediaQ.gt768} {

    }
`;

export const LabelWrapper = styled.div`
    width: 100%;
    height: 40vh;
    margin: 10px 0; 
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colours.light};
    box-shadow: ${({ theme }) => theme.boxShadow};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${({ theme }) => theme.mediaQ.gt1000} {
        width: 40%;
        height: 60vh;
        margin: 20px 5% 20px 0;
    }
`;
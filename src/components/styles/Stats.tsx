import styled from 'styled-components';

import defaultImg from '../../assets/images/no-image-size740x480.jpg';

export const Stats = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
`;

export const StatsWrapper = styled.section`
    width: 100%;
    height: 40vh;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colours.light};
    box-shadow: ${({ theme }) => theme.boxShadow};
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${({theme}) => theme.mediaQ.gt1000} {
        width: 55%;
        height: 60vh;
        margin: 20px 0;
    }
`;
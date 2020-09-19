import styled from 'styled-components';

export const Banner = styled.section`
    width: 100%;
    height: 20vh;
    margin: 50px auto;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colours.c4};
    box-shadow: 5px 5px 5px #ccc;
    color: ${({theme}) => theme.colours.c3};
    text-align: center;
    font-size: ${({theme}) => theme.fontSize.large};
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;

    /* @media ${({theme}) => theme.mediaQ.gt768} {
        width: 60%;
        margin: 50px auto;
    } */
`;
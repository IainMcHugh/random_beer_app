import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: ${({theme}) => theme.colours.c6};
    padding: 100px 5% 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media ${({theme}) => theme.mediaQ.gt768} {
        padding: 100px 20% 0;
    }
`;
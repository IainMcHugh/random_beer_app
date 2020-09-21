import styled from 'styled-components';

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

export const StatsText = styled.p`
    color: ${({ theme }) => theme.colours.deep};
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 200;
  
    @media ${({ theme }) => theme.mediaQ.gt500} {
        font-size: ${({ theme }) => theme.fontSize.medium};
    }
    
    @media ${({ theme }) => theme.mediaQ.gt768} {
        font-size: ${({ theme }) => theme.fontSize.large};
    }
`;
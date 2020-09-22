import styled from 'styled-components';

export const Banner = styled.section`
    width: 100%;
    height: 20vh;
    margin: 100px auto 20px;
    padding: 0 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colours.light};
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.colours.deep};
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media ${({ theme }) => theme.mediaQ.gt768} {
        padding: 0 10%;
    }
`;

export const BannerText = styled.p`
    text-transform: capitalize;
    flex-grow: 0;
    color: ${({ theme }) => theme.colours.deep};
    font-family: 'Poppins', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: 400;
  
    @media ${({ theme }) => theme.mediaQ.gt500} {
        font-size: ${({ theme }) => theme.fontSize.large};
    }
    
    @media ${({ theme }) => theme.mediaQ.gt768} {
        font-size: ${({ theme }) => theme.fontSize.larger};
        flex-grow: 1;
        text-align: left;
    }
`;
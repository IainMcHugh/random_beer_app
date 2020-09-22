import styled from 'styled-components';

export const ErrorWrapper = styled.section`
    width: 20%;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const ErrorItem = styled.section`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin: 10px 0;
    background-color: ${({ theme }) => theme.colours.primary};
    box-shadow: ${({ theme }) => theme.boxShadow};
    color: ${({ theme }) => theme.colours.light};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
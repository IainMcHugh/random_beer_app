import styled from "styled-components";

export const Button = styled.button`
    flex-grow: 0;
    padding: 20px 10px;
    border: none;
    font-size: ${({theme}) => theme.fontSize.small};
    border-radius: 5px;
    background-color: ${({theme}) => theme.colours.primary};
    color: ${({theme}) => theme.colours.light};
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;

    &:hover {
        background-color: ${({theme}) => theme.colours.secondary};    
    }
`;
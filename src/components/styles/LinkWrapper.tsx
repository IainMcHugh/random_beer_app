import styled from "styled-components";

export const LinkWrapper = styled.div`
    width: 50%;
    margin: 20px 10px;
    /* flex-grow: 0; */
    align-self: flex-end;
    padding: 20px 10px;
    border: none;
    font-size: ${({theme}) => theme.fontSize.small};
    border-radius: 5px;
    background-color: ${({theme}) => theme.colours.deep};
    color: ${({theme}) => theme.colours.light};
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;

    & a {
        color: white;
        text-decoration: none
    }

    &:hover {
        background-color: ${({theme}) => theme.colours.darker};    
    }
`;
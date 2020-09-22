import styled from 'styled-components';

export const Navbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colours.deep};
    box-shadow: ${({ theme }) => theme.boxShadow};
`;
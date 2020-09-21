import React from 'react';
import styled from 'styled-components';

export const Navbar = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.colours.deep};
    /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); */
    box-shadow: ${({ theme }) => theme.boxShadow};
`;
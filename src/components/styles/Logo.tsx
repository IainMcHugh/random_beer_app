import React from 'react'
import styled from "styled-components";
import logoImg from '../../assets/images/beer-logo.png';

export const LogoWrapper = styled.div`
    width: 100px;
    height: 90%;
    margin: auto 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    outline: none;
`;

export const Logo = styled.img`
    background-image: url(${logoImg});
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

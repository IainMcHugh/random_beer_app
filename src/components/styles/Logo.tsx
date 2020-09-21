import styled from "styled-components";
import logoImg from '../../assets/images/beer-logo-out.png';

export const LogoWrapper = styled.div`
    width: 60px;
    height: 90%;
    margin: auto 0;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Logo = styled.img`
    /* background-image: url(${logoImg}); */
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

import React from "react";
import logoImg from '../assets/images/beer-logo-out.png';
import { Navbar, LogoWrapper, Logo } from "./styles";

const Navigation = () => (
  <Navbar>
    <LogoWrapper>
      <Logo src={logoImg} alt="Logo" />
    </LogoWrapper>
  </Navbar>
);

export default Navigation;

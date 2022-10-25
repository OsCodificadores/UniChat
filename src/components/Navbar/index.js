import React, { useState } from "react";
import * as S from "./styles";
import Logo from "../assets/logo.png";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return ( 


            <S.Nav>
      <S.Logo href="/">
        <S.img src={Logo}></S.img>
      </S.Logo>
      
      <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </S.Hamburger>

      <S.Menu isOpen={isOpen}>
        <S.MenuLink href="/">Home</S.MenuLink>
        <S.MenuLink href="/Login">Login</S.MenuLink>
      </S.Menu>
    </S.Nav>

  );
};

export default Navbar;






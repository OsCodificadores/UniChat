import React, { useState } from "react";
import * as S from "./styles";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";


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
        <Link to="/login"><S.MenuLink>Login</S.MenuLink></Link>
      </S.Menu>
    </S.Nav>

  );
};

export default Navbar;






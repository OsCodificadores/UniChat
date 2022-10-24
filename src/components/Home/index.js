import React from "react";
import * as S from "./styles";
import Logo2 from "../assets/Logo2.png";
import User from "../assets/user.jpg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

const Home = () => {

  return ( 

    <S.Body>

      <Navbar></Navbar>

    <S.Container>
       <S.ContentText><S.ContentLogo2><S.Logo2 src={Logo2}></S.Logo2></S.ContentLogo2>
       <S.ContentSpan>Converse <S.gradientText>onde </S.gradientText> , <S.gradientText>quando</S.gradientText>e com </S.ContentSpan>
       <S.ContentSpan><S.gradientText>quem</S.gradientText> você quiser!</S.ContentSpan>
       <Link to="/login"><S.getStarted >Comece agora!</S.getStarted></Link></S.ContentText>
       <S.ContentSVG><S.UserSVG img alt="" src={User}></S.UserSVG></S.ContentSVG>
    </S.Container>
    </S.Body> 
  );
};

export default Home;






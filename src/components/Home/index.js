import React from "react";
import * as S from "./styles";
import {UserSVG} from "./styles";
import Logo2 from "../assets/Logo2.png";
import User from "../assets/user.jpg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {

  return ( 

    <S.Body>

      <Navbar></Navbar>

    <S.Container>
       <S.ContentText><S.ContentLogo2><motion.img whileHover={{scale:1.1, rotate:360}}  className="logo2" src={Logo2}></motion.img></S.ContentLogo2>
       <S.ContentSpan>Converse <S.gradientText>onde </S.gradientText> , <S.gradientText>quando</S.gradientText>e com </S.ContentSpan>
       <S.ContentSpan><S.gradientText>quem</S.gradientText> você quiser!</S.ContentSpan>
       <Link to="/login"><S.getStarted >Comece agora!</S.getStarted></Link></S.ContentText>
       <S.ContentSVG><motion.img className="iamge" alt="" src={User} initial={{
        scale:1,
        y:-10,
      }}
      animate={{
        scale:1.2,
        y:0,
      }}
      transition={{
        duration: 3,
        yoyo: Infinity
      }}></motion.img></S.ContentSVG>
    </S.Container>
    </S.Body> 
  );
};

export default Home;






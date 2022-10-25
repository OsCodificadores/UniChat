import React from "react";
import * as C from "./styles";
import {Info} from "./styles";
import { motion } from "framer-motion"
import Logo from "../assets/Log.png";

const Default = () => {
  return (
    <C.Container>
      <motion.div
      initial={{
        scale:0.8,
      }}
      animate={{
        scale:1,
      }}
      transition={{
        duration: 2,
        yoyo: Infinity
      }}>
      <C.Logo src={Logo}></C.Logo>
      <C.Info>
        Sua comunicação a um click de distância.
      </C.Info>
      </motion.div>
    </C.Container>
    
  );
};

export default Default;


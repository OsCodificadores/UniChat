import React from "react";
import * as C from "./styles";

import Logo from "../assets/Logo3.png";

const Default = () => {
  return (
    <C.Container>
      <C.Logo src={Logo}></C.Logo>
      <C.Info>
        Sua comunicação a um click de distância.
      </C.Info>
    </C.Container>
  );
};

export default Default;
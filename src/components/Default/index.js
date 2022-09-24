import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>uniChat</C.Title>
      <C.Info>
        Sua comunicação a um click de distancia.
      </C.Info>
    </C.Container>
  );
};

export default Default;
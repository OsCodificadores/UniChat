import React from 'react'
import * as C from "./styles";
import {Logo} from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import Logo2 from "../assets/Logo3.png";
import { motion } from "framer-motion";

function ChatHeader({photoURL, name }) {
  return (
    <C.Container>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        {/* <MdPerson /> */}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      {/* <C.Options>
        <MdSearch />
        <MdMoreVert />
      </C.Options> */}
      <motion.img src={Logo2} whileHover={{scale:1.1, rotate:360}} className="imguni"/>
    </C.Container>
  )
}

export default ChatHeader
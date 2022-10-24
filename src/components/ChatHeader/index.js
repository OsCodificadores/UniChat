import React from 'react'
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import Logo from "../assets/Logo3.png";

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
      <C.Logo src={Logo}></C.Logo>
    </C.Container>
  )
}

export default ChatHeader
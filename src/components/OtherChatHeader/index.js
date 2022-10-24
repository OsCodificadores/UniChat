import React from "react";
import * as C from "./styles";
import { MdDonutLarge, MdMoreVert, MdPersonAddAlt1 } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { BiLogOut } from "react-icons/bi";
import {Link} from "react-router-dom";

const OtherChatHeader = ({setUserChat}) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };
  
  return (
    <C.Container>
      <Link to="/"><BiLogOut onClick={() => [auth.signOut(), setUserChat(null)]}/></Link>
      <C.Options>
        <MdPersonAddAlt1 onClick={handleCreateChat} />
      </C.Options>
    </C.Container>
  )
}

export default OtherChatHeader
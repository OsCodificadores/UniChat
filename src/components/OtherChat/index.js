import React from 'react'
import * as C from "./styles"
import OtherChatHeader from '../OtherChatHeader/index'
import AllChats from '../AllChats/index'


const OtherChat = ({setUserChat, userChat}) => {
  return (
    <C.Container>
        <OtherChatHeader setUserChat={setUserChat}/>
        <AllChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  )
}

export default OtherChat;
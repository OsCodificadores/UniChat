import React, { useEffect, useState } from "react"
//import Chat from "./components/Chat";
//import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import LoginPage from "./pages/LoginPage";
//import Loading from "./components/Loading";
import OtherChat from "./components/OtherChat";
import Chat from "./components/Chat";


const App = () => {
    const [user, loading] = useAuthState(auth);
    const [userChat, setUserChat] = useState(null);
    useEffect(() => {
        if (user) {
        db.collection("users").doc(user.uid).set({
            email: user.email,
            photoURL: user.photoURL,
        });
    }
  }, [user]);

  //if (loading) return <Loading />;

  if (!user) return <LoginPage />;

    return (
     <C.Container>
        <OtherChat setUserChat={setUserChat} userChat={userChat}/>
        <Chat userChat={userChat} />
    </C.Container>
    )
};

export default App;

import React from "react";
import {auth, provider} from "../../services/firebase"
import * as C from "./styles";
import Navbar from "../Navbar";
import Logo from "../assets/Logo2.png";
import LoginPage from "../../pages/LoginPage";

const Login = () =>{
    const handleSignin = () =>{
        auth.signInWithPopup(provider).catch(alert);
    };

    return(
        <>
        
        <Navbar>
        </Navbar>

        <C.Container>
            <C.Logo src={Logo}></C.Logo>
            <C.Span>Logue com sua conta do <C.gradientText>g</C.gradientText><C.gradientText1>o</C.gradientText1><C.gradientText2>o</C.gradientText2><C.gradientText>g</C.gradientText><C.gradientText4>l</C.gradientText4><C.gradientText1>e</C.gradientText1>, rápido e prático!</C.Span>
        <C.Button onClick={handleSignin}><i class="fa-brands fa-google"></i>Logar com o google</C.Button>
        </C.Container>
        </>

    );
};

export default Login
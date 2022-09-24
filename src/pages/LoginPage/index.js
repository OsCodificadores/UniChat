import React from "react";
import {auth, provider} from "../../services/firebase"
import * as C from "./styles";
import Login from "../../components/Login";

const LoginPage = () =>{
    return(
        <Login/>
    );
};

export default LoginPage
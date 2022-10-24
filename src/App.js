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
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/Login";
import ChatPage from "./pages/ChatPage";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<ChatPage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
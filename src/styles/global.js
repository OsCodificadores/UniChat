import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration:none;
}

body{
    width:100vw;
    height: 100vh ;
    font-family: 'Segoe UI', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html {
    background: #121214;
}

`;

export default GlobalStyle;
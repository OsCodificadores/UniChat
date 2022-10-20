import styled from "styled-components";

export const Container = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-top: 100px;
    gap: 10px;
`;

export const Logo = styled.img `
    width: 230px;
`

export const Span = styled.span `
    color: white;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`

export const Button = styled.button `
    outline:none;
    font-size:18px;
    padding: 14px 18px;
    cursor:pointer;
    background: #78B4A9;
    font-family: inter;
    border-radius: 6px;
    width: 300px;
    margin-left: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    &:hover {
        transform: scale(1.1);
        transition: all .4s ease-in-out;
      }

`

export const gradientText = styled.span `
    color: #4285f4;
`

export const gradientText1 = styled.span `
    color: #e20b0b;
`

export const gradientText2 = styled.span `
    color: #eafc00;
`

export const gradientText3 = styled.span `
    color: #e20b0b;
`

export const gradientText4 = styled.span `
    color: #00ad0b;
`

export const gradientText5 = styled.span `
    color: #e20b0b;
`
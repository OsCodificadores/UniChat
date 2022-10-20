import styled from "styled-components";

export const Body = styled.body `
{
  background: #121214;
}
`

export const Container = styled.div `
{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  gap: 50px;
  margin: 10px;
  margin-top: 20px;

  @media (max-width: 870px) {
    gap: 5px;
  }

  @media (max-width: 690px) {
    display: grid;
  }

}`

export const ContentLogo2 = styled.div `{
  display: flex;
  justify-content: center;
}`

export const Logo2 = styled.img `{
  width: 220px;
  margin-bottom: 0px;

  @media (max-width: 690px) {
    width: 150px;
  }
}`

export const ContentText = styled.div `
{
  display: grid;
  justify-content: center;
  align-items: center;

  @media (max-width: 1125px) {
    width: 400px;
  }

  @media (max-width: 780px) {
    width: 350px;
    margin-left: -40px;
  }

  @media (max-width: 690px) {
    width: 400px;
    margin-left: -10px;
  }

}`

export const ContentSVG = styled.div `
{
  color: white;
  width: 400px;
  height: 400px;

  @media (max-width: 870px){
    width: 200px;
  }

  @media (max-width: 690px) {
    margin-left: 30px;
    margin-top: -30px;
    }
}`

export const ContentSpan = styled.span `
{
  font-weight: bold;
  font-size: 25px;
  font-family: 'Inter', sans-serif;
  color: white;
  display:flex;
  width: 600px;
  justify-content: center;
  gap: 5px;

  @media (max-width: 1125px) {
    font-size: 15px;
  }

  @media (max-width: 780px) {
    font-size: 13px;
  }

  @media (max-width: 690px) {
    font-size: 16px;
    gap: 2px;
  }
}`

export const gradientText = styled.div `
{
  position: relative;
  background: rgb(255,655,255);
  background: linear-gradient(351deg, rgba(255,255,255,1) 9%, rgba(0,172,255,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}`

export const getStarted = styled.div `
{
  margin-top: 20px;
  border-radius: 4px;
  background: #78B4A9;
  color: black;
  text-align: center;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 900;
  margin: 10px;
  width: 420px;
  display: flex;
  justify-content: center;
  margin-left:90px;

  @media (max-width: 690px) {
    font-size: 20px;
    width: 220px;
    margin-left: 195px;
  }
  
  @media (max-width: 760px) {
    margin-left: 175px;
    font-size: 20px;
    width: 250px;
  }

}`

export const UserSVG = styled.img `
{
  width: 400px;
  filter: drop-shadow(0 0 0.4rem rgb(255, 255, 255));


  @media (max-width: 870px){
    width: 250px;
    margin-top: 80px;
  }

  @media (max-width: 690px) {
    width: 220px;
    margin-left: 50px;
  }
}`
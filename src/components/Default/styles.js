import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #121214;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  svg {
    width: 80px;
    height: 80px;
  }
  div{
  background: #121214;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
`;

export const Info = styled.span`
  font-size: 20px;
  text-align: center;
  max-width: 500px;
  font-family: inter;
  color: #78B4A9;
`;

export const Logo =styled.img`
  width: 200px;
`
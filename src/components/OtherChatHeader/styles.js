import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #78b4a9;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
  svg{
  width: 30px;
  height: 30px;
  }
  a{
    text-decoration: none;
  color: #000;
  }

`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  *a {
  text-decoration: none;
};
`;

export const Options = styled.div`

a {
    text-decoration: none;
}
  display: flex;
  svg {
    width: 24px;
    height: 24px;
    color: #000;
    cursor: pointer;
  }
  
`;
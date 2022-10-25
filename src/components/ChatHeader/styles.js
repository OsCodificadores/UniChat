import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #78B4A9;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
  z-index: 1;
  .imguni{
    width: 80px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
    
  }
`;

export const NameContent = styled.div`
  display: grid;
  
`;  

export const Name = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-weight: bold;
  letter-spacing: 1px;
`;
export const Logo =styled.img`
  `

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Options = styled.div`

  display: flex;
  gap: 10px;
  svg {
    width: 24px;
    height: 24px;
    color: #000;
    cursor: pointer;
    
  }
  
`;
import styled from "styled-components";


export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #78B4A9;

`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 4px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
  
`;
export const MenuLink = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in;
  font-size: 1.3rem;
  font-family: inter; 
  margin-left: 50px;

  @media (max-width: 780px) {
    margin-bottom: 20px;
  }

  &:hover {
    color: #3a464b;
    font-weight: bold;
  }

`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

export const Logo = styled.a`
  padding: 0.8rem 0;
  color: #393e46;
  text-decoration: none;
  font-size: 5px;
  span {
    font-weight: 400;
    font-size: 1.4rem;
    color: #00adb5;
  }
`;

export const img = styled.img`{
    width: 150px;
  }`
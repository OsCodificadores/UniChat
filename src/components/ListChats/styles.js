import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 15px 20px;
  cursor: pointer;

  &:hover {
    background-color: #3c3d3d;
  }

  svg {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  &.active {
    background-color: #3c3d3d;
  }
`;

export const Name = styled.span`

  font-size: 15px;
  font-family: poppins;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;
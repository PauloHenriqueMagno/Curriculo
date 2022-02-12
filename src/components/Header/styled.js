import styled, { keyframes } from 'styled-components';

const buttonAnimation = (color) => keyframes`
  from {
    background: none;
  }

  to {
    background: ${color};
  }
`;

export const HeaderNavStyled = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  background-color: rgb(255,255,255);
  width: 100vw;
  height: 70px;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid black;
  gap: 25px;
  padding: 10px 55px;
`;

export const HeaderNavButtonStyled = styled.button`
  background: none;
  padding: 20px;
  border-radius: 100%;
  transition-duration: 700ms;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    animation: ${props => buttonAnimation(props.color)} 700ms;
    background-color: ${props => props.color};
  }
`;
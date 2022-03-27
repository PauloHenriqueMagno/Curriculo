import styled, { keyframes } from 'styled-components';

const buttonAnimation = (color) => keyframes`
  from {
    background: none;
  }

  to {
    background: ${color};
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: rgb(255,255,255);
  width: 100%;
  max-width: 100vw;
  z-index: 100;
`;

export const HeaderNavStyled = styled.nav`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;
`;

export const HeaderDivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  min-width: 100%;
  padding: 0 5px;
  height: 60px;
  gap: 15px;
  
  @media (min-width: 600px){
    justify-content: flex-end;
  };
`;

export const HeaderNavLinkStyled = styled.a`
  background-color: ${props => props.color};
  padding: 10px 10px;
  border-radius: 100%;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  
  &, &:active, &:visited {
    outline: none;
    outline-color: none;
    text-decoration: none;
    color: #000000;
  };

  &:active {
    filter: brightness(70%)
  };
  
  @media (min-width: 600px){
    background: none;

    &:hover {
      animation: ${props => buttonAnimation(props.color)} 700ms;
      background-color: ${props => props.color};
    }
  };
`;

export const HeaderLanguageSelectStyled = styled.select`
  &:hover, &:focus, &:active {
    outline: none;
    outline-color: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  };
`;
import styled from "styled-components";
import ImagePrincipal from "../../assets/image_principal.png";

export const ProfileSectionStyled = styled.div`
  height: max-content;
  margin-bottom: 30px;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
  };

  @media (min-width: 769px){
    height: calc(100% + 60px);
  };
`;

export const ProfileDivStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 0 0 25px;
  height: 100%;
  
  @media (min-width: 769px){
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContentBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 99%;
  margin: 0 auto;
  padding: 15px 0 0;
  gap: 20px;

  @media (min-width: 769px){
    width: 95%;
  }
`;

export const ContentHeaderStyled = styled.header`
  margin: 35px 0 0 0 
`;

export const ContentMainStyled = styled.main`
  width: 90%;
`;

export const TitleStyled = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const ContactButtonStyled = styled.a`
  padding: 20px 60px;
  background: #2639ED;
  color: #FFFFFF;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 40px;
  width: min-content;
  text-decoration: none;

  &:hover {
    filter: brightness(70%)
  };
  &:active {
    filter: brightness(110%)
  };
`;

export const ProfileImageStyled = styled.div`
  background-image: url(${ImagePrincipal});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;
  width: 100%;
  height: 0;
  padding-top: 70%;
`;
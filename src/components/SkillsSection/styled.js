import styled from "styled-components";

export const SkillsSectionStyled = styled.section`
  width: 100%;
  z-index: 1;
  background-color: ${({background}) => background};
  padding: 30px 0 0 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    padding: 20px 0 30px;
    text-transform: uppercase;
  }
`;

export const SkillsUlStyled = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px 40px;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 0 30px 0;

  li {
    margin: 10px 0;

    img {
      width: 60px;

      &:hover {
        transform: scale(1.3);
        transition: 600ms
      }
    }
  }
`;

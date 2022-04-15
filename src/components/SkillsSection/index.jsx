import {
  SkillsSectionStyled,
  SkillsUlStyled
} from "./styled";

import ContainerComponent from "../Container"
import { CirclesSkillsSectionComponent } from "../Circles";

import { useSelector } from "react-redux"

const SkillsSectionComponent = () => {
  const { content, theme } = useSelector(state => state);
  const { data } = content;

  return (
    <SkillsSectionStyled id="skills" background={theme.blueLight} >
      <ContainerComponent>
        <h2>{data.titles.skills}</h2>
        <SkillsUlStyled>
          {
            data.languages.map((lang) => (
                <li>
                  <img src={lang.image} alt={lang.name} title={lang.name} key={lang.name} loading='lazy' />
                </li>
              )
            )
          }
        </SkillsUlStyled>
        
        <CirclesSkillsSectionComponent />
      </ContainerComponent>
    </SkillsSectionStyled>
  );
};

export default SkillsSectionComponent;
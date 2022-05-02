import ContainerComponent from "../Container";
import {
  TitleStyled,
  ContentBoxStyled,
  ContentHeaderStyled,
  ContentMainStyled,
  ProfileSectionStyled,
  ProfileDivStyled,
  ProfileImageStyled,
  ContactButtonStyled
} from "./styled";

import { useSelector } from "react-redux";

const ProfileSectionComponent = () => {
  const { data } = useSelector(state => state.content)

  return (
    <ContainerComponent>
      <ProfileSectionStyled>
        <ProfileDivStyled>
          <ContentBoxStyled id="about">
            <ContentHeaderStyled>
              <TitleStyled>Paulo Henrique Magno</TitleStyled>
            </ContentHeaderStyled>
            <ContentMainStyled>
              <p>
                {data.resume}
              </p>
            </ContentMainStyled>
            <ContactButtonStyled href="#contacts">
              {data.titles.contact}
            </ContactButtonStyled>
          </ContentBoxStyled>
          
          <ProfileImageStyled />
        </ProfileDivStyled>
      </ProfileSectionStyled>     
    </ContainerComponent>
  );
};

export default ProfileSectionComponent;
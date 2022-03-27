import ContainerComponent from "../Container"
import {
  HeaderStyled,
  HeaderDivStyled,
  HeaderNavStyled,
  HeaderNavLinkStyled
} from './styled';

import { useDispatch, useSelector } from "react-redux";
import { setLanguageThunk } from "../../store/modules/language/thunks";

const HeaderComponent = () => {
  const { content, theme } = useSelector(state => state);
  const { data, language } = content;
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <ContainerComponent>
        <HeaderNavStyled>
          <HeaderDivStyled>
            <select
              value = {language}
              onChange = {(e) => dispatch(setLanguageThunk(e.currentTarget.value))}
            >
              <option value={"EN"}>English</option>
              <option value={"PT_BR"} defaultChecked>Português</option>
            </select>

            <HeaderNavLinkStyled color={theme.purple} href="#about">
              {data.titles.about}
            </HeaderNavLinkStyled>

            <HeaderNavLinkStyled color={theme.blue} href="#skills">
              {data.titles.skills}
            </HeaderNavLinkStyled>

            <HeaderNavLinkStyled color={theme.green} href="#projects">
              {data.titles.projects}
            </HeaderNavLinkStyled>

            <HeaderNavLinkStyled color={theme.wine} href="#certifications">
              {data.titles.certifications}
            </HeaderNavLinkStyled>

            <HeaderNavLinkStyled color={theme.yellow} href="#contact">
              {data.titles.contact}
            </HeaderNavLinkStyled>

          </HeaderDivStyled>
        </HeaderNavStyled>
      </ContainerComponent>
    </HeaderStyled>
  );
};

export default HeaderComponent;
import {
  HeaderNavStyled,
  HeaderNavButtonStyled
} from './styled';
import { useThemeContext } from '../../provider/theme';

const HeaderComponent = () => {
  const { theme } = useThemeContext()
  return (
    <HeaderNavStyled>
      <HeaderNavButtonStyled color={theme.purple}>
        Perfil
      </HeaderNavButtonStyled>
      <HeaderNavButtonStyled color={theme.blue}>
        Habilidades
      </HeaderNavButtonStyled>
      <HeaderNavButtonStyled color={theme.green}>
        Projetos
      </HeaderNavButtonStyled>
      <HeaderNavButtonStyled color={theme.purpleDark}>
        Certificados
      </HeaderNavButtonStyled>
      <HeaderNavButtonStyled color={theme.yellow}>
        Contato
      </HeaderNavButtonStyled>
    </HeaderNavStyled>
  );
};

export default HeaderComponent;
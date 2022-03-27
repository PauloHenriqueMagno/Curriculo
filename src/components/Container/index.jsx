import {
  ContainerStyled
} from "./styled";

const ContainerComponent = ({children}) => {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  );
};

export default ContainerComponent;
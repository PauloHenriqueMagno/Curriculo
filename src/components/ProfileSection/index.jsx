import {
  TitleStyled,
  ContentBoxStyled,
  ContentHeaderStyled,
  ContentMainStyled,
  ProfileSectionStyled
} from "./styled";

const ProfileSection = () => {
  return (
    <ProfileSectionStyled>
      <ContentBoxStyled>
        <ContentHeaderStyled>
          <TitleStyled>Paulo Henrique Magno</TitleStyled>
        </ContentHeaderStyled>
        <ContentMainStyled>
          <p>
            Sou Desenvolvedor Front End, possuo experiência em trabalho em equipe adquirido em projetos na Kenzie Academy, sou aberto a novos desafios e tecnologias e sempre a dispor de novas tarefas.
          </p>
          <p>
            Estou em busca de uma oportunidade para desenvolver e adquirir novos conhecimentos na área de programação.
          </p>
        </ContentMainStyled>
      </ContentBoxStyled>
    </ProfileSectionStyled>
  );
};

export default ProfileSection;
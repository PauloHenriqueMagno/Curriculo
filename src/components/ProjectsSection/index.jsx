import { useSelector } from 'react-redux';

import Container from '../Container'

import {
  ProjectsSectionStyled,
  ProjectCardStyled,
  ProjectsListStyled
} from './styled';

const ProjectsSectionComponent = () => {
  const { data } = useSelector( state => state.content)

  return (
    <ProjectsSectionStyled id="projects">
      <Container>
        <h2>{data.titles.projects}</h2>
        <ProjectsListStyled>
        {
          data.projects.map( project => {
            return (
              <ProjectCardStyled>
                <div class="project-card">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      class="project-image"
                      />
                  </a>
                  <div class="info">
                    <h3 class="title">
                      {project.title}
                    </h3>
                    <a href={project.repository} target="_blank" rel="noreferrer">
                      <img
                        src="https://raw.githubusercontent.com/PauloHenriqueMagno/images/main/languages/svg/github.svg"
                        alt="GitHub"
                        class="repository"
                      />
                    </a>
                  </div>
                </div>
              </ProjectCardStyled>
            )
          })
        }
        </ProjectsListStyled>
      </Container>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSectionComponent;
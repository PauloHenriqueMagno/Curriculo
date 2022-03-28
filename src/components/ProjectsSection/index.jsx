import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useCurrentWidth from '../../services/useCurrentWidth';

import Container from '../Container';

import Arrow from '../../assets/Arrow';

import {
  ProjectsSectionStyled,
  ProjectsListStyled,
  ArrowChangePage
} from './styled';

const ProjectsSectionComponent = () => {
  const { data } = useSelector( state => state.content);

  const width = useCurrentWidth();
  const className = width < 600 ? 'twoCards': width < 900 ? 'threeCards': 'fiveCards';
  const howMuchProjectsRender = className === 'twoCards'? 2 : className === 'threeCards' ? 3 : 5;
  
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil( data.projects.length / howMuchProjectsRender );

  const ShowProjectsCard = (projects) => {
    return projects.map(project => {
      if (project === {}){
        return <></>
      }

      return (
        <li class="cards">
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
        </li>
      );
    });
  };

  const changePage = (page) => {
    if(page >= 0 && page < maxPage){
      setPage(page);
    };
  };

  const getProjects = () => {
    const newProjectsList = [];

    for (let index = 0; index < howMuchProjectsRender; index++){
      const project = data.projects[index + (page*howMuchProjectsRender)]

      if (project){
        newProjectsList.push(project)
      }
    }

    setProjects(newProjectsList);
  }

  const ShowPagesButtons = () => {
    const buttons = []
    for (let buttonPage = 0; buttonPage < maxPage; buttonPage++){
      if (buttons.length < 5 && (page <= 2 || (buttonPage >= (maxPage - 5)) || (buttonPage > (page - 3) && buttonPage < (page + 3)))){
        buttons.push(
          <button
            onClick={() => changePage(buttonPage)}
            id={`page${buttonPage+1}`}
            class={buttonPage === page ? 'actualPage': ''}
          >
            {buttonPage+1}
          </button>
        );
      };
    };

    return buttons;
  };

  useEffect(()=>{
    setPage(e => e);
    getProjects();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, howMuchProjectsRender]);

  return (
    <ProjectsSectionStyled id="projects">
      <Container>
        <h2>{data.titles.projects}</h2>
        <ProjectsListStyled id={className}>
          {ShowProjectsCard(projects)}
        </ProjectsListStyled>

        <nav>
          <ArrowChangePage
            onClick={() => changePage(page-1)}
          >
            <Arrow />
          </ArrowChangePage>

          <div class="pagesButtons">
            {ShowPagesButtons()}
          </div>

          <ArrowChangePage
            onClick={() => changePage(page+1)}
            id="next"
          >
            <Arrow />
          </ArrowChangePage>
        </nav>

      </Container>
    </ProjectsSectionStyled>
  );
};

export default ProjectsSectionComponent;
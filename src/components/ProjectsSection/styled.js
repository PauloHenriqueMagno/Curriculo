import styled from 'styled-components';

export const ProjectsSectionStyled = styled.section`
  padding: 100px 0 0 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    padding: 0 0 30px;
    text-transform: uppercase;
  }
`;

export const ProjectsListStyled = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
`;

export const ProjectCardStyled = styled.li`
  width: 50%;
  min-width: 50%;
  padding: 0 5.6%;
  scroll-snap-align: start;
  
  .project-card {
    margin: 0 0 30px 0;
    border: 4px solid grey;
    border-radius: 5px;
    position: relative;
  };

  h3 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  };

  .project-image {
    width: 100%;
  };

  .info {
    padding: 10px 0 30px;

    .repository {
      position: absolute;
      width: 50px;
      right: 0%;
      bottom: 0;
      transform: translate(50%, 50%);
      background-color: #FFFFFF;
      border-radius: 100%;
      border: none;
    };
  };

  @media (min-width: 600px) {
    width: 33%;
    min-width: 33%;
    padding: 0 4.5%;
  };

  @media (min-width: 900px) {
    width: 20%;
    min-width: 20%;
    padding: 0 2%;
  };
`;
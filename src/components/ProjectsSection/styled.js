import styled from 'styled-components';

export const ProjectsSectionStyled = styled.section`
  padding: 100px 0 0 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    padding: 0 0 30px;
    text-transform: uppercase;
  }

  nav {
    display: flex;
    justify-content: space-between;

    .pagesButtons {
      display: flex;
      justify-content: space-between;

      button {
        margin: 2px;
        width: 30px;
        height: 30px;

        &.actualPage {
          filter: brightness(70%);
        };
      };
    };
  };
`;

export const ProjectsListStyled = styled.ul`
  width: 100%;
  display: flex;
  position: relative;

  &#twoCards {
    .cards {
      width: 50%;
      min-width: 50%;
      padding: 0 4.5%;
    };
  };

  &#threeCards {
    .cards {
      width: 33%;
      min-width: 33%;
      padding: 0 3%;
    }
  };

  &#fiveCards {
    .cards {
      width: 20%;
      min-width: 20%;
      padding: 0 1.5%;
    };
  };


  .hidden {
    display: none;
  };

  .cards {
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
  }
`;

export const ArrowChangePage = styled.button`
  border-radius: 100%;
  background: none;

  svg {
    width: 3rem;
    height: 3rem;
  };

  &#next {
    svg {
      transform: rotate(180deg)
    };
  };
`;
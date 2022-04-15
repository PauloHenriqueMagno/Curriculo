import styled from "styled-components";

export const ContactSectionStyled = styled.section`
  width: 100%;
  padding: 7% 0 0 0;
`;

export const DivContactSectionStyled = styled.div`
  background-color: ${ ({ backgroundColor }) => backgroundColor };
  padding: 20px 10px;
`;

export const DivContactsInfoStyled = styled.div`
  display: flex;
  flex-direction: column;

  .contactsInfo {
    width: 100%;
    padding: 25px 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
      font-weight: 600;
    };

    a {
      padding: 5px;
      background: #FFFFFF;
    }

    @media (min-width: 700px) {
      padding: 5px 25px;
    }
  };

  .contactsInfo:first-of-type {
    border-bottom: 2px solid black;
  };

  .contactsInfo:last-of-type {
    border-top: 2px solid black;
  };

  .socialMedia {
    display: flex;
    flex-direction: row;
    gap: 10px;

    li {
      
      a {
        display: flex;
        background: none; */
      };
      
      img {
        width: 35px;
        height: 35px;
      };
    };
  };

  .links {
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      width: max-content;
      text-decoration: none;
      font-weight: 700;
      color: white;
      background-color: #f33446;
      border-radius: 15px;
    }
  }

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;

    .contactsInfo:first-of-type {
      border-right: 2px solid black;
      border-bottom: none;
    };

    .contactsInfo:last-of-type {
      border-left: 2px solid black;
      border-top: none;
    }
  }
`;

import { useSelector } from "react-redux";

import ContainerComponent from "../Container";

import { CirclesContactsSectionComponent } from '../Circles'

import {
  ContactSectionStyled,
  DivContactSectionStyled,
  DivContactsInfoStyled
} from "./styled";

const ContactsSectionComponent = () => {
  const { content, theme } = useSelector(state => state);
  const { data } = content;

  return (
    <>
      <ContainerComponent>
        <CirclesContactsSectionComponent />
      </ContainerComponent>
      <ContactSectionStyled id="contacts">
        <DivContactSectionStyled backgroundColor={theme.blueLight} >
          
          <ContainerComponent>
            <DivContactsInfoStyled>
              <div class="contactsInfo">
                <h3>{data.titles.contact}</h3>
                <p>E-mail: {data.contacts.email}</p>
                <p>Cel.: {data.contacts.cel}</p>
              </div>
              <div class="contactsInfo">
                <h3>{data.titles.socialMedia}</h3>
                <ul class="socialMedia">
                  <li>
                    <a href={data.socialMedia.github} target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/PauloHenriqueMagno/images/main/languages/svg/github.svg" alt="GitHub" />
                    </a>
                  </li>
                  <li>
                    <a href={data.socialMedia.linkedin} target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/PauloHenriqueMagno/images/main/languages/svg/linkedin.svg" alt="Linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href={data.socialMedia.whatsapp} target="_blank" rel="noreferrer">
                      <img src="https://raw.githubusercontent.com/PauloHenriqueMagno/images/main/languages/svg/whatsapp.svg" alt="Whatsapp" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="contactsInfo links">
                <h3>Links</h3>
                <a href={data.links.resumeFile} target="_blank" rel="noreferrer">
                  {data.links.resume}
                  <img src="https://raw.githubusercontent.com/PauloHenriqueMagno/images/main/languages/svg/drive.svg" alt="Curriculo - Drive" />
                </a>
              </div>
            </DivContactsInfoStyled>
          </ContainerComponent>

        </DivContactSectionStyled>
      </ContactSectionStyled>
    </>
  );
};

export default ContactsSectionComponent;

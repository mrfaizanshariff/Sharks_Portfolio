import React from "react";
import { DiPhotoshop, DiReact, DiZend } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="skills">
    <SectionDivider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've variety of design skills, and expertise in different tools
    </SectionText>
    <br />
    <List>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>PhotoShop</ListTitle>
          <ListParagraph>
            {" "}
            Experience <br /> with PhotoShop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>PhotoShop</ListTitle>
          <ListParagraph>
            {" "}
            Experience <br /> with PhotoShop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem" />
        <ListContainer>
          <ListTitle>PhotoShop</ListTitle>
          <ListParagraph>
            {" "}
            Experience <br /> with PhotoShop
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

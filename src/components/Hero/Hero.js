import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I'm
        <br />
        Shahrukh Khan
      </SectionTitle>
      <SectionText>
        I am your one stop solution for all design needs.
      </SectionText>
      <a href="/SharksWork.pdf" download="ShahrukhsWork.pdf" target="_blank">
        <Button>My Work</Button>
      </a>
      <a
        href="/ShahrukhResume.pdf"
        download="ShahrukhsResume.pdf"
        target="_blank"
      >
        <Button>My Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;

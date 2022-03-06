import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import { DivAnim, LeftSection } from "./HeroStyles";

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
        <Button>My Design</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;

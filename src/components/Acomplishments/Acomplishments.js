import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 1000, text: "Logo Designs" },
  { number: 1000, text: "Posters" },
  { number: 600, text: "Clients" },
  { number: 5000, text: "Graphic Designs" },
];

const Acomplishments = () => (
  <section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </section>
);

export default Acomplishments;

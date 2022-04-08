import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";

import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
  Form,
  Input,
  TextArea,
  Inputfile,
} from "./AcomplishmentsStyles";

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
    <Form
      method="POST"
      action="https://formsubmit.co/el/nanati"
      enctype="multipart/form-data"
    >
      <Input type="hidden" name="_captcha" value="false" />
      <Input type="hidden" name="_template" value="table"></Input>
      <Input type="text" name="Name" placeholder="Your Name" required />
      <Input type="text" name="Email" placeholder="Your Email" required />
      <TextArea
        type="text"
        name="message"
        placeholder="Your message"
        required
      />
      <Inputfile
        type="file"
        name="attachment"
        accept="application/pdf"
        required
      />
      <Button type="submit">Send</Button>
    </Form>
  </section>
);

export default Acomplishments;

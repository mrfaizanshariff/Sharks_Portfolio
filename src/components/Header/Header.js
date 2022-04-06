import Link from "next/link"; // links pages and section in our website
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
// import SharksWork from "/public/SharksWork.pdf";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span1,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <DiCssdeck size="3rem" /> <Span1>Shahrukh's Designs</Span1>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://facebook.com" target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com" target="_blank">
        <AiFillTwitterSquare size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

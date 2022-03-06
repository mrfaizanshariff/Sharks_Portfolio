import React from "react";
import { Carousel } from "react-responsive-carousel";
import { projects } from "../../constants/constants";

const carousel = () => (
  <Carousel>
    {projects.map(({ id, image }) => (
      <div key={id}>
        <img src={image}></img>
      </div>
    ))}
  </Carousel>
);

export default carousel;

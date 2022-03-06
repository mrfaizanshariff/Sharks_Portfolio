import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
// import { Carousel } from "react-responsive-carousel";
import carousel from "../carousel/carousel";
import ReactElasticCarousel from "react-elastic-carousel";

const breakpoints = [{ width: 1, itemsToShow: 1 }];
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <ReactElasticCarousel breakPoints={breakpoints}>
      {projects.map((item, index) => (
        <div key={index}>
          <Img src={item.image}></Img>
        </div>
      ))}
    </ReactElasticCarousel>
  </Section>
);

// <Section nopadding id="projects">

//   <SectionDivider />
//   <SectionTitle main>Projects</SectionTitle>
//   <GridContainer>
//     {projects.map(({ id, image, tags, title, description, source }) => (
//       <BlogCard key={id}>
//         <Img src={image} />
//         <TitleContent>
//           <HeaderThree title>{title}</HeaderThree>
//           <Hr />
//         </TitleContent>
//         <CardInfo>{description}</CardInfo>
//         <div>
//           <TitleContent>
//             Tools Used
//             <TagList>
//               {tags.map((tag, i) => (
//                 <Tag key={i}> {tag}</Tag>
//               ))}
//             </TagList>
//           </TitleContent>
//         </div>
//       </BlogCard>
//     ))}
//   </GridContainer>
// </Section>

export default Projects;

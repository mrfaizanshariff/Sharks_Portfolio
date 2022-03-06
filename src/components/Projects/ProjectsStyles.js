import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;

  @media only screen and (min-device-width: 768px) and (max-device-width: 950px) and (orientation: portrait) {
    height: 80vh;
  }
  @media only screen and (min-device-width: 640px) and (max-device-width: 767px) and (orientation: portrait) {
    height: 60vh;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 639px) and (orientation: portrait) {
    height: 50vh;
  }
  @media only screen and (min-device-width: 415px) and (max-device-width: 479px) and (orientation: portrait) {
    height: 35vh;
  }
  @media only screen and (min-device-width: 300px) and (max-device-width: 414px) and (orientation: portrait) {
    height: 25vh;
  }
  /* @media ${(props) => props.theme.breakpoints.sm} {
    height: 60vh !important;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.xs} {
    height: 40vh !important;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 65vh !important;
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.mdlg} {
    height: 80vh !important;
    width: 100%;
  } */
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;

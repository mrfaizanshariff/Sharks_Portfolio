import styled from "styled-components";

export const DivAnim = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline;
    z-index: -100;
  }
`;
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

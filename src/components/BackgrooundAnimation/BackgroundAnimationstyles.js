import styled from "styled-components";

export const DivAnim = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: inline;
    z-index: -100;
  }
`;

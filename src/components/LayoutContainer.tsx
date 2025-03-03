import styled from "styled-components";
import { breakpoints } from "../utils";

export const LayoutContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: ${breakpoints.small}) {
    width: 740px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 980px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    width: 1170px;
  }
`;

import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../utils";

export const InfoCard = styled.div`
  padding: 15px;
  margin-bottom: 30px;
  background-color: ${colors.white};
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 200ms ease-in-out;

  &:hover {
    border-color: ${colors.gray2};
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.05);
  }

  @media only screen and (max-width: ${breakpoints.large}) {
    padding: 30px;
  }
`;

export const InfoHeading = styled.h2`
  margin-bottom: 0;
`;

export const InfoSummary = styled.div``;

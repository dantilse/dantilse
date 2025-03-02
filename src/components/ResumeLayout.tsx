import React, { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints, colors, commonColors } from "../utils";

const Resume = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
  margin-top: 60px;

  @media screen and (max-width: ${breakpoints.small}) {
    flex-direction: column;
  }
`;

const LeftCol = styled.div`
  flex-basis: 280px;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`;

const RightCol = styled.div`
  flex-basis: 320px;
  flex-grow: 3;
`;

export const ResumeLayout = ({ left, right }: { left: any; right: any }) => (
  <Resume>
    <LeftCol>{left}</LeftCol>
    <RightCol>{right}</RightCol>
  </Resume>
);

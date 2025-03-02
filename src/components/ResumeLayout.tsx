import React, { ReactNode } from "react";
import styled from "styled-components";
import { breakpoints, colors, commonColors } from "../utils";

const Resume = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-right: -15px;
  margin-left: -15px;
`;

const LeftCol = styled.div`
  flex-basis: 280px;
  flex-grow: 0;
  flex-shrink: 0;
  padding-right: 30px;
  padding-left: 30px;

  @media screen and (max-width: ${breakpoints.small}) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const RightCol = styled.div`
  flex-basis: 320px;
  flex-grow: 3;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: ${breakpoints.small}) {
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid ${commonColors.borderColor};
  }
`;

export const ResumeLayout = ({ left, right }: { left: any; right: any }) => (
  <Resume>
    <LeftCol>{left}</LeftCol>
    <RightCol>{right}</RightCol>
  </Resume>
);

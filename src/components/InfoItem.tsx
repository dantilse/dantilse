import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { commonColors, fontSizes } from "../utils";

const Title = styled.h3`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  font-size: 20px;
`;

const TitleMain = styled.span`
  flex-basis: 330px;
  flex-grow: 1;
  padding-right: 30px;
  margin-bottom: 5px;
`;

const TitleMeta = styled.span`
  font-size: ${fontSizes.small};
  font-weight: normal;
  color: ${commonColors.textMuted};
  line-height: 1.5;
`;

export const InfoItem = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  > :last-child {
    margin-bottom: 0;
  }
`;

export const InfoMeta = styled.p`
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: bold;
  color: ${commonColors.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const InfoContent = styled.div`
  position: relative;

  ul {
    margin-left: 1em;
    list-style-type: "\203A";

    li {
      padding-left: 1em;
    }
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

export const InfoTitle: FC<{ meta?: string; title: string }> = ({
  meta,
  title,
}) => (
  <Title>
    <TitleMain>{title}</TitleMain>
    {meta && <TitleMeta>{meta}</TitleMeta>}
  </Title>
);

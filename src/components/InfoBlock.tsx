import React from "react";
import styled from "styled-components";
import { commonColors, fontSizes } from "../utils";
import { Image } from "./Image";

const Block = styled.div`
  position: relative;
`;

const Figure = styled.figure`
  .img {
    max-width: 120px;
    margin-bottom: 30px;
    border-radius: 50%;
  }
`;

const Name = styled.h2`
  margin-bottom: 5px;
`;

const Title = styled.p`
  color: ${commonColors.textMuted};
`;

const List = styled.ul`
  padding-left: 0;
  margin-left: 0;
  list-style: none;
  font-size: ${fontSizes.small};
  color: ${commonColors.textMuted};

  > li {
    padding-left: 0;
    margin-bottom: 0;
    line-height: 2;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const InfoBlock = () => (
  <Block>
    <Figure>
      <Image />
      <figcaption>
        <Name>Daniel Ilse</Name>
        <Title>Software Engineer</Title>
      </figcaption>
    </Figure>
    <List>
      <li>Austin, TX</li>
      <li>
        <a href="mailto:dantilse@gmail.com">dantilse@gmail.com</a>
      </li>
      <li>
        <a href="tel:512748641">(512) 748-6461</a>
      </li>
    </List>
  </Block>
);

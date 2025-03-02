import React from "react";
import styled from "styled-components";
import { Detail } from "../types";
import { breakpoints, colors } from "../utils";
import { InfoContent, InfoItem, InfoMeta, InfoTitle } from "./InfoItem";

export const Card = styled.div`
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

export const InfoSummary = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

const List = styled.ul`
  margin-left: 1em;
  list-style: "›" outside none;
`;

const ListItem = styled.li`
  padding-left: 1em;
`;

interface InfoCardProps {
  heading: string;
  items: Detail[];
}

export const InfoCard = ({ heading, items }: InfoCardProps) => {
  return (
    <Card>
      <InfoHeading>{heading}</InfoHeading>
      {items.map(
        ({ description, highlights = [], subtitle, metadata, title }) => (
          <InfoItem>
            <InfoTitle meta={metadata} title={title} />
            <InfoMeta>{subtitle}</InfoMeta>
            <InfoContent>
              {description.map((text) => (
                <p>{text}</p>
              ))}
              {highlights.length > 0 && (
                <List>
                  {highlights.map((highlight) => (
                    <ListItem>{highlight}</ListItem>
                  ))}
                </List>
              )}
            </InfoContent>
          </InfoItem>
        )
      )}
    </Card>
  );
};

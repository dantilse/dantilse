import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Item = styled(Link)`
  display: block;
  padding: 15px;
  margin-bottom: 30px;
  color: #333;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.05);
  transition: all 200ms ease-in-out;

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  margin-bottom: 5px;
`;

const Metadata = styled.p`
  font-size: 12px;
  margin-bottom: 5px;
`;

const Excerpt = styled.p`
  margin-bottom: 0;
`;

const postDate = (string: string) => {
  let d = new Date(string);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as Intl.DateTimeFormatOptions;
  return d.toLocaleDateString("en-US", options);
};

const PostItemPreview = ({
  id,
  title,
  date,
  excerpt,
  slug,
}: {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}) => (
  <Item to={slug} key={id}>
    <Title>{title}</Title>
    <Metadata>{postDate(date)}</Metadata>
    <Excerpt>{excerpt}</Excerpt>
  </Item>
);

export default PostItemPreview;

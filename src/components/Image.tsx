import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const imageSize = 200;

const StyledImage = styled.div`
  max-width: ${imageSize}px;
  overflow: hidden;
  margin-bottom: 30px;
  border-radius: 50%;
`;

export const Image = () => {
  return (
    <StyledImage>
      <StaticImage
        alt="profile image"
        src="../images/dantilse-profile-pic--square.jpg"
        placeholder="blurred"
        layout="fixed"
        width={imageSize}
        height={imageSize}
      />
    </StyledImage>
  );
};

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { commonColors, fontSizes } from "../utils";
import { GlobalStyle } from "./globalStyles";
import Header from "./Header";
import { LayoutContainer } from "./LayoutContainer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  padding: 30px 15px;
  font-size: ${fontSizes.small};
  color: ${commonColors.textMuted};
  text-align: center;
  border-top: 1px solid ${commonColors.borderColor};
`;

export const Layout = ({ children }: { children: any }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
          siteDescription={data.site.siteMetadata.description}
        />
        <LayoutContainer>{children}</LayoutContainer>
        <Footer>
          <div>©&nbsp;{new Date().getFullYear()}, Dantilse</div>
        </Footer>
      </Wrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

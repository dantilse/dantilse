/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import { commonColors, fontSizes } from "../utils";
import { LayoutContainer } from "./LayoutContainer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  flex-grow: 1;
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
        <LayoutContainer>
          <Main>{children}</Main>
        </LayoutContainer>
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

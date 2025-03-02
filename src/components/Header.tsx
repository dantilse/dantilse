import { Link } from "gatsby";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { LayoutContainer } from "./LayoutContainer";
import { breakpoints, colors, commonColors, fontSizes } from "../utils";

const SiteHeader = styled.header`
  padding: 15px;
`;

const SiteHeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled(Link)`
  flex-shrink: 0;
  display: block;
  font-size: ${fontSizes.large};
  color: ${commonColors.textColor};
  text-decoration: none;
`;

const Name = styled.span`
  display: block;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: ${fontSizes.small};
`;

const Toggle = styled.button`
  color: ${commonColors.textColor};
  background-color: transparent;
  border: none;

  @media screen and (min-width: ${breakpoints.small}) {
    display: none;
  }
`;

// transition: transform $animation-duration-base $cubic-bezier-base;
const List = styled.ul`
  margin-bottom: 0;
  margin-left: 0;
  list-style: none;

  @media screen and (min-width: ${breakpoints.small}) {
    display: flex;
  }

  li {
    list-style: none;
    margin-bottom: 0;
  }

  a {
    display: inline-block;
    padding: 10px;
    font-size: ${fontSizes.small};
    color: ${commonColors.textColor};
    text-decoration: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`;

const SiteNav = styled.div`
  position: relative;
  margin-left: auto;
  text-align: right;
`;

const UL = styled.ul`
  margin-bottom: 0;
  margin-left: 0;
  list-style: none;

  @media screen and (min-width: ${breakpoints.small}) {
    display: flex;
  }
`;

const LI = styled.li`
  list-style: none;
  margin-bottom: 0;
`;

const LinkStyles = css`
  display: inline-block;
  padding: 10px;
  font-size: ${fontSizes.small};
  color: ${commonColors.textColor};
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Anchor = styled.a`
  ${LinkStyles}
`;

const StyledLink = styled(Link)`
  ${LinkStyles}
`;

type HeaderProps = {
  menuLinks: {
    link: string;
    name: string;
  }[];
  siteTitle: string;
  siteDescription: string;
};

const Header = ({ menuLinks, siteTitle, siteDescription }: HeaderProps) => {
  return (
    <SiteHeader>
      <LayoutContainer>
        <SiteHeaderInner>
          <SiteTitle to="/">
            <Name>{siteTitle}</Name>
            <Description>{siteDescription}</Description>
          </SiteTitle>
          <SiteNav>
            {/* <Toggle open={open} onClick={() => setOpen(!open)}>
              &#9776;
            </Toggle> */}
            <UL>
              {menuLinks.map((link) => (
                <LI key={link.name}>
                  {link.link.startsWith("//") ||
                  link.link.startsWith("mailto:") ? (
                    <Anchor href={link.link}>{link.name}</Anchor>
                  ) : (
                    <StyledLink to={link.link}>{link.name}</StyledLink>
                  )}
                </LI>
              ))}
            </UL>
          </SiteNav>
        </SiteHeaderInner>
      </LayoutContainer>
    </SiteHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

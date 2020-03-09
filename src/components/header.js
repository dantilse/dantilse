import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LayoutContainer from "./layout-container"
import Logo from "./logo"

import headerStyles from "../scss/components/header.module.scss"

let hs = headerStyles

const Header = ({ menuLinks, siteTitle }) => (
  <header className={hs.siteHeader}>
    <LayoutContainer>
      <div className={hs.siteHeaderInner}>
        {/* <h1 class={hs.siteTitle}>
          <Link to="/">{siteTitle}</Link>
        </h1> */}
        <Link to="./">
          <Logo fill="#333" width="100" />
        </Link>
        <ul class={hs.siteNav}>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </LayoutContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

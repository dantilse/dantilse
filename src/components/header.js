import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "../scss/components/header.module.scss"

let hs = headerStyles

const Header = ({ menuLinks, siteTitle }) => (
  <header className={hs.siteHeader}>
    <h1 class={hs.siteTitle}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <ul class={hs.siteNav}>
      {menuLinks.map(link => (
        <li key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

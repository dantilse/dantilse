/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import LayoutContainer from "./layout-container"
import "./layout.scss"
import footerStyles from "../scss/components/footer.module.scss"
import layoutStyles from "../scss/components/layout-container.module.scss"

const Layout = ({ children }) => {
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
  `)

  return (
    <div className={layoutStyles.siteWrapper}>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
      />
      <div className={layoutStyles.siteMain}>
        <main className={layoutStyles.container}>{children}</main>
      </div>
      <footer className={footerStyles.siteFooter}>
        <div className={layoutStyles.container}>
          ©&nbsp;{new Date().getFullYear()}, Dantilse
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

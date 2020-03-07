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
import "./layout.css"
import footerStyles from '../scss/components/footer.module.scss'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          padding: '30px 15px',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}
      >
        <main>{children}</main>
      </div>
      <footer className={footerStyles.siteFooter}>
        ©{new Date().getFullYear()}, Dantilse
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

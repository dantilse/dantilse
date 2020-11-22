import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../scss/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <figure className="home-image">
      <Image />
      <figcaption>Hi, I'm Dan</figcaption>
    </figure>
  </Layout>
)

export default IndexPage

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link
          to="/blog/"
          style={{ display: "inline-block", marginTop: 30, marginBottom: 60 }}
        >
          Back to Blog
        </Link>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

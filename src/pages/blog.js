import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import PostItemPreview from "../components/postItemPreview"

const getMarkdownPosts = graphql`
  {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <div>
      <h1>Blog</h1>
      <StaticQuery
        query={getMarkdownPosts}
        render={data => (
          <>
            <h4>{data.allMarkdownRemark.totalCount} posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <PostItemPreview
                id={node.id}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                slug={node.fields.slug}
              />
            ))}
          </>
        )}
      />
    </div>
  </Layout>
)

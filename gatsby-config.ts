import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    author: `@dantilse`,
    description: `UX/UI Developer`,
    menuLinks: [
      // {
      //   name: "Articles",
      //   link: "/blog",
      // },
      {
        name: "LinkedIn",
        link: "//www.linkedin.com/in/dantilse/",
      },
      {
        name: "dantilse@gmail.com",
        link: "mailto:dantilse@gmail.com",
      },
    ],
    siteUrl: `https://www.dantilse.com`,
    title: `Dantilse`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
  ],
};

export default config;

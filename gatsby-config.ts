import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  // jsxRuntime: "automatic",
  siteMetadata: {
    title: "ChanHyu/blog",
    siteUrl: "https://www.yourdomain.tld",
    author: "Hyuga-Tsukui",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: "src/images/icon.png",
    //   },
    // },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: `${process.env.CMS_API_KEY}`,
        serviceId: `${process.env.CMS_SERVICE_ID}`,
        apis: [
          {
            endpoint: "blog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [`${process.env.GA_TRACKING_ID}`],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};

export default config;

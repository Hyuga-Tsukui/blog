import type { GatsbyConfig } from "gatsby";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  // jsxRuntime: "automatic",
  siteMetadata: {
    title: "ChanHyu/blog",
    siteUrl: "https://chan-hyu.jp/",
    author: "Hyuga-Tsukui",
    description:
      "当ブログは、現役エンジニアである私Hyが不定期に更新する大体技術系を扱うブログです。Zennなどのプラットホームに投稿しないような記事が供養される場所です。",
    twitterUsername: "hy_twen",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/IMG_6986.jpeg",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
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

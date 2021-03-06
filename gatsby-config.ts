import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ChanHyu/blog`,
    siteUrl: `https://www.chan-hyu.jp`,
    description: `Hyuga-Tsukuiの技術ブログ。備忘録。主に Web 開発関連の技術情報のアウトプットの場として用意しました。幅広く公開したいものは、Qita、Zennに投稿し、自分の中でまだ煮詰まっていないものや備忘録的なものはこちらに書く予定です。`,
    author: `Hyuga-Tsukui`,
    social: {
      twitter: `hy_twen`,
      github: `Hyuga-Tsukui`,
      zenn: `dimdim1996`,
      qita: `Hyuga-Tsukui`
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typegen",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-0T0RG9HQ7P", // Google Analytics / GA
        ],
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `{
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }`,
        feeds: [
          {
            serialize: ({query: {site, allMdx}}) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/blog/${node.slug}`,
                  custom_elements: [{ "content:encoded": node.body }],
                })
              })
            },
            query: `{
              allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                  frontmatter {
                    date
                    title
                  }
                  slug
                }
              }
            }`,
          output: "/rss.xml",
          title: "ChanHyu/blog's RSS Feed",
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: ` query PluginSitemap {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }`,
        resolveSiteUrl: (data: resolveSiteUrlType) => {
          return data.site.siteMetadata.siteUrl
        },
        resolvePagePath: (page) => {
          return page.path
        },
        resolvePages: (data) => {
          return data.allSitePage.nodes
        },
        serialize: (page, {resolvePagePath}) => {
          return {
            url: resolvePagePath(page),
            changefreq: 'daily',
            priority: 0.7,
          }
        }
      }
    }
  ],
};

type resolveSiteUrlType = {
  site: {
    siteMetadata: {
      siteUrl: string
    }
  }
}

export default config;

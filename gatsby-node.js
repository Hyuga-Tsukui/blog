const path = require("path");
const cheerio = require("cheerio");
const hljs = require("highlight.js");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        site {
          siteMetadata {
            title
            author
          }
        }
        allMicrocmsBlog(sort: { publishedAt: DESC }) {
          edges {
            node {
              blogId
              title
              publishedAt
              id
              content
            }
            previous {
              blogId
              title
            }
            next {
              blogId
              title
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  result.data.allMicrocmsBlog.edges.forEach((post, _) => {
    const $ = cheerio.load(post.node.content);
    $("pre code").each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass("hljs");
    });
    createPage({
      path: `/articles/${post.node.blogId}`,
      component: path.resolve("./src/components/template.tsx"),
      context: {
        id: post.node.id,
        siteMetadata: result.data.site.siteMetadata,
        microcmsBlog: post.node,
        content: $.html(),
        previous: post.next, // https://github.com/Hyuga-Tsukui/hy_dev/issues/3
        next: post.previous,
      },
    });
  });
};

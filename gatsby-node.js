const path = require("path");

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
    createPage({
      path: `/articles/${post.node.blogId}`,
      component: path.resolve("./src/components/template.tsx"),
      context: {
        id: post.node.id,
        siteMetadata: result.data.site.siteMetadata,
        microcmsBlog: post.node,
        previous: post.next, // https://github.com/Hyuga-Tsukui/hy_dev/issues/3
        next: post.previous,
      },
    });
  });
};

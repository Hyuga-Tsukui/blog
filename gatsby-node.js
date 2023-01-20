exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMicrocmsBlog(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              id
              blogId
              content
              createdAt
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // result.data.allMicrocmsPost.edges.forEach((post, index) => {
  //   createPage({
  //     path: post.node.id,
  //     component: path.resolve("./src/pages/blog-post.js"),
  //     context: {
  //       slug: post.node.id,
  //     },
  //   });
  // });
};

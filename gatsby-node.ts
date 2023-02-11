import { GatsbyNode } from "gatsby";
import path from "path";
import { load } from "cheerio";

import hljs from "highlight.js";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<Queries.createPagesQuery>(
    `
      query createPages {
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
              eyecatch {
                url
              }
              description
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

  result.data?.allMicrocmsBlog.edges.forEach((post, _) => {
    const $ = load(post.node.content ?? "");
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
        siteMetadata: result.data?.site?.siteMetadata,
        microcmsBlog: post.node,
        content: $.html(),
        previous: post.next, // https://github.com/Hyuga-Tsukui/hy_dev/issues/3
        next: post.previous,
      },
    });
  });
};

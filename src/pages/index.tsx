import { css } from "@emotion/react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { ArticleCard } from "../components/ArticleCard";
import React from "react";
import { Layout } from "../components/Layout";

const postList = css`
  padding: 0;
  section {
    margin-bottom: 13px;
  }
  li {
    list-style: none;
  }
`;

const viewContainerStyles = css`
  margin-top: 32px;
  color: "#232129";
  fontfamily: "-apple-system, Roboto, sans-serif, serif";
  display: flex;
  justify-content: center;
`;

const IndexPage: React.FC<PageProps<Queries.AllMicrocmsBlogQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <main css={viewContainerStyles}>
        <ul css={postList}>
          {data.allMicrocmsBlog.edges.map((item) => (
            <li key={item.node.id}>
              <ArticleCard
                title={item.node.title ?? ""}
                postedAt={item.node.publishedAt ?? ""}
                url={`/articles/${item.node.blogId}`}
              />
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query AllMicrocmsBlog {
    allMicrocmsBlog(sort: { publishedAt: DESC }) {
      edges {
        node {
          blogId
          title
          publishedAt
          id
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
`;

export default IndexPage;
export const Head: HeadFC = () => <title>Home Page</title>;

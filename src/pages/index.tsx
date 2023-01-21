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

const articleListStyles = css`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const IndexPage: React.FC<PageProps<Queries.AllMicrocmsBlogQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <div css={articleListStyles}>
        <main>
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
      </div>
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
export const Head: HeadFC = () => <title>ChanHyu/blog</title>;

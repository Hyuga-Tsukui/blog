import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Layout } from "../../components/Layout";
import { css } from "@emotion/react";

type Props = {
  microcmsBlog: Queries.MicrocmsBlog;
};

type PageContextType = {
  id: string;
  previous: { blogId: string; title: string } | null;
  next: { blogId: string; title: string } | null;
};

const BlogPage: React.FC<PageProps<Props, PageContextType>> = ({
  data: { microcmsBlog },
  pageContext,
}) => (
  <Layout>
    <div
      css={css`
        max-width: 980px;
        margin: auto;
      `}
    >
      <main
        css={css`
          padding: 40px;
        `}
      >
        <h1>{microcmsBlog.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${microcmsBlog.content}`,
          }}
          css={css`
            img {
              max-width: 900px;
              height: auto;
            }
          `}
        />
        {/**TODO AriticleCardで統一したい */}
        {pageContext.next && (
          <Link to={`/articles/${pageContext.next.blogId}`}>次の記事</Link>
        )}
        {pageContext.previous && (
          <Link to={`/articles/${pageContext.previous.blogId}`}>
            前回の記事
          </Link>
        )}
      </main>
    </div>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query ($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      content
    }
  }
`;

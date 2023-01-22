import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Layout } from "../../components/Layout";
import { PostDetailPresenter } from "../../components/PostDetailPresenter";

type Props = {
  site: Queries.Site;
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
    <PostDetailPresenter
      title={microcmsBlog.title ?? ""}
      contentHtml={microcmsBlog.content ?? ""}
      previous={pageContext.previous}
      next={pageContext.next}
    />
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      content
    }
  }
`;

export const Head: HeadFC<Props, PageContextType> = ({ data }) => (
  <title>{`${data.site.siteMetadata?.title} | ${data.microcmsBlog.title}`}</title>
);

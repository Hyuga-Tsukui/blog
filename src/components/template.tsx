import React from "react";
import { HeadFC, PageProps } from "gatsby";
import { Layout } from "./Layout";
import { PostDetailPresenter } from "./PostDetailPresenter";

type PageContextType = {
  id: string;
  siteMetadata: Queries.SiteSiteMetadata;
  microcmsBlog: Queries.MicrocmsBlog;
  content: string;
  previous: { blogId: string; title: string } | null;
  next: { blogId: string; title: string } | null;
};

const BlogPage: React.FC<PageProps<undefined, PageContextType>> = ({
  pageContext,
}) => (
  <Layout>
    <PostDetailPresenter
      title={pageContext.microcmsBlog.title ?? ""}
      contentHtml={pageContext.content ?? ""}
      previous={pageContext.previous}
      next={pageContext.next}
    />
  </Layout>
);

export default BlogPage;

export const Head: HeadFC<undefined, PageContextType> = ({ pageContext }) => (
  <title>{`${pageContext.siteMetadata?.title} | ${pageContext.microcmsBlog.title}`}</title>
);

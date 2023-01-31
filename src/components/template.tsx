import React, { useEffect } from "react";
import { HeadFC, PageProps } from "gatsby";
import { Layout } from "./Layout";
import { PostDetailPresenter } from "./PostDetailPresenter";
import { Seo } from "./Seo";

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
}) => {
  // TwitterJS
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);
  return (
    <Layout>
      <PostDetailPresenter
        title={pageContext.microcmsBlog.title ?? ""}
        publishedAt={pageContext.microcmsBlog.publishedAt ?? ""}
        contentHtml={pageContext.content ?? ""}
        previous={pageContext.previous}
        next={pageContext.next}
      />
    </Layout>
  );
};

export default BlogPage;

export const Head: HeadFC<undefined, PageContextType> = ({ pageContext }) => (
  <Seo
    pageTitle={pageContext.microcmsBlog.title!} // TODO maybe型を制御
    pathname={`/articles/${pageContext.microcmsBlog.blogId}`}
    image={pageContext.microcmsBlog.eyecatch?.url!}
    description={pageContext.microcmsBlog.description!}
  />
);

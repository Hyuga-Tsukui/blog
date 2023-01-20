import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components/Layout";

type Props = {
  data: { microcmsBlog: Queries.MicrocmsBlog };
};

const BlogPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <main>
      <h1>{data.microcmsBlog.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlog.content}`,
        }}
      />
    </main>
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

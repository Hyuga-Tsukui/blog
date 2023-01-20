import React from "react";
import { graphql } from "gatsby";

type Props = {
  data: { microcmsBlog: Queries.MicrocmsBlog };
};

const BlogPage: React.FC<Props> = ({ data }) => (
  <>
    <h1>{data.microcmsBlog.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.content}`,
      }}
    />
  </>
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

import React, { FC } from "react";
import { Layout } from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../../components/MDXComponetns";
import Seo from "../../components/seo";
type Props = {
  data: GatsbyTypes.BlogPostQuery;
};

const BlogPost: FC<Props> = (props) => {
  const { data } = props;

  const title = data.mdx?.frontmatter?.title || "NON TITLE"
  return (
    <>
      <Seo title={title} description={data.mdx?.frontmatter?.description}/>
      <Layout pageTitle={title}>
        <p>Posted: {data.mdx?.frontmatter?.date}</p>
        <MDXProvider components={MDXComponents}>
          <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
        </MDXProvider>
      </Layout>
    </>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
      }
      body
    }
  }
`;

export default BlogPost;

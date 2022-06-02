import React, { FC } from "react";
import { Layout } from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
type Props = {
  data: GatsbyTypes.BlogPostQuery;
};

const BlogPost: FC<Props> = (props) => {
  const { data } = props;

  const hero_image = data.mdx?.frontmatter?.hero_image;

  // @ts-ignore
  const image = hero_image ? getImage(hero_image) : undefined;
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title || "NON TITLE"}>
      <p>Posted: {data.mdx?.frontmatter?.date}</p>
      {image && <GatsbyImage image={image} alt={""} />}
      <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;

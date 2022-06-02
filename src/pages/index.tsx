import React, { FC } from "react";
import { Layout } from "../components/layout";
import { graphql, Link } from "gatsby";

type Props = {
  data: GatsbyTypes.MyBlogsQuery;
};

const BlogPage: FC<Props> = (props) => {
  const { data } = props;
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter?.title || "NON TITLE"}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter?.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const MyBlogQuery = graphql`
  query MyBlogs {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;

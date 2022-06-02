import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { BlogPostCard } from "../components/blogPostCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location}>
      <Seo title="All posts" />
      {/* TODO ここちゃんとCSSにする */}
      <div className="post-list">
        <ol style={{ listStyle: `none`, paddingTop: "0", marginTop: "0" }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.slug
            return (
              <li key={post.slug}>
                <BlogPostCard
                  title={title}
                  slug={post.slug}
                  postedDate={post.frontmatter.date}
                  description={post.frontmatter.description || post.excerpt}
                />
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          title
          description
        }
      }
    }
  }
`

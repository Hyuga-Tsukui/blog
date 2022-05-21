import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <p>© {data.site.siteMetadata?.author?.name || ""}</p>
    </footer>
  )
}

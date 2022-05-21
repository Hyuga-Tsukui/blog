/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { socialLinks, socialLinkItem } from "./bio.module.css"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.png"
          width={56}
          height={56}
          quality={95}
          alt="Profile picture"
        />
        <div>
          <strong>{author.name}</strong>
          <div className={socialLinks}>
            <a
              href={`https://twitter.com/${social?.twitter}`}
              className={socialLinkItem}
            >
              <StaticImage
                src="../images/twitter-icon.svg"
                width={24}
                height={24}
              />
            </a>
            <a
              href={`https://github.com/${social?.github}`}
              className={socialLinkItem}
            >
              <StaticImage
                src="../images/github-icon.svg"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <p>{author?.summary}</p>
    </>
  )
}

export default Bio

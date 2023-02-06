import { graphql, useStaticQuery } from "gatsby";

type F = () => {
  siteMetadata:
    | Exclude<Queries.SiteMetaDataQuery["site"], null>["siteMetadata"]
    | undefined;
  file: Queries.SiteMetaDataQuery["file"];
};

export const useSiteMetadata: F = () => {
  const data = useStaticQuery<Queries.SiteMetaDataQuery>(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          siteUrl
        }
      }
      file(relativePath: { eq: "IMG_6986.jpeg" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return {
    siteMetadata: data.site?.siteMetadata,
    file: data.file,
  };
};

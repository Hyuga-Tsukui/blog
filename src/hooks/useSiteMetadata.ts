import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
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
    }
  `);

  return data.site?.siteMetadata!;
};

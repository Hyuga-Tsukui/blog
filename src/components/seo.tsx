import { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import React from "react";

interface Props {
  title?: string;
  description?: string;
}

const Seo: FC<Props> = (props) => {
  const {title, description} = props;
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            author
            description
            social {
              twitter
              github
            }
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title={title || site?.siteMetadata?.title}
      meta={[
        {
          name: `description`,
          content: description || site?.siteMetadata?.description,
        },
        {
          name: `twitter:card`,
          content: `sumary`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description || site?.siteMetadata?.description,
        },
      ]}
    />
  );
};

export default Seo;
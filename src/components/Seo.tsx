import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type Props = {
  pageTitle?: string;
  pathname?: string;
  image?: string;
  description?: string;
};

export const Seo: React.FC<Props> = ({
  pageTitle,
  pathname,
  image,
  description,
}) => {
  const { siteMetadata, file } = useSiteMetadata();

  const seo = {
    url: pathname
      ? `${siteMetadata?.siteUrl}${pathname || ""}`
      : siteMetadata?.siteUrl!,
  };

  return (
    <>
      <title>{`${siteMetadata?.title} | ${pageTitle}`}</title>
      <meta name="description" content={siteMetadata?.description!} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${siteMetadata?.title} | ${pageTitle}`}
      />
      <meta name="twitter:url" content={seo.url} />
      <meta
        name="twitter:description"
        content={description || siteMetadata?.description!}
      />
      <meta
        name="twitter:image"
        content={
          image ||
          `${siteMetadata?.siteUrl}${file?.childImageSharp?.fixed?.src}`
        }
      />
      <meta name="twitter:creator" content={siteMetadata?.twitterUsername!} />
    </>
  );
};

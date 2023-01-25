import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type Props = {
  pageTitle?: string;
  pathname: string;
};

export const Seo: React.FC<Props> = ({ pageTitle, pathname }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: defaultTitle,
    description: defaultDescription,
    // image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ""}`,
    twitterUsername,
  };

  return (
    <>
      <title>{`${defaultTitle} | ${pageTitle}`}</title>
      <meta name="description" content={seo.description ?? undefined} />
      {/* <meta name="image" content={seo.image} /> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title ?? undefined} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description ?? undefined} />
      {/* <meta name="twitter:image" content={seo.image} /> */}
      <meta name="twitter:creator" content={seo.twitterUsername ?? undefined} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
      />
      {/* {children} */}
    </>
  );
};

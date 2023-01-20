import { css } from "@emotion/react";
import { graphql, HeadFC, Link, useStaticQuery } from "gatsby";
import React from "react";

const headerLogStyle = {
  fontSize: "2.25rem",
  textDecoration: "none",
  color: "darkslateblue",
};

const viewContainerStyles = css`
  margin-top: 32px;
  color: "#232129";
  fontfamily: "-apple-system, Roboto, sans-serif, serif";
  display: flex;
  justify-content: center;
`;

const footerStyle = css`
  display: flex;
  justify-content: center;
`;

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery<Queries.MySiteMetaDataQuery>(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  return (
    <>
      <header>
        <Link style={headerLogStyle} to="/">
          {data.site?.siteMetadata?.title}
        </Link>
      </header>
      <main css={viewContainerStyles}>{children}</main>
      <footer css={footerStyle}>
        <p>
          <small>
            {`©　${data.site?.siteMetadata?.author}`}
            <br />
            このサイトはGoogle Analyticsを使用しています。
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
            >
              詳しく見る
            </a>
          </small>
        </p>
      </footer>
    </>
  );
};

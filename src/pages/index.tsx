import { css } from "@emotion/react";
import { HeadFC, PageProps, Link, useStaticQuery, graphql } from "gatsby";
import { ArticleCard } from "../components/ArticleCard";
import React from "react";

const viewContainerStyles = css`
  margin-top: 32px;
  color: "#232129";
  fontfamily: "-apple-system, Roboto, sans-serif, serif";
  display: flex;
  justify-content: center;
`;

const headerLogStyle = {
  fontSize: "2.25rem",
  textDecoration: "none",
  color: "darkslateblue",
};

const postList = css`
  padding: 0;
  article {
    margin-bottom: 13px;
  }
`;

const articles = [
  { title: "Blogはじめました", postedAt: "2023/01/01" },
  { title: "最高の椅子はこれだ！", postedAt: "2023/01/07" },
  {
    title: "最近Steamでローグライト×ビルディングにハマっている",
    postedAt: "2023/01/10",
  },
];

const footerStyle = css`
  display: flex;
  justify-content: center;
`;

const IndexPage: React.FC<PageProps> = () => {
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
      <main css={viewContainerStyles}>
        <ul css={postList}>
          {articles.map((item) => (
            <ArticleCard article={item} />
          ))}
        </ul>
      </main>
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

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

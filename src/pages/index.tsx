import { HeadFC, PageProps, Link } from "gatsby";
import { css } from "@emotion/react";
import { ArticleCard } from "../components/ArticleCard";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headerLogStyle = {
  fontSize: "2.25rem",
  textDecoration: "none",
  color: "darkslateblue",
};

const postList = css`
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

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header>
        <Link style={headerLogStyle} to="/">
          ChanHyu/blog
        </Link>
      </header>
      <main style={pageStyles}>
        <ul css={postList}>
          {articles.map((item) => (
            <ArticleCard article={item} />
          ))}
        </ul>
      </main>
      <footer>
        <p>
          <small>
            ©　Hyuga-Tsukui
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

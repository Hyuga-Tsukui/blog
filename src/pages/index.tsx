import { HeadFC, PageProps, Link } from "gatsby";
import { css } from "@emotion/react";

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

const articleStyle = css`
  border: black 1px solid;
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
    </>
  );
};

type ArticleCardProps = {
  article: { title: string; postedAt: string };
};

/**
 * 記事ののサマリを表示したカード
 * @param param0
 * @returns
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article css={articleStyle}>
      <time dateTime={article.postedAt}>{article.postedAt}</time>
      <h2>{article.title}</h2>
    </article>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

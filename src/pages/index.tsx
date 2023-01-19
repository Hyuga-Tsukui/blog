import { HeadFC, PageProps, Link } from "gatsby";
import { css } from "@emotion/react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
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

import { css } from "@emotion/react";

const articleStyle = css`
  border: black 1px solid;
`;

type Props = {
  article: { title: string; postedAt: string };
};

/**
 * 記事ののサマリを表示したカード
 * @param param0
 * @returns
 */
export const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <article css={articleStyle}>
      <time dateTime={article.postedAt}>{article.postedAt}</time>
      <h2>{article.title}</h2>
    </article>
  );
};

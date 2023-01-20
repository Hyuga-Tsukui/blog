import { css } from "@emotion/react";
import { Link } from "gatsby";
import React from "react";

const articleStyle = css`
  border: black 1px solid;
  padding: 16px;
  position: relative;
`;

type Props = {
  article: { title: string; postedAt: string; url: string };
};

/**
 * 記事ののサマリを表示したカード
 * @param param0
 * @returns
 */
export const ArticleCard: React.FC<Props> = ({ article }) => {
  return (
    <article css={articleStyle}>
      <small>
        <time dateTime={article.postedAt}>{article.postedAt}</time>
      </small>
      <h2>{article.title}</h2>
      <Link
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
        to={article.url}
      />
    </article>
  );
};

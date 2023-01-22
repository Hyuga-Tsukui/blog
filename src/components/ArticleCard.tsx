import { css } from "@emotion/react";
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";

const articleStyle = css`
  background: rgba(117, 117, 117, 0.5);
  border-radius: 5px;
  color: white;
  padding: 16px;
  position: relative;
  &:hover {
    background: rgba(117, 117, 117, 1);
  }
  transition: 0.3s;
`;

type Props = {
  title: string;
  postedAt: string;
  url: string;
};

/**
 * 記事ののサマリを表示したカード
 */
export const ArticleCard: React.FC<Props> = ({ title, postedAt, url }) => {
  return (
    <section css={articleStyle}>
      <small>
        <time dateTime={postedAt}>{dayjs(postedAt).format("YYYY/MM/DD")}</time>
      </small>
      <h1
        css={css`
          font-size: 18px;
        `}
      >
        {title}
      </h1>
      <Link
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
        to={url}
      />
    </section>
  );
};

import { css } from "@emotion/react";
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";

const articleStyle = css`
  background-color: #757575;
  border-radius: 5px;
  color: white;
  padding: 16px;
  position: relative;
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
      <h2>{title}</h2>
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

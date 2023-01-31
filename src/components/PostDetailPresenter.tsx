import { css } from "@emotion/react";
import dayjs from "dayjs";
import { Link } from "gatsby";
import React from "react";

type Props = {
  title: string;
  contentHtml: string;
  publishedAt: string;
  previous?: {
    blogId: string;
    title: string;
  } | null;
  next?: {
    blogId: string;
    title: string;
  } | null;
};

/**
 * 記事詳細View
 */
export const PostDetailPresenter: React.FC<Props> = ({
  title,
  publishedAt,
  contentHtml,
  previous,
  next,
}) => {
  return (
    <div
      css={css`
        max-width: 980px;
        margin: auto;
        padding: 32px 16px 0 16px;
      `}
    >
      <main>
        <h1
          css={css`
          font-size: 24px;
        `}
        >
          {title}
        </h1>
        {/**TODO Chipに変更 */}
        <small>
          公開：
          <time dateTime={publishedAt}>
            {dayjs(publishedAt).format("YYYY/MM/DD HH:mm")}
          </time>
        </small>
        <hr
          css={css`
          opacity: 0.16
        `}
        />
        <div
          css={css`
            line-height: 1.8;
          `}
          // rome-ignore lint/security/noDangerouslySetInnerHtml: SRC Rich Text Editor
          dangerouslySetInnerHTML={{
            __html: `${contentHtml}`,
          }}
        />
      </main>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          padding: 40px;
        `}
      >
        {previous && (
          <Link to={`/articles/${previous.blogId}`}>前回の記事</Link>
        )}
        {next && <Link to={`/articles/${next.blogId}`}>次の記事</Link>}
      </div>
    </div>
  );
};

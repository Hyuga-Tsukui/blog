import { css } from "@emotion/react";
import { Link } from "gatsby";
import React from "react";

type Props = {
  title: string;
  contentHtml: string;
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
  contentHtml,
  previous,
  next,
}) => {
  return (
    <div
      css={css`
        max-width: 980px;
        margin: auto;
      `}
    >
      <main>
        <h1>{title}</h1>
        <div
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

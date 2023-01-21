import { css } from "@emotion/react";
import { PageProps } from "gatsby";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";

const DraftPage: React.FC<PageProps> = ({ location }) => {
  const { contentId, draftKey } = queryString.parse(location.search);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(`${process.env.CMS_API_URL}${contentId}?draftKey=${draftKey}`, {
      headers: {
        "X-MICROCMS-API-KEY": `${process.env.CMS_API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setData({ microcmsBlog: res }));
  }, []);

  if (data === null) {
    return null;
  }
  return (
    <Layout>
      <div
        css={css`
          max-width: 980px;
          margin: auto;
        `}
      >
        <main
          css={css`
            padding: 40px;
          `}
        >
          <h1>{data.microcmsBlog.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsBlog.content}`,
            }}
            css={css`
              img {
                max-width: 900px;
                height: auto;
              }
            `}
          />
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              padding: 40px;
            `}
          ></div>
        </main>
      </div>
    </Layout>
  );
};

export default DraftPage;

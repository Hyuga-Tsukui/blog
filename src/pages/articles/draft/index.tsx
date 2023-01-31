import { PageProps } from "gatsby";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { Layout } from "../../../components/Layout";
import { PostDetailPresenter } from "../../../components/PostDetailPresenter";

const DraftPage: React.FC<PageProps> = ({ location }) => {
  React.useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", "https://platform.twitter.com/widgets.js");
    s.setAttribute("async", "true");
    document.head.appendChild(s);
  }, []);

  const { contentId, draftKey } = queryString.parse(location.search);
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
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
      <PostDetailPresenter
        title={data.microcmsBlog.title}
        contentHtml={data.microcmsBlog.content}
      />
    </Layout>
  );
};

export default DraftPage;

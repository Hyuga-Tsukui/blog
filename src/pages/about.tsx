import React from "react";
import { Layout } from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <h2>当ブログについて</h2>
      <p>
        主に Web 開発関連の技術情報のアウトプットの場として用意しました。
        幅広く公開したいものは、Qita、Zenn
        に投稿し、自分の中でまだ煮詰まっていないものや備忘録的なものはこちらに書く予定です。
        昨今エンジニアの発信は当たり前になっていると思いますが、発信のハードルを私個人としては感じています。
        なので、まあ自分しか見ないだろうという場所として作った、発信の練習の場として活かしていきたいです！
      </p>
      <h2>私について</h2>
      <p>
        都内の建設向けSaaSを提供する事業会社で働いているアプリケーションエンジニアです。
      </p>
    </Layout>
  );
};

export default AboutPage;

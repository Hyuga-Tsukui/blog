import React, { FC } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  // @ts-ignore
} from "./layout.module.css";

type Props = {
  pageTitle: string;
};

export const Layout: FC<Props> = (props) => {
  const { pageTitle, children } = props;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <p>
          <small>
            ©　Hyuga-Tsukui created-at 2022
            <br />
            このサイトはGoogle Analyticsを使用しています。
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://policies.google.com/technologies/partner-sites?hl=ja"
            >
              詳しく見る
            </a>
          </small>
        </p>
        <p>
          <small></small>
        </p>
      </footer>
    </div>
  );
};

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
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  pageTitle: string;
};

export const Layout: FC<Props> = (props) => {
  const { pageTitle, children } = props;

  const data = useStaticQuery<GatsbyTypes.LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          social {
            twitter
            github
            zenn
            qita
          }
        }
      }
    }
  `);

  const social = data.site?.siteMetadata?.social;

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site?.siteMetadata?.title}</header>
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
          <li className={navLinkItem}>
            <a
              href={`https://twitter.com/${social?.twitter}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                alt="My Twitter Link"
                src="../images/twitter-icon.svg"
                width={24}
                height={24}
                quality={95}
              />
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href={`https://github.com/${social?.github}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                alt="My GitHub Link"
                src="../images/github-icon.svg"
                width={24}
                height={24}
                quality={95}
              />
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href={`https://zenn.dev/${social?.zenn}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                role="img"
                style={{ width: 24, height: 24, fill: "#3EA8FF" }}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Zenn</title>
                <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z" />
              </svg>
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href={`https://qiita.com/${social?.qita}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                alt="My Qita Link"
                src="../images/qita-icon.png"
                width={24}
                height={24}
                quality={95}
              />
            </a>
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

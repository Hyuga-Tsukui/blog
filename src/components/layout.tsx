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
import {Helmet} from "react-helmet";

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
          }
        }
      }
    }
  `);

  const social = data.site?.siteMetadata?.social;
  const title = `${pageTitle} | ${data.site?.siteMetadata?.title}`

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'ja'
        }}
        title={title}
        meta={[
          {
            name: `twitter:card`,
            content: `sumary`
          },
          {
            name: `twitter:creator`,
            content: data.site?.siteMetadata?.social?.twitter || ``,
          },
          {
            name: `twitter:title`,
            content: title,
          },
        ]}
      />
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
    </>
  );
};

import * as React from "react"
import { Link } from "gatsby"
import { SideMenu } from "./sidemenu"
import { MainContainer } from "./mainContainer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <header className="global-header">{header}</header>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <MainContainer>{children}</MainContainer>
        <SideMenu />
      </div>
    </>
  )
}

export default Layout

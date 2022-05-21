import * as React from "react"
import { SideMenu } from "./sidemenu"
import { MainContainer } from "./mainContainer"
import { Header } from "./header"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header location={location} />
      <div className="global-wrapper">
        <MainContainer>{children}</MainContainer>
        <SideMenu />
      </div>
    </>
  )
}

export default Layout

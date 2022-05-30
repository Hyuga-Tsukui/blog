import * as React from "react"
import { SideMenu } from "./sidemenu"
import { MainContainer } from "./mainContainer"
import { Header } from "./header"
import { Footer } from "./footer"

const Layout = ({ location, children }) => {
  return (
    <div className="layout">
      <Header location={location} />
      <MainContainer>{children}</MainContainer>
      <SideMenu />
      <Footer />
    </div>
  )
}

export default Layout

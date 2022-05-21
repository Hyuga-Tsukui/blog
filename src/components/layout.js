import * as React from "react"
import { SideMenu } from "./sidemenu"
import { MainContainer } from "./mainContainer"
import { Header } from "./header"
import { Footer } from "./footer"

const Layout = ({ location, children }) => {
  return (
    <>
      <Header location={location} />
      <div className="global-wrapper">
        <MainContainer>{children}</MainContainer>
        <SideMenu />
      </div>
      <Footer />
    </>
  )
}

export default Layout

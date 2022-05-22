import React from "react"

import { mainContainer } from "./mainContainer.module.css"

export const MainContainer = props => {
  const { children } = props
  return <main className="main-container">{children}</main>
}

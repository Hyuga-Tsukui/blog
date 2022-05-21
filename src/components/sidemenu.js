import React from "react"
import Bio from "./bio"
import { sidemenu } from "./sidemenu.module.css"

export const SideMenu = () => {
  return (
    <div className={sidemenu}>
      <Bio />
    </div>
  )
}

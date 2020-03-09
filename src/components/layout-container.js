import React from "react"
import styles from "../scss/components/layout-container.module.scss"

const LayoutContainer = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default LayoutContainer

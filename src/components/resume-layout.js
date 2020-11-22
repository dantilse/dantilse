import React from "react"
import styles from "../scss/components/resume-layout.module.scss"

const ResumeLayout = ({ left, right }) => (
  <div className={styles.resume}>
    <div className={styles.resumeLeft}>{left}</div>
    <div className={styles.resumeRight}>{right}</div>
  </div>
)

export default ResumeLayout

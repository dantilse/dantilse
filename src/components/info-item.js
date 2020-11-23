import React from "react"
import styles from "../scss/components/info-item.module.scss"

const InfoItem = ({ children }) => <div className={styles.item}>{children}</div>

const InfoTitle = ({ meta, children }) => (
  <h3 className={styles.itemTitle}>
    <span className={styles.itemTitleMain}>{children}</span>{" "}
    {meta ? <span className={styles.itemTitleMeta}>{meta}</span> : ""}
  </h3>
)

const InfoMeta = ({ children }) => <p className={styles.itemMeta}>{children}</p>

const InfoContent = ({ children }) => (
  <div className={styles.itemContent}>{children}</div>
)

export { InfoItem, InfoTitle, InfoMeta, InfoContent }

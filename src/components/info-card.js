import React from "react"
import styles from "../scss/components/info-card.module.scss"

const InfoCard = ({ children }) => <div className={styles.card}>{children}</div>

const InfoHeading = ({ children }) => (
  <h2 className={styles.cardHeading}>{children}</h2>
)

const InfoSummary = ({ children }) => (
  <div className={styles.cardSummary}>{children}</div>
)

export { InfoCard, InfoHeading, InfoSummary }

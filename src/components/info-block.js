import { Link } from "gatsby"
import React, { useState } from "react"
import Image from "./image"

import styles from "../scss/components/info-block.module.scss"

const InfoBlock = () => (
  <div className={styles.infoBlock}>
    <figure className={styles.infoImage}>
      <Image />
      <figcaption>
        <h2 className={styles.infoName}>Daniel Ilse</h2>
        <p className={styles.infoTitle}>UX/UI Developer</p>
      </figcaption>
    </figure>
    <ul className={styles.infoList}>
      <li>Austin, TX</li>
      <li>
        <a href="mailto:dantilse@gmail.com">dantilse@gmail.com</a>
      </li>
      <li>
        <a href="tel:512748641">(512) 748-6461</a>
      </li>
    </ul>
  </div>
)

export default InfoBlock

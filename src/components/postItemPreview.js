import { Link } from "gatsby"
import React from "react"

import styles from "../scss/components/post-item-preview.module.scss"

const postDate = (string) => {
    let d = new Date(string);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
}

const PostItemPreview = ({id, title, date, excerpt, slug }) => (
    <Link className={styles.postItem} to={slug} key={id}>
        <h3 className={styles.postItemTitle}>{title}</h3>
        <p className={styles.postItemMetadata}>{postDate(date)}</p>
        <p className={styles.postItemExcerpt}>{excerpt}</p>
    </Link>
)

export default PostItemPreview

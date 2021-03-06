import React from 'react'
import styles from "./styles.module.css"

function PostsPage({id, title, body, date}) {
    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.Id}>Author id - {id}</div>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Body}>{body}</div>
                <div className={styles.Date}>date: {date.slice(0,10)}</div>
            </div>
        </React.Fragment>
    )
}

export default PostsPage

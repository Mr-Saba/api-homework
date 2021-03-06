import React from 'react'
import styles from "./styles.module.css"

function CategoriesPage({id, interest, description}) {
    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.Id}>User id - {id}</div>
                <div className={styles.Interest}>Interests - {interest}</div>
                <div className={styles.Description}>{description}</div>
            </div>
        </React.Fragment>
    )
}

export default CategoriesPage

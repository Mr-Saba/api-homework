import React from 'react'
import {Link} from "react-router-dom"
import styles from "./styles.module.css"

function Button() {
    return (
            <Link to="/" className={styles.Parent}><button className={styles.BackButton}>back to the main page</button></Link>
    )
}

export default Button

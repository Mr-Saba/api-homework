import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styles from "./styles.module.css"

function Controller() {
    const Arrow = {
        color: "#ff6b6b",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        fontSize: "40px",
        marginTop: "5px"
    }
    return (
        <React.Fragment>
            <div className={styles.Topic}>Check It Out</div>
            <ArrowDownwardIcon style={Arrow}> </ArrowDownwardIcon>
            <div className={styles.Container}>
                <Link className={styles.Link} to="/users"><button className={styles.Button}>users</button></Link>
                <Link className={styles.Link} to="/posts"><button className={styles.Button}>posts</button></Link>
                <Link className={styles.Link} to="/comments"><button className={styles.Button}>comments</button></Link>
                <Link className={styles.Link} to="/todos"><button className={styles.Button}>todos</button></Link>
                <Link className={styles.Link} to="/categories"><button className={styles.Button}>categories</button></Link>
                <Link className={styles.Link} to="/products"><button className={styles.Button}>products</button></Link>
            </div>
        </React.Fragment>
    )
}

export default Controller

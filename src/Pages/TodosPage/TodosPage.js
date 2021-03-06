import React from 'react'
import styles from "./styles.module.css"

function TodosPage({id, completed, title, date}) {
    console.log(completed)
    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.Id}>Author id - {id}</div>
                <div className={styles.Title}>{title}</div>
                <div className={styles.Completed}>{(completed == false) ? (<div style={{color: "red"}}>is not completed</div>) : (<div style={{color: "green"}}>completed</div>)}</div>
                <div className={styles.Date}>Date - {date.slice(0,10)}</div>
            </div>
        </React.Fragment>
    )
}

export default TodosPage

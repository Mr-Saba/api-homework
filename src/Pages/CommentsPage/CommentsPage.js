import React from 'react'
import styles from "./styles.module.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


function CommentsPage({id, name, email, comment}) {
    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.Id}> User id - {id}</div>
                <div className={styles.Name}>{name}</div>
                <div className={styles.Comment} style={{fontSize: "14px"}}>Comment <ArrowDownwardIcon /></div> 
                <div className={styles.Comment}>{comment}</div> <br/> <br/> <br/> 
                <div className={styles.Email}>User adress <ArrowDownwardIcon /></div>
                <div className={styles.Email}>{email}</div>

            </div>
        </React.Fragment>
    )
}

export default CommentsPage

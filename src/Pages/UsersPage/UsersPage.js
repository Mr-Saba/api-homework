import React, {useEffect} from 'react'
import {GiMale} from "react-icons/gi"
import {GiFemale} from "react-icons/gi"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styles from "./styles.module.css"



function UsersPage({name, email, gender, status, created_at}) {
    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.NameArea}>
                    <div className={styles.Name}>{name} </div>
                    <div>{(status=="Active") ? (<div className={styles.Active}></div>) : (<div className={styles.Inactive}></div>)}</div>
                </div>
                <div className={styles.Follow}>follow to this adress <ArrowDownwardIcon /></div>
                
                <div className={styles.Adress}>{email}</div>
                
                <div className={styles.GenderArea}>
                    <div className={styles.Gender}>Gender:</div>
                    <div className={styles.Gender}>{gender} {(gender=="Male") ? (<GiMale style={{color: "blue", marginLeft: "3px"}}/>) : (<GiFemale style={{color: "#ff3beb", marginLeft: "3px"}}/>)}</div>
                </div>
                <div className={styles.Joined}>Joined at:</div><div className={styles.Date}>{created_at.slice(0,10)}</div>
            </div>
        </React.Fragment>
    )
}

export default UsersPage

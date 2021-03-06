import React from 'react'
import styles from "./styles.module.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function ProductsPage({id, name, image, categories, description, price, discount}) {
    const PriceArea = {
        padding: "5px",
        color: "grey",
        display: "flex",
        justifyContent: "center",
    }
    return (
        <React.Fragment>
            <div className={styles.Item}>
                <div className={styles.Id}>id - {id}</div>
                <div className={styles.Name}>{name}</div>
                <div className={styles.ImageArea}>
                    <img src={image} className={styles.Image} />
                    <div className={styles.Categories}>Category: {categories} </div>
                </div>
                
                <div className={styles.Description}>{description}</div>
                <div style={PriceArea}>
                    <span style={{fontWeight: "bold"}}>Price:</span>
                    <div style={{marginLeft: "5px"}}></div>
                    <span style={{textDecoration: "line-through"}}>{price}</span>
                    <div style={{marginLeft: "5px"}}></div>
                    <span style={{color: "red", fontWeight: "bold"}}>{discount}</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductsPage

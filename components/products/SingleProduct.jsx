import React from 'react';
import Card from '../ui/Card';
import classes from "./SingleProduct.module.css"

const SingleProduct = (props) => {
    const date = props.date;
    return (
        <>
            <Card>
                <div className={classes.productContainer}>
                    <div className={classes.productDetails} >
                        <div className={classes.image}>
                            <img src={props.image} alt="img" />
                        </div>
                        <div className={classes.aboutProduct}>
                            <p className={classes.strongFont}>{props.name}</p>
                            <p className={classes.thinFont}>{props.brandName}</p>
                            <p className={classes.strongFont}>${props.price}</p>
                        </div>
                    </div>
                    <div className={classes.productMetaData}>
                        <div className={classes.location}>
                            <p className={classes.thinFont}>{props.city}</p>
                            <p className={classes.thinFont} style={{fontSize:"11px", color:"whiteSmoke"}}>{props.state}</p>
                        </div>
                        <p className={classes.thinFont}>Date: {date.slice(0,10)}</p>
                    </div>
                    <div className={classes.productDescription}>
                        <p className={classes.thinFont}>{props.description}</p>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default SingleProduct;

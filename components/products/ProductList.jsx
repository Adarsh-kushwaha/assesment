import React, { useState, useRef, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import classes from "./ProductList.module.css"
import { motion } from 'framer-motion';
import Filter from '../Filter/Filter';


const ProductList = (props) => {
    const [width, setWidth] = useState(0);
    const slider = useRef()

    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
    }, []);


    return (
        <>
            <div>
                <p className={classes.headings}>Product</p>
                <div style={{ backgroundColor: "#ffffff85", width: "100%", height: "2px", marginBottom: "21px" }} />
                <motion.div className={classes.sliderContainer} ref={slider}>
                    <motion.div className={classes.productsContainer} drag="x" dragConstraints={{ right: 0, left: -width }} >
                        {props.products.map((product) => (
                            <SingleProduct
                                key={Math.random()}
                                image={product.image}
                                name={product.product_name}
                                brandName={product.brand_name}
                                price={product.price}
                                state={product.address.state}
                                city={product.address.city}
                                date={product.date}
                                description={product.discription} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default ProductList;

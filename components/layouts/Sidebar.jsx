import React from 'react';
import Filter from '../Filter/Filter';
import classes from "./Sidebar.module.css"

const Sidebar = (props) => {
    return (
        <div className={classes.filterContainer}>
            <Filter products={props.products}/>
        </div>
        );
};

export default Sidebar;

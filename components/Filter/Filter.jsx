import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md"
import classes from "./Filter.module.css"

const Filter = ({applyFilter, onFilter, input}) => {

    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState(input)

    // const removeDuplicateDate = props.products.filter((index, item)=>{
    //     return props.products.indexOf(item) === index;
    // })

    // console.log(removeDuplicateDate)

    return (
        <>
            <div className={classes.dropdown}>
                <div className={classes.dropdownBtn} onClick={(e) => { setIsActive(!isActive) }}>
                    <p>{selected}</p>
                    <span className={classes.icon}><MdOutlineArrowDropDown size={21} /></span>
                </div>
                {isActive && (
                    <div className={classes.dropdownContent}>
                        {applyFilter.map((item) => {
                            return <div key={Math.random()} className={classes.dropdownItem} onClick={(e) => {setSelected(item), setIsActive(false), onFilter(selected)}}><p>{item}</p></div>
                        })}
                    </div>
                )}

            </div>
        </>
    );
};

export default Filter;

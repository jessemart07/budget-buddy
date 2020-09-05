import React from 'react';
import classes from './InfoItem.module.css';
const InfoItem = (props) => {
    return (
        <div className={classes.InfoItem}>
            <img className={classes.Icon} src={props.src} alt=""/>
            <p className={classes.Content}>
                {props.children}
            </p>
        </div>
    )
}

export default InfoItem;
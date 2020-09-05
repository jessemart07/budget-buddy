import React from 'react';
import classes from './Footer.module.css';
const Footer = () => {
    return(
        <div className={classes.Footer}>
            <div className={classes.Designer}>
                <p>Budget Buddy</p>
                <span>Designed by Jesse Martin</span>
            </div>
            <div className={classes.Copyright}>
                <p>Copyright 2020</p>
            </div>
        </div>
    )
}

export default Footer;
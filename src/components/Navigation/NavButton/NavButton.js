import React from 'react';
import classes from './NavButton.module.css';
const NavButton = (props) => {
    return (
        <div className={classes.NavButton}>
            <a href={props.link}>{props.children}</a>
        </div>
    )
}

export default NavButton;
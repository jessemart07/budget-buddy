import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationLink.module.css';
const NavigationLink = (props) => {
    return (
        <li className={classes.NavigationLink}>
            <a href={props.link}>{props.children}</a>
        </li>
    )
};

export default NavigationLink;
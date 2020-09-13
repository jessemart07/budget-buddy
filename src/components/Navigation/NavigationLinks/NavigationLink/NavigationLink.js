import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import classes from './NavigationLink.module.css';
const NavigationLink = (props) => {
    return (
        <li className={classes.NavigationLink}>
            <Link 
            
            activeClass={classes.active}
            to={props.link}
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            >{props.children}</Link>
        </li>
    )
};

export default NavigationLink;
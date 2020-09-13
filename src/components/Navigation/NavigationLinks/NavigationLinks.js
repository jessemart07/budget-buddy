import React from 'react';
import NavigationLink from './NavigationLink/NavigationLink';
import NavButton from '../NavButton/NavButton';
import classes from './NavigationLinks.module.css';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
    return (
        <React.Fragment>
        <ul className={classes.NavigationLinks}>
            <NavigationLink link="home">Home</NavigationLink>
            <NavigationLink link="about">What is it?</NavigationLink>
            <NavLink activeClassName={classes.active} className={classes.link} to={"/Create-budget"}>Get Started</NavLink>
            <NavigationLink link="contact">Contact</NavigationLink>
        </ul>
        
        <div className={classes.Account}>
            <NavButton link="#">Sign up</NavButton>
            <NavigationLink link="#">Log In</NavigationLink>
        </div>
        </React.Fragment>
        
    )
}

export default NavigationLinks;
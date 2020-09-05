import React from 'react';
import NavigationLink from './NavigationLink/NavigationLink';
import NavButton from '../NavButton/NavButton';
import classes from './NavigationLinks.module.css';
const NavigationLinks = () => {
    return (
        <React.Fragment>
        <ul className={classes.NavigationLinks}>
            <NavigationLink link="#">Home</NavigationLink>
            <NavigationLink link="#">What is it?</NavigationLink>
            <NavigationLink link="#">Get Started</NavigationLink>
            <NavigationLink link="#">Contact</NavigationLink>
        </ul>
        
        <div className={classes.Account}>
            <NavButton link="#">Sign up</NavButton>
            <NavigationLink link="#">Log In</NavigationLink>
        </div>
        </React.Fragment>
        
    )
}

export default NavigationLinks;
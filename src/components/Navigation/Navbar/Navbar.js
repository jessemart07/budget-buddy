import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import classes from './Navbar.module.css';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(() => ({
    Menu: {
        color: '#a3c6c4',
        zIndex: 5, 
        border: '1px solid #a3c6c4',
        borderRadius: '3px', 
        marginRight: '10px',
        height: '40px',
        width: '40px'
    },
    list: {
        width: 250
    }
}));

const Navbar = () => {

    const [isOpen, setIsOpen] = useState();
    const styles = useStyles();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setIsOpen(open);
      };

    const list = (
        <div 
        className={classes.list}
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}>
            <NavigationLinks></NavigationLinks>
        </div>
    )
    
    return(
        <div className={classes.Navbar}>
            <Logo></Logo>
            <div className={classes.Desktop}>
                <NavigationLinks></NavigationLinks>
            </div>
            
            <div className={classes.Mobile}>
            <IconButton className={styles.Menu}>
                <MenuIcon onClick={toggleDrawer(true)}></MenuIcon>
            </IconButton>
            <Drawer className={classes.SideDrawer}  open={isOpen} onClose={toggleDrawer(false)}>
                {list}
            </Drawer>
            </div>
            
        </div>   
    )
}

export default Navbar;
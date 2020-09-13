import React from 'react';
import classes from './GettingStartedBtn.module.css';
import arrow from '../../assets/img/Arrow_button.png';
import { NavLink } from 'react-router-dom';
const GettingStartedBtn = (props) => {
    const square = (
        <div className={classes.BtnSquare} style={{backgroundColor: props.color}}>
            <img src={arrow} alt=""/>
        </div>
    )
    return (
        <React.Fragment>
            
                <div className={classes.GettingStartedBtn} style={{backgroundColor: props.color}}>
                    <div className={classes.Text}>
                    <NavLink to='/Create-budget'>
                        {props.children}
                        </NavLink>
                    </div>
                    {props.square ? square: null}
                </div>
            
        </React.Fragment>
    )
}

export default GettingStartedBtn;
import React from 'react';
import classes from './GettingStartedBtn.module.css';
import arrow from '../../assets/img/Arrow_button.png';
const GettingStartedBtn = (props) => {
    return (
        <React.Fragment>
            <div className={classes.GettingStartedBtn}>
                <div className={classes.Text}>
                    {props.children}
                </div>
                <div className={classes.BtnSquare}>
                    <img src={arrow} alt=""/>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default GettingStartedBtn;
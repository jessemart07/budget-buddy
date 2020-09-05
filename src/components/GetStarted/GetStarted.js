import React from 'react';
import BackgroundImg from '../../assets/img/Get_started_bg.png';
import IconSplash from '../../assets/img/Icon_splash.png';
import GetStartedBtn from '../GettingStartedBtn/GettingStartedBtn';
import SeperatorCurve from '../../assets/img/Section_seperator_curve.png';
import classes from './GetStarted.module.css';
const GetStarted = () => {
    return (
        <div className={classes.GetStarted}>
            <img className={classes.IconSplash} src={IconSplash} alt=""/>
            <div className={classes.Content}>
                <p>
                    Sign up now and
                    get started with
                    Budget Buddy
                </p>
                <GetStartedBtn color="#ffc95e">Get Started</GetStartedBtn>
                </div>
        </div>
    )
}

export default GetStarted;
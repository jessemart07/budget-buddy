import React from 'react';
import classes from './About.module.css';
import SideImage from '../../assets/img/Splash_bg.png';
import Cellphone from '../../assets/img/Cellphone_placeholder.png';
import InfoItems from './InfoItems/InfoItems';
import CornerImg from '../../assets/img/Bottom_corner_image.png';


const About = () => {
    return(
        <div  title="about" id="about" className={classes.About}>
            <div className={classes.Heading}>
                <p>What is the</p>
                <h5>Budget Buddy</h5>
            </div>
            <div className={classes.SplashSideImage}>
                <img src={SideImage} alt=""/>
            </div>
            <div className={classes.Cellphone}>
                <img src={Cellphone} alt=""/>
            </div>
            <div className={classes.Content}>
                <InfoItems></InfoItems>
            </div>
            <div className={classes.CornerImg}>
                <img src={CornerImg} alt=""/>
            </div>
        </div>
    )
}

export default About;
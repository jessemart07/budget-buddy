import React from 'react';
import HeroBackgroundImg from '../../assets/img/Hero_Background_Image.png';
import HeroMobileImg from '../../assets/img/Mobile_Hero_Image.png';
import HeroCorner from '../../assets/img/Hero_corner_image.png';
import HeroIllustrationImg from '../../assets/img/Hero_Image.png';
import Grid from '@material-ui/core/Grid';
import classes from './HeroBackground.module.css';
import GettingStartedBtn from '../GettingStartedBtn/GettingStartedBtn';
import SeperatorCurve from '../SeperatorCurve/SeperatorCurve';

const HeroBackground = () => {
    return (
        <React.Fragment>
            <div className={classes.HeroBG}>
                <div className={classes.CornerImg}>
                    <img  src={HeroCorner} alt=""/>
                </div>
                <div className={classes.Illustration}>
                    <img src={HeroIllustrationImg} alt=""/>
                </div>
                <div className={classes.WideBackgroundImg}>
                    <img  src={HeroBackgroundImg} alt=""/>
                </div>
                <div className={classes.MobileBackgroundImg}>
                    <img  src={HeroMobileImg} alt=""/>
                </div>
                <div className={classes.ImageOverlay}>
                    <div className={classes.HeroText}>
                        <p className={classes.HeroHeading}>
                            The Budget Buddy
                        </p>
                        <p className={classes.HeroSubheading}>
                            Just A Simple Tool To Help You 
                            Budget And Fight Back For Your 
                            Cash
                        </p>
                    </div>
                    <div className={classes.GetStarted}>
                        <GettingStartedBtn>Get Started</GettingStartedBtn>
                    </div>
                </div>
                <div className={classes.Curve}>
                    <SeperatorCurve></SeperatorCurve>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeroBackground;
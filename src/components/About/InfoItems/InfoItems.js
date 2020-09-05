import React from 'react';
import InfoItem from './InfoItem/InfoItem';
import TimeIcon from '../../../assets/img/Time_Icon.png';
import GraphIcon from '../../../assets/img/Graph_Icon.png';
import GuessIcon from '../../../assets/img/Guess_Icon.png';
import classes from './InfoItems.module.css';
const InfoItems = () => {
    return(
        <div className={classes.InfoItems}>
            <div className={classes.row}>
                <InfoItem src={TimeIcon}>
                    Saves you time while 
                    you save your money 
                    with a simple interface
                    that anyone can use
                </InfoItem>
                <InfoItem src={GraphIcon}>
                    Take the guess work
                    out of your finances 
                    and finally know how to 
                    use your money in all 
                    the right places
                </InfoItem>
            </div>
            <div className={classes.row}>
                <InfoItem src={GuessIcon}>
                    Create a budget and 
                    keep track of your 
                    transactions so you know 
                    exactly where all your 
                    money is going
                </InfoItem>
            </div>
        </div>
        
    )
}

export default InfoItems;
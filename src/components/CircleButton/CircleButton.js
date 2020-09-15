import React from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import classes from './CircleButton.module.css';
const CircleButton = () => {
    
    return(
        <div className={classes.CircleButton}>
            <button className={classes.Circle}>
                <AddRoundedIcon 
                style={{
                    fontSize:"1.5rem",
                    marginBottom:"-4px"
                    }}/>
            </button>
        </div>
    )
}
export default CircleButton;
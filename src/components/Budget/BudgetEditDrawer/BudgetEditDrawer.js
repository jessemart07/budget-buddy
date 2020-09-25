import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './BudgetEditDrawer.module.css';
const EditBudget = (props) => {
    return(
        <div className={classes.EditDrawer}>
            <TextField 
                value={props.category}
                style={{
                    width:"80%",
                    marginTop:20
                }}></TextField>
            <TextField 
                value={props.budget}
                style={{
                    width:"80%",
                    marginTop:20
                }}></TextField>
            <Button
                variant="contained"
                color="secondary"
                style={{
                    width:"80%",
                    marginTop:20
                }}>Done</Button>
        </div>
    )
}

export default EditBudget;
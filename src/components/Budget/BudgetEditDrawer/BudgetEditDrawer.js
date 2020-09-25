import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import classes from './BudgetEditDrawer.module.css';
const EditBudget = (props) => {
    return(
        <div className={classes.EditDrawer}>
            <TextField 
                value={props.category}></TextField>
            <TextField 
                value={props.budget}
                style={{marginTop:20}}></TextField>
            <Button
                variant="contained"
                color="secondary"
                style={{marginTop:20}}>Edit Category</Button>
        </div>
    )
}

export default EditBudget;
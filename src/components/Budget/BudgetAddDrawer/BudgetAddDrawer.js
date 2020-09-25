import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './BudgetAddDrawer.module.css';
const BudgetAddDrawer = () => {
    let [name, setName] = useState();
    let [budgetAmount, setBudgetAmount] = useState();

    const HandleCategoryChange = (event) => {
        setName(event.target.value);
    }

    const HandleBudgetChange = (event) => {
        setBudgetAmount(event.target.value);
    }

    return(
        <div className={classes.AddForm}>
            <TextField
                
                placeholder="Category name"
                value={name}
                onChange={HandleCategoryChange}
                style={{
                    width:"80%",
                    marginTop:20
                }}></TextField>
            <TextField
                
                placeholder="Category Budget Amount"
                value={budgetAmount}
                onChange={HandleBudgetChange}
                className={classes.Input}
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
                }}>Add Category</Button>
        </div>
    )
}

export default BudgetAddDrawer;
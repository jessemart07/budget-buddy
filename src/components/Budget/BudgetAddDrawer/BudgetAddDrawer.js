import React, { useState } from 'react';

import { Button, TextField, Typography } from '@material-ui/core';
import BtnContainer from '../../ButtonContainer/ButtonContainer';
import classes from './BudgetAddDrawer.module.css';
import DrawerForm from '../../DrawerForm/DrawerForm';
const BudgetAddDrawer = (props) => {
    let [name, setName] = useState();
    let [budgetAmount, setBudgetAmount] = useState();

    const HandleCategoryChange = (event) => {
        setName(event.target.value);
    }

    const HandleBudgetChange = (event) => {
        setBudgetAmount(event.target.value);
    }

    const onSubmit = (event) => {
        props.function();
    }

    return(
        <DrawerForm>
            <Typography variant="h5" style={{textAlign:'center', marginBottom:20,  color:'secondary'}}>Add Category</Typography>

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
            <BtnContainer>
            <Button 
                variant="contained"
                color="secondary"
                style={{
                    marginTop:20
                }}
                onClick={onSubmit}>Done</Button>
                <Button             
                style={{
                    marginTop:20,
                    marginLeft:20,
                }}
                onClick={props.function}>Cancel</Button>
            </BtnContainer>
        </DrawerForm>
    )
}

export default BudgetAddDrawer;
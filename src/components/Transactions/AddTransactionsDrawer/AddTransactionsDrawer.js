import React, { useState } from 'react';
import { Button, InputLabel, MenuItem, TextField } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import classes from './AddTransactionsDrawer.module.css';
const TransactionDrawer = (props) => {
    
    let [description, setDescription] = useState()
    let [category, setCategory] = useState();
    let [date, setDate] = useState();
    let [amount, setAmount] = useState();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleDateChange = (value) => {
        setDate(value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const data = [
        {
            category:"Food", 
            budget: 1000,
            items:{
                item1:{
                        name:"Spur",
                        description: "A great meal at Spur",
                        amount: 500,
                        date: new Date("2020-07-26")
                    },
                item2:{
                        name:"Woolworths",
                        description: "Spent a lot on Gluten free stuff",
                        amount: 200,
                        date: new Date("2020-07-27")
                    }
            }
        },
        {
            category:"Clothing", 
            budget: 2000,
            items:{
                item1:{
                        name:"Mr.Price",
                        description: "Got some clothes at Mr.Price",
                        amount: 300,
                        date: new Date("2020-07-18")
                    },
                item2:{
                        name:"Woolworths",
                        description: "Bought a fancy jacket",
                        amount: 299,
                        date: new Date("2020-07-11")
                    }
            }
        },
        {
            category:"Internet/Telephone", 
            budget: 500,
            items:{
                item1:{
                        name:"Vodacom",
                        description: "R29 airtime",
                        amount: 29,
                        date: new Date("2020-07-15")
                    },
                item2:{
                        name:"Fibre Telecoms",
                        description: "My monthly fast wifi",
                        amount: 300,
                        date: new Date("2020-07-01")
                    }
            }
        },
        {
            category:"Investments", 
            budget: 500,
            items:{
                item1:{
                    name:"FNB Savings",
                    description: "Investing my millions",
                    amount: 700,
                    date: new Date("2020-07-02")
                },
            }
        },
        {
            category:"Health and Medical",
            budget:2000
        }
    ];

    return(
        <div className={classes.list}>
            <div className={classes.form}>
                <FormControl >
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                        labelId="category"
                        id={"select-category"}
                        value={category}
                        onChange={handleCategoryChange}
                        label="Category"
                        >
                        {data.map(item => (
                            <MenuItem key={item.category} value={item.category}>{item.category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    multiline={true}
                    rows={3}
                    variant="outlined"
                    style={{marginTop:20}}
                    size="small"
                    placeholder="Description"
                    onChange={handleDescriptionChange}
                    value={description}></TextField>
                
                <TextField 
                    label="Amount"
                    style={{marginTop:20}}
                    defaultValue="0.00"
                    value={amount}
                    placeholder="Amount"
                    onChange={handleAmountChange}></TextField>

                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <Grid container justify="space-around" >
                        <KeyboardDatePicker
                        color="secondary"
                        variant="inline"
                        format="MM/dd/yyyy"
                        style={{
                            marginTop:20,
                            width:"100%"
                        }}
                        id="date-picker-inline"
                        label="Transaction Date"
                        value={date}
                        defaultValue={new Date(Date.now())}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <Button variant="contained" color="secondary" style={{marginTop:20}}>Add Transaction</Button>
            </div>
        </div>
    )
}

export default TransactionDrawer;
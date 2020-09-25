import React, { useState } from 'react';
import { Button, InputLabel, MenuItem, TextField, createMuiTheme, ThemeProvider} from '@material-ui/core';
import lightBlue from "@material-ui/core/colors/lightBlue";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import classes from './EditTransactionsDrawer.module.css';
const TransactionDrawer = (props) => {
    console.log(props.values);
    
    let [description, setDescription] = useState(props.values.data.description)
    let [category, setCategory] = useState(props.values.data.category);
    let [date, setDate] = useState(props.values.data.date);
    let [amount, setAmount] = useState(props.values.data.amount);

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

    const materialTheme = createMuiTheme({
        overrides: {
          MuiPickersToolbar: {
            toolbar: {
              backgroundColor: lightBlue.A200,
            },
          },
          MuiPickersCalendarHeader: {
            switchHeader: {
              // backgroundColor: lightBlue.A200,
              // color: "white",
            },
          },
          MuiPickersDay: {
            day: {
              color: lightBlue.A700,
            },
            daySelected: {
              backgroundColor: lightBlue["400"],
            },
            dayDisabled: {
              color: lightBlue["100"],
            },
            current: {
              color: lightBlue["900"],
            },
          },
          MuiPickersModal: {
            dialogAction: {
              color: lightBlue["400"],
            },
          },
        },
      });

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
                    value={description}
                    onChange={handleDescriptionChange}></TextField>
                
                <TextField 
                    label="Amount"
                    style={{marginTop:20}}
                    value={amount}
                    onChange={handleAmountChange}></TextField>
                
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <Grid container justify="space-around" >
                        <ThemeProvider theme={materialTheme}>
                            <KeyboardDatePicker
                            
                            variant="inline"
                            format="MM/dd/yyyy"
                            style={{
                                marginTop:20,
                                width:"100%"
                            }}
                            id="date-picker-inline"
                            label="Transaction Date"
                            value={date}
                            
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            </ThemeProvider>
                        </Grid>
                    </MuiPickersUtilsProvider>
                <div className={classes.btnContainer}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        style={{
                            marginTop:5
                        }}
                        onClick={() => props.function()}>Done</Button>
                    <Button 
                        color="danger"
                        style={{
                            marginTop:5,
                            marginLeft:20,
                            color:"#ea7575"
                        }}
                        onClick={() => props.function()}>Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default TransactionDrawer;
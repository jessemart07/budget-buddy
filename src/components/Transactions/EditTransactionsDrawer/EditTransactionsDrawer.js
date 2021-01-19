import React, { useState, useEffect } from 'react';
import { 
    Button, 
    InputLabel, 
    MenuItem, 
    TextField, 
    createMuiTheme, 
    ThemeProvider, 
    Typography} from '@material-ui/core';
import lightBlue from "@material-ui/core/colors/lightBlue";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DrawerForm from '../../DrawerForm/DrawerForm';
import BtnContainer from '../../ButtonContainer/ButtonContainer';
import classes from './EditTransactionsDrawer.module.css';
const TransactionDrawer = (props) => {

    useEffect(() => {
        console.log(props.values);
    }, [])
    
    
    let [description, setDescription] = useState(props.values.description)
    let [category, setCategory] = useState(props.values.category);
    let [date, setDate] = useState(props.values.date);
    let [amount, setAmount] = useState(props.values.amount);
    let [dialogOpen, setDialogOpen] = useState(false);

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
    
    const handleDialog = (status) => (event) => {
        setDialogOpen(status);
    }

    const onDelete = (event) => {
        console.log("[On Delete]")
        handleDialog(false);
        props.function();
    }

    const onSubmit = (event) => {
        let data = {
            description: description,
            category: category,
            date: date,
            amount: amount
        };
        props.change(data);
        props.function();
    }

    const handleChange = (data) => (event) => {
        
    }

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
        <React.Fragment>
            <DrawerForm>
                <div className={classes.form}>
                    <Typography variant="h5" style={{textAlign:'center', marginBottom:20,  color:'secondary'}}>Edit Transaction</Typography>
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
                    <BtnContainer>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            style={{
                                marginTop:5
                            }}
                            onClick={onSubmit}>Done</Button>
                        <Button 
                            style={{
                                marginTop:5,
                                marginLeft:20,
                                color:"#ea7575"
                            }}
                            onClick={handleDialog(true)}>Delete</Button>
                    </BtnContainer>
                </div>
            </DrawerForm>
            <Dialog 
            open={dialogOpen}
            onClose={handleDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
                <DialogTitle d="alert-dialog-title">{"Are you sure you want to delete this category?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure? If you delete this transaction it will be deleted permanently.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={() => onDelete()} >
                    Yes, Delete
                </Button>
                <Button onClick={handleDialog(false)}  autoFocus>
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
        
    )
}

export default TransactionDrawer;
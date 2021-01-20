import React, { useState } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
  createMuiTheme,
} from "@material-ui/core";
import lightBlue from "@material-ui/core/colors/lightBlue";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import classes from "./AddTransactionsDrawer.module.css";
import BtnContainer from "../../ButtonContainer/ButtonContainer";
import DrawerForm from "../../DrawerForm/DrawerForm";
const TransactionDrawer = (props) => {
  let [description, setDescription] = useState();
  let [category, setCategory] = useState();
  let [date, setDate] = useState(new Date(Date.now()));
  let [amount, setAmount] = useState();
  let [name, setName] = useState();
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
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (value) => {
    setDate(value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onSubmit = (event) => {
    let data = {
      id: props.count + 1,
      category: category,
      name: name,
      description: description,
      amount: amount,
      date: date,
    };
    console.log(data.date.getMonth());
    props.add({ ...data });
    props.function();
  };

  return (
    <DrawerForm>
      <div className={classes.form}>
        <Typography
          variant="h5"
          style={{ textAlign: "center", marginBottom: 20, color: "secondary" }}
        >
          Add Transaction
        </Typography>
        <FormControl>
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            id={"select-category"}
            value={category}
            onChange={handleCategoryChange}
            label="Category"
          >
            {props.categories.map((item) => (
              <MenuItem key={item.category} value={item.category}>
                {item.category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Name"
          style={{ marginTop: 20 }}
          defaultValue=""
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        ></TextField>
        <TextField
          multiline={true}
          rows={3}
          variant="outlined"
          style={{ marginTop: 20 }}
          size="small"
          placeholder="Description"
          onChange={handleDescriptionChange}
          value={description}
        ></TextField>

        <TextField
          label="Amount"
          style={{ marginTop: 20 }}
          defaultValue="0.00"
          value={amount}
          placeholder="Amount"
          onChange={handleAmountChange}
        ></TextField>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              color="secondary"
              variant="inline"
              format="MM/dd/yyyy"
              style={{
                marginTop: 20,
                width: "100%",
              }}
              id="date-picker-inline"
              label="Transaction Date"
              value={date}
              defaultValue={new Date(Date.now())}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <BtnContainer>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 20 }}
            onClick={onSubmit}
          >
            Done
          </Button>
          <Button
            color="default"
            style={{
              marginTop: 20,
              marginLeft: 20,
              color: "secondary",
            }}
            onClick={props.function}
          >
            Cancel
          </Button>
        </BtnContainer>
      </div>
    </DrawerForm>
  );
};

export default TransactionDrawer;

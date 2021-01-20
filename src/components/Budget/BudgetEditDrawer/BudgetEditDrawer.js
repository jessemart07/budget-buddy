import { TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import classes from "./BudgetEditDrawer.module.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import BtnContainer from "../../ButtonContainer/ButtonContainer";
import DrawerForm from "../../DrawerForm/DrawerForm";

const EditBudget = (props) => {
  const handleDialog = (status) => (event) => {
    setDialogOpen(status);
  };

  let [category, setCategory] = useState(props.category);

  let [budget, setBudget] = useState(props.budget);

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const onBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  let [dialogOpen, setDialogOpen] = useState(false);

  const onDelete = () => {
    handleDialog(false);
    props.function();
    props.deletefunction(props.index);
  };

  const onSubmit = () => {
    let data = {
      id: props.index,
      category: category,
      budget: budget,
    };
    props.editfunction(data);

    props.function();
  };

  return (
    <DrawerForm>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        Edit {props.category}
      </Typography>
      <TextField
        onChange={onCategoryChange}
        value={category}
        style={{
          width: "80%",
          marginTop: 20,
        }}
      ></TextField>
      <TextField
        onChange={onBudgetChange}
        value={budget}
        style={{
          width: "80%",
          marginTop: 20,
        }}
      ></TextField>
      <BtnContainer>
        <Button
          variant="contained"
          color="secondary"
          style={{
            marginTop: 20,
          }}
          onClick={onSubmit}
        >
          Save
        </Button>
        <Button
          onClick={handleDialog(true)}
          color="danger"
          style={{
            marginTop: 20,
            marginLeft: 20,
            color: "#ea7575",
          }}
        >
          Delete
        </Button>
      </BtnContainer>
      <Dialog
        open={dialogOpen}
        onClose={handleDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle d="alert-dialog-title">
          {"Are you sure you want to delete this category?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you delete this category it will be deleted permanently
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDelete}>Yes, Delete</Button>
          <Button onClick={handleDialog(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </DrawerForm>
  );
};

export default EditBudget;

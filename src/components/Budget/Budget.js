import React, { useState } from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import classes from "./Budget.module.css";
import BudgetItem from "../Budget/BudgetItem/BudgetItem";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Drawer from "@material-ui/core/Drawer";
import BudgetAddDrawer from "./BudgetAddDrawer/BudgetAddDrawer";
import axios from "../../axios";
import Grow from "@material-ui/core/Grow";
import Fab from "@material-ui/core/Fab";
import Loader from "../UI/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  container: {
    fontFamily: "'Montserrat' sans-serif",
    padding: 10,
    height: 500,
    overflow: "hidden",
  },
  headercell: {
    fontFamily: "Montserrat, sans-serrif",
    fontSize: 17,
    color: "#345649",
    borderBottom: "2px solid #a3c6c4 ",
    fontWeight: 600,
  },
  cell: {
    fontFamily: "Montserrat, sans-serrif",
    fontSize: 16,
    color: "#345649",
    borderBottom: "2px solid #a3c6c4 ",
    fontWeight: 500,
  },
  row: {
    marginRight: "5px",
    marginLeft: "5px",
  },
  SpeedDial: {
    position: "absolute",
    right: 0,
    bottom: 0,
    marginRight: "-60px",
  },
  fab: {},
}));

const Budget = (props) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  let [addOpen, setAddOpen] = useState(false);
  let [editOpen, SetEditOpen] = useState(false);
  let [dialogOpen, setDialogOpen] = useState(false);
  let [loading, setLoading] = useState(false);

  const [transactions, setTransactions] = useState(props.transactions);

  let [categories, setCategories] = useState(props.categories);

  let categoryArr = [];

  props.categories.map((obj) => {
    let data = {
      id: obj.id,
      category: obj.category,
      budget: obj.budget,
      transactions: [],
    };

    props.transactions.map((el) => {
      if (el.category === obj.category) {
        let { id, name, amount, date, description } = el;

        data.transactions.push({
          id: id,
          name: name,
          amount: amount,
          description: description,
          date: date,
          category: obj.category,
        });
      }
    });
    categoryArr.push(data);
  });
  const ToggleEditDrawer = (status) => (event) => {
    SetEditOpen(status);
  };

  const EditCategory = (data) => {
    setLoading(true);
    let firebaseID = "";
    axios
      .get("budgets/categories.json")
      .then((res) => {
        Object.keys(res.data).map((keys) => {
          if (res.data[keys].id === data.id) {
            firebaseID = keys;
            return;
          }
        });
        axios
          .put("budgets/categories/" + firebaseID + ".json", data)
          .then((res) => {
            const id = props.categories.findIndex(
              (element) => element.id === data.id
            );

            const Catid = categoryArr.findIndex(
              (element) => element.id === data.id
            );

            let { transactions: items } = categoryArr[Catid];

            let newTransactionsArr = [...props.transactions];

            items.map((item) => {
              let index = props.transactions.findIndex(
                (el) => el.id === item.id
              );
              newTransactionsArr[index].category = data.category;
            });

            axios
              .put("budgets/transactions.json", newTransactionsArr)
              .then((res) => {
                props.functionChange(newTransactionsArr, "Update");
              })
              .catch((err) => console.log(err));

            let newArr = [...props.categories];

            newArr[id] = { ...data };

            props.categoryChange(newArr, "Update");
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      })
      .catch();
  };

  const AddCategory = (data) => {
    setLoading(true);
    axios
      .post("budgets/categories.json", data)
      .then((response) => {
        console.log(response);
        this.categoryChange(data, "Add");
        console.log(categories);
        //checkBudgetItems();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteCategory = (id) => {
    setLoading(true);
    const Catid = categoryArr.findIndex((element) => element.id === id);

    let { transactions: items } = categoryArr[Catid];

    if (items.length > 0) {
      handleDialog(true);
    } else {
      let firebaseID = "";
      axios
        .get("/budgets/categories.json")
        .then((response) => {
          Object.keys(response.data).map((keys) => {
            if (response.data[keys].id === id) {
              firebaseID = keys;
              return;
            }
          });
          axios
            .delete("/budgets/categories/" + firebaseID + ".json")
            .then((response) => {
              let newArr = [...categories];
              console.log(id);
              newArr.splice(id, 1);

              this.categoryChange(newArr, "Delete");
              setLoading(false);
              //checkBudgetItems();
            })
            .catch((error) => {
              setLoading(false);
              console.log(error);
            });
        })
        .catch((error) => console.log(error));
    }
  };

  const ToggleAddDrawer = (status) => (event) => {
    setOpen(false);
    setAddOpen(status);
  };

  const handleDialog = (status) => {
    setDialogOpen(status);
  };

  let budgetItems = "";

  if (categories.length > 0) {
    budgetItems = categoryArr.map((row) => {
      let actual = 0;
      if (row.transactions != null) {
        row.transactions.map((transaction) => {
          actual += Number.parseFloat(transaction.amount);
        });
      }

      return (
        <BudgetItem
          editCategory={EditCategory}
          delete={DeleteCategory}
          key={row.category}
          category={row.category}
          id={row.id}
          actual={actual}
          budget={Number.parseFloat(row.budget).toFixed(2)}
          row={row.transactions}
          categories={categories}
        ></BudgetItem>
      );
    });
  } else {
    budgetItems = "You have no categories yet";
  }

  let loader = null;
  if (loading) loader = <Loader></Loader>;

  return (
    <React.Fragment>
      {loader}
      <div className={classes.Budget}>{budgetItems}</div>
      <Tooltip
        title="Add Category"
        placement="top"
        className={styles.SpeedDial}
      >
        <Fab
          color="primary"
          aria-label="add"
          className={styles.fab}
          onClick={ToggleAddDrawer(true)}
        >
          <AddRoundedIcon />
        </Fab>
      </Tooltip>
      {dialogOpen ? (
        <Grow in={dialogOpen} timeout={1000}>
          <Alert severity="error" onClose={() => handleDialog(false)}>
            You can't delete a category if there are transactions in it
          </Alert>
        </Grow>
      ) : null}
      {/* this drawer is for adding a category */}
      <Drawer anchor="right" open={addOpen} onClose={ToggleAddDrawer(false)}>
        <BudgetAddDrawer
          function={ToggleAddDrawer(false)}
          add={AddCategory}
          id={props.categories.length}
        />
      </Drawer>
      {/* This drawer is for editing the transaction */}
    </React.Fragment>
  );
};

export default Budget;

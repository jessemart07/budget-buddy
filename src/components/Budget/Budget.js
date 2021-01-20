import React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import classes from "./Budget.module.css";
import BudgetItem from "../Budget/BudgetItem/BudgetItem";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import Drawer from "@material-ui/core/Drawer";
import BudgetAddDrawer from "./BudgetAddDrawer/BudgetAddDrawer";
import Grow from "@material-ui/core/Grow";
import { useState } from "react";
import Fab from "@material-ui/core/Fab";

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

const Budget = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  let [addOpen, setAddOpen] = useState(false);
  let [editBtn, SetEditBtn] = useState(false);
  let [dialogOpen, setDialogOpen] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: 0,
      name: "Spur",
      description: "A great meal at Spur",
      amount: 500,
      date: new Date("2020-07-26"),
      category: "Food",
    },
    {
      id: 1,
      name: "Woolworths",
      description: "Spent a lot on Gluten free stuff",
      amount: 200,
      date: new Date("2020-07-27"),
      category: "Food",
    },
    {
      id: 2,
      name: "Mr.Price",
      description: "Got some clothes at Mr.Price",
      amount: 300,
      date: new Date("2020-07-18"),
      category: "Clothing",
    },
    {
      id: 3,
      name: "Woolworths",
      description: "Bought a fancy jacket",
      amount: 299,
      date: new Date("2020-07-11"),
      category: "Clothing",
    },
    {
      id: 4,
      name: "Vodacom",
      description: "R29 airtime",
      amount: 29,
      date: new Date("2020-07-15"),
      category: "Internet/Telephone",
    },
    {
      id: 5,
      name: "Fibre Telecoms",
      description: "My monthly fast wifi",
      amount: 300,
      date: new Date("2020-07-01"),
      category: "Internet/Telephone",
    },
    {
      id: 6,
      name: "FNB Savings",
      description: "Investing my millions",
      amount: 700,
      date: new Date("2020-07-02"),
      category: "Investments",
    },
  ]);

  let [categories, setCategories] = useState([
    {
      id: 0,
      category: "Food",
      budget: 1000,
    },
    {
      id: 1,
      category: "Clothing",
      budget: 2000,
    },
    {
      id: 2,
      category: "Internet/Telephone",
      budget: 500,
    },
    {
      id: 3,
      category: "Investments",
      budget: 500,
    },
    {
      id: 4,
      category: "Health and Medical",
      budget: 2000,
    },
  ]);

  let categoryArr = [];

  categories.map((obj) => {
    let data = {
      id: obj.id,
      category: obj.category,
      budget: obj.budget,
      transactions: [],
    };

    transactions.forEach((el) => {
      if (el.category === obj.category) {
        let { id, name, amount, date } = el;

        data.transactions.push({
          id: id,
          name: name,
          amount: amount,
          date: date,
        });
      }
    });

    categoryArr.push(data);
  });

  const EditCategory = (data) => {
    const id = categories.findIndex((element) => element.id === data.id);

    const Catid = categoryArr.findIndex((element) => element.id === data.id);

    let { transactions: items } = categoryArr[Catid];

    let idArr = [];

    items.map((item) => {
      idArr.push(item.id);
    });

    let newTransactionsArr = [...transactions];

    idArr.map((id) => {
      newTransactionsArr[id].category = data.category;
    });

    let newArr = [...categories];

    newArr[id] = { ...data };

    setCategories(newArr);
  };

  const AddCategory = (data) => {
    let newArr = [...categories];

    newArr.push({ ...data });
    console.log(newArr);
    setCategories(newArr);
  };

  const DeleteCategory = (id) => {
    const Catid = categoryArr.findIndex((element) => element.id === id);

    let { transactions: items } = categoryArr[Catid];

    if (items.length > 0) {
      handleDialog(true);
    } else {
      let newArr = [...categories];
      console.log(id);
      newArr.splice(id, 1);

      setCategories(newArr);
    }
  };

  const ToggleAddDrawer = (status) => (event) => {
    setOpen(false);
    setAddOpen(status);
  };

  const handleDialog = (status) => {
    setDialogOpen(status);
  };

  return (
    <React.Fragment>
      <div className={classes.Budget}>
        {categoryArr.map((row) => {
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
              edit={editBtn}
            ></BudgetItem>
          );
        })}
      </div>
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
      <Drawer anchor="right" open={addOpen} onClose={ToggleAddDrawer(false)}>
        <BudgetAddDrawer
          function={ToggleAddDrawer(false)}
          add={AddCategory}
          id={categories.length}
        />
      </Drawer>
    </React.Fragment>
  );
};

export default Budget;

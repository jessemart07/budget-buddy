import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import classes from "./Transactions.module.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import EditTransactionDrawer from "./EditTransactionsDrawer/EditTransactionsDrawer";
import AddTransactionDrawer from "./AddTransactionsDrawer/AddTransactionsDrawer";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  Menu: {
    color: "#a3c6c4",
    zIndex: 5,
    border: "1px solid #a3c6c4",
    borderRadius: "3px",
    marginRight: "10px",
    height: "40px",
    width: "40px",
  },
  list: {
    width: 250,
  },
  container: {
    fontFamily: "'Montserrat' sans-serif",
    padding: 10,
    height: 500,
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
  fab: {
    right: 0,
  },
}));

const transactions = [
  {
    name: "Spur",
    description: "A great meal at Spur",
    amount: 500,
    date: new Date("2020-07-26"),
    category: "Food",
  },
  {
    name: "Woolworths",
    description: "Spent a lot on Gluten free stuff",
    amount: 200,
    date: new Date("2020-07-27"),
    category: "Food",
  },
  {
    name: "Mr.Price",
    description: "Got some clothes at Mr.Price",
    amount: 300,
    date: new Date("2020-07-18"),
    category: "Clothing",
  },
  {
    name: "Woolworths",
    description: "Bought a fancy jacket",
    amount: 299,
    date: new Date("2020-07-11"),
    category: "Clothing",
  },
  {
    name: "Vodacom",
    description: "R29 airtime",
    amount: 29,
    date: new Date("2020-07-15"),
    category: "Internet/Telephone",
  },
  {
    name: "Fibre Telecoms",
    description: "My monthly fast wifi",
    amount: 300,
    date: new Date("2020-07-01"),
    category: "Internet/Telephone",
  },
  {
    name: "FNB Savings",
    description: "Investing my millions",
    amount: 700,
    date: new Date("2020-07-02"),
    category: "Investments",
  },
];

const categories = [
  {
    category: "Food",
    budget: 1000,
  },
  {
    category: "Clothing",
    budget: 2000,
  },
  {
    category: "Internet/Telephone",
    budget: 500,
  },
  {
    category: "Investments",
    budget: 500,
  },
  {
    category: "Health and Medical",
    budget: 2000,
  },
];

const Transactions = () => {
  const styles = useStyles();
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
      category: "Food",
      budget: 1000,
    },
    {
      category: "Clothing",
      budget: 2000,
    },
    {
      category: "Internet/Telephone",
      budget: 500,
    },
    {
      category: "Investments",
      budget: 500,
    },
    {
      category: "Health and Medical",
      budget: 2000,
    },
  ]);

  useEffect(() => {
    transactions.forEach((element) => {
      ConvertMonth(element.date.getMonth());
    });
  }, [transactions]);

  let [AddOpen, setAddOpen] = useState(false);
  let [EditOpen, setEditOpen] = useState(false);
  let [values, setValues] = useState({
    category: "",
    name: "",
    description: "",
    date: new Date(Date.now()),
    amount: "0.00",
  });

  const toggleAddDrawer = (status) => (event) => {
    setAddOpen(status);
  };

  const CloseEditDrawer = (status) => (event) => {
    setEditOpen(status);
  };

  const editClick = (data) => (event) => {
    setEditOpen(true);

    setValues(data);
  };

  const onTransactionAdd = (data) => {
    let newArr = [...transactions];

    newArr.push(data);

    setTransactions(newArr);
  };

  const onTransactionChanged = (data) => {
    const elementID = transactions.findIndex(
      (element) => element.id === data.id
    );

    let newArr = [...transactions];

    newArr[elementID] = { ...data };

    setTransactions(newArr);
  };

  const onTransactionDelete = (data) => {
    const elementID = transactions.findIndex((element) => element.id === data);

    let newArr = [...transactions];

    newArr.splice(elementID, 1);

    setTransactions(newArr);
  };

  const sortedTranasctions = transactions.sort((a, b) => b.date - a.date);
  const ConvertMonth = (month) => {
    switch (month) {
      case 0:
        return "Jan";

      case 1:
        return "Feb";

      case 2:
        return "Mar";

      case 3:
        return "Apr";

      case 4:
        return "May";

      case 5:
        return "Jun";

      case 6:
        return "Jul";

      case 7:
        return "Aug";

      case 8:
        return "Sep";

      case 9:
        return "Oct";

      case 10:
        return "Nov";

      case 11:
        return "Dec";

      default:
        return "Month";
    }
  };

  return (
    <React.Fragment>
      <div className={classes.Transactions}>
        <TableContainer
          className={styles.container}
          component={Paper}
          elevation="4"
        >
          <Table className={styles.table}>
            <TableHead className={styles.header}>
              <TableRow className={styles.row}>
                <TableCell className={styles.headercell}>Category</TableCell>
                <TableCell className={styles.headercell}>Name</TableCell>
                <TableCell className={styles.headercell}>Description</TableCell>
                <TableCell className={styles.headercell}>Date</TableCell>
                <TableCell className={styles.headercell}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedTranasctions.map((row, index) => {
                const day = row.date.getDate();
                const month = ConvertMonth(row.date.getMonth());
                return (
                  <TableRow
                    key={index}
                    className={classes.row}
                    onClick={editClick(row)}
                  >
                    <TableCell
                      className={styles.cell}
                      component="th"
                      scope={row}
                    >
                      {row.category}
                    </TableCell>
                    <TableCell className={styles.cell}>{row.name}</TableCell>
                    <TableCell className={styles.cell}>
                      {row.description}
                    </TableCell>
                    <TableCell className={styles.cell}>
                      {day + " " + month}
                    </TableCell>
                    <TableCell className={styles.cell}>
                      R{Number.parseFloat(row.amount).toFixed(2)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={classes.FloatingButton}>
        <Fab
          color="primary"
          aria-label="add"
          className={styles.fab}
          onClick={toggleAddDrawer(true)}
        >
          <AddRoundedIcon />
        </Fab>
        <Drawer anchor="right" open={AddOpen} onClose={toggleAddDrawer(false)}>
          <AddTransactionDrawer
            function={toggleAddDrawer(false)}
            add={onTransactionAdd}
            count={transactions.length}
            categories={categories}
          />
        </Drawer>
        <Drawer anchor="right" open={EditOpen} onClose={CloseEditDrawer(false)}>
          <EditTransactionDrawer
            delete={onTransactionDelete}
            change={onTransactionChanged}
            function={CloseEditDrawer(false)}
            values={values}
            categories={categories}
          />
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default Transactions;

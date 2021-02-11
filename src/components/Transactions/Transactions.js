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
import Loader from "../../components/UI/Loader/Loader";
import Drawer from "@material-ui/core/Drawer";
import axios from "../../axios";
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

const Transactions = (props) => {
  const styles = useStyles();

  useEffect(() => {
    props.transactions.forEach((element) => {
      ConvertMonth(new Date(element.date).getMonth());
    });
  }, [props.transactions]);

  let [AddOpen, setAddOpen] = useState(false);
  let [EditOpen, setEditOpen] = useState(false);
  let [values, setValues] = useState({
    category: "",
    name: "",
    description: "",
    date: new Date(Date.now()),
    amount: "0.00",
  });
  let [loading, setLoading] = useState(false);

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

  const handleLoading = (status) => {
    setLoading(status);
  };

  const onTransactionAdd = (data) => {
    let newArr = [...props.transactions];

    newArr.push(data);

    props.transactionChange(data, "Add");

    axios
      .post("/budgets/transactions.json", data)
      .then(() => {
        setLoading(false);
        console.log("Added");
      })
      .catch(() => console.log("Not added"));
  };

  const onTransactionChanged = (data) => {
    setLoading(true);
    const elementID = props.transactions.findIndex(
      (element) => element.id === data.id
    );

    let newArr = [...props.transactions];

    newArr[elementID] = { ...data };

    console.log(data.id);
    axios
      .get("/budgets/transactions.json")
      .then((res) => {
        let firebaseID = "";
        Object.keys(res.data).map((key) => {
          if (res.data[key].id === data.id) {
            firebaseID = key;
          }
        });
        console.log(firebaseID);
        axios
          .put("/budgets/transactions/" + firebaseID + ".json", data)
          .then((res) => {
            console.log(res);
            const elementID = props.transactions.findIndex(
              (element) => element.id === res.data.id
            );

            let newArr = [...props.transactions];

            newArr[elementID] = { ...res.data };

            props.transactionChange(newArr, "Update");
            setLoading(false);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const onTransactionDelete = (data) => {
    setLoading(true);
    const elementID = props.transactions.findIndex(
      (element) => element.id === data
    );
    let firebaseID = "";
    setLoading(true);
    axios
      .get("budgets/transactions.json")
      .then((response) => {
        console.log(response.data);
        Object.keys(response.data).map((keys) => {
          if (response.data[keys].id === data) {
            firebaseID = keys;
          }
        });
        if (firebaseID !== null) {
          axios
            .delete("budgets/transactions/" + firebaseID + ".json")
            .then((res) => {
              console.log(res);
              let newArr = [...props.transactions];
              newArr.splice(elementID, 1);
              props.transactionChange(newArr, "Delete");
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              console.log(error);
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  let transactions = "";
  let sortedTranasctions = [];
  if (props.transactions !== undefined || props.transactions !== null) {
    sortedTranasctions = props.transactions.sort((a, b) => b.date - a.date);
  }
  let loader = null;
  if (loading) loader = <Loader></Loader>;

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

  if (sortedTranasctions) {
    transactions = sortedTranasctions.map((row, index) => {
      const day = new Date(row.date).getDate();
      const month = ConvertMonth(new Date(row.date).getMonth());
      return (
        <TableRow key={index} className={classes.row} onClick={editClick(row)}>
          <TableCell className={styles.cell} component="th" scope={row}>
            {row.category}
          </TableCell>
          <TableCell className={styles.cell}>{row.name}</TableCell>
          <TableCell className={styles.cell}>{row.description}</TableCell>
          <TableCell className={styles.cell}>{day + " " + month}</TableCell>
          <TableCell className={styles.cell}>
            R{Number.parseFloat(row.amount).toFixed(2)}
          </TableCell>
        </TableRow>
      );
    });
  }

  return (
    <React.Fragment>
      {loader}
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
            <TableBody>{transactions}</TableBody>
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
            count={props.transactions.length}
            categories={props.categories}
          />
        </Drawer>
        <Drawer anchor="right" open={EditOpen} onClose={CloseEditDrawer(false)}>
          <EditTransactionDrawer
            delete={onTransactionDelete}
            change={onTransactionChanged}
            function={CloseEditDrawer(false)}
            values={values}
            categories={props.categories}
          />
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default Transactions;

import React, { useState } from "react";
import classes from "./ItemDetails.module.css";
import { makeStyles, TextField, Drawer } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditDrawer from "../../../Transactions/EditTransactionsDrawer/EditTransactionsDrawer";

const useStyles = makeStyles(() => ({
  cell: {
    fontFamily: "Montserrat, sans-serrif",
    fontSize: 16,
    color: "#345649",
    borderBottom: "2px solid #a3c6c4 ",
    fontWeight: 500,
  },
}));

const ItemDetails = (props) => {
  const styles = useStyles();

  let [editOpen, setEditOpen] = useState(false);

  const ToggleEditDrawer = (status) => (event) => {
    setEditOpen(status);
  };
  return (
    <React.Fragment>
      <TableRow
        className={styles.row}
        key={props.description}
        onClick={ToggleEditDrawer(true)}
      >
        <TableCell className={styles.cell} component="th">
          {props.description}
        </TableCell>
        <TableCell className={styles.cell} align="right">
          R{Number.parseFloat(props.amount).toFixed(2)}
        </TableCell>
      </TableRow>
      <Drawer anchor="right" open={editOpen} onClose={ToggleEditDrawer(false)}>
        <EditDrawer
          function={ToggleEditDrawer}
          values={props.info}
          categories={props.categoriesInfo}
        ></EditDrawer>
      </Drawer>
    </React.Fragment>
  );
};
export default ItemDetails;

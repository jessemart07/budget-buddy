import React from 'react';
import classes from './ItemDetails.module.css';
import { makeStyles, TextField } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles(() => ({
    cell:{
        fontFamily: "Montserrat, sans-serrif" ,
        fontSize: 16,
        color: "#345649",
        borderBottom: "2px solid #a3c6c4 ",
        fontWeight:500
    }
}))

const ItemDetails = (props) => {
    const styles = useStyles();

    return(          
        <TableRow className={styles.row} key={props.description}>
            <TableCell className={styles.cell} component="th">{props.description}</TableCell>
            <TableCell className={styles.cell} align="right">R{Number.parseFloat(props.amount).toFixed(2)}</TableCell>
        </TableRow>
    )
}
export default ItemDetails;
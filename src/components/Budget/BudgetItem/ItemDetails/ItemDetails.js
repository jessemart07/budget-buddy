import React from 'react';
import classes from './ItemDetails.module.css';
import { makeStyles } from '@material-ui/core';

import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
    container:{
        fontFamily: "'Montserrat' sans-serif",
        padding:10,
        overflow: "hidden"
    },
    headercell: {
        fontFamily: "Montserrat, sans-serrif" ,
        fontSize: 17,
        color: "#345649",
        borderBottom: "2px solid #a3c6c4 ",
        fontWeight:600
    },
    cell:{
        fontFamily: "Montserrat, sans-serrif" ,
        fontSize: 16,
        color: "#345649",
        borderBottom: "2px solid #a3c6c4 ",
        fontWeight:500
    },
    row:{
        
    },
    header:{
        
    }
}))

const data = [
    {description: "Water Bill", amount: "500.00"},
    {description: "Electricty Bill", amount: "300.00"}
]


const ItemDetails = (props) => {
    console.log("[ItemDetails.js]" + props.items);
    const styles = useStyles();
    

    return(          
        <TableRow className={styles.row} key={props.description}>
            <TableCell className={styles.cell} component="th" >{props.description}</TableCell>
            <TableCell className={styles.cell} align="right">R{Number.parseFloat(props.amount).toFixed(2)}</TableCell>
        </TableRow>
    )
}
export default ItemDetails;
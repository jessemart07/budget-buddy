import React from 'react';
import classes from './ItemDetails.module.css';
import { makeStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
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
    const styles = useStyles();
    let actual = 0;
    data.forEach(element => {
        actual += parseFloat(element.amount);
    });
    return(
        
            <Table className={styles.table}>
                <TableBody>
                    {data.map((row)=>(
                        <TableRow className={styles.row}>
                            <TableCell className={styles.cell} component="th" scope={row}>{row.description}</TableCell>
                            <TableCell className={styles.cell} align="right">R{row.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
      
    )
}
export default ItemDetails;
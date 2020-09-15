import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './Transactions.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircleButton from '../CircleButton/CircleButton';
import Fab from '@material-ui/core/Fab';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles((theme) => ({
    container:{
        fontFamily: "'Montserrat' sans-serif",
        padding:10,
        height:500,
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
        marginRight: "5px",
        marginLeft: "5px"
    },
    fab:{
        right:0
    }
}))
const data = [
    {category:"Food", description: "Checkers Groceries", date:"26 July", amount:"R500.00"},
    {category: "Investments", description:"FNB Savings Account",date: "22 July", amount:"R1,200.00"},
    {category: "Investments", description:"FNB Savings Account", date:"20 July", amount:"R1,200.00"}
]
const Transactions = () => {
    const styles = useStyles();
    return(

        <React.Fragment>
        <div className={classes.Transactions}>
            <TableContainer className={styles.container} component={Paper} elevation="4">
                <Table className={styles.table}>
                    <TableHead className={styles.header}>
                        <TableRow className={styles.row}>
                            <TableCell className={styles.headercell}>Category</TableCell>
                            <TableCell className={styles.headercell}>Description</TableCell>
                            <TableCell className={styles.headercell}>Date</TableCell>
                            <TableCell className={styles.headercell}>Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row)=>(
                            <TableRow className={styles.row}>
                                <TableCell className={styles.cell} component="th" scope={row}>{row.category}</TableCell>
                                <TableCell className={styles.cell} >{row.description}</TableCell>
                                <TableCell className={styles.cell} >{row.date}</TableCell>
                                <TableCell className={styles.cell} >{row.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className={classes.FloatingButton}>
            <Fab 
            color="primary" 
            aria-label="add" 
            className={styles.fab}>
                <AddRoundedIcon/>
            </Fab>
        </div>
        </React.Fragment>
    )
}

export default Transactions;
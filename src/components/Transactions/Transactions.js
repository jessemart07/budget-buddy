import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './Transactions.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import EditTransactionDrawer from './EditTransactionsDrawer/EditTransactionsDrawer';
import AddTransactionDrawer from './AddTransactionsDrawer/AddTransactionsDrawer';
import Drawer from '@material-ui/core/Drawer';


const useStyles = makeStyles((theme) => ({
    Menu: {
        color: '#a3c6c4',
        zIndex: 5, 
        border: '1px solid #a3c6c4',
        borderRadius: '3px', 
        marginRight: '10px',
        height: '40px',
        width: '40px'
    },
    list: {
        width: 250
    },
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
    {
        category:"Food", 
        budget: 1000,
        items:{
            item1:{
                    name:"Spur",
                    description: "A great meal at Spur",
                    amount: 500,
                    date: new Date("2020-07-26")
                },
            item2:{
                    name:"Woolworths",
                    description: "Spent a lot on Gluten free stuff",
                    amount: 200,
                    date: new Date("2020-07-27")
                }
        }
    },
    {
        category:"Clothing", 
        budget: 2000,
        items:{
            item1:{
                    name:"Mr.Price",
                    description: "Got some clothes at Mr.Price",
                    amount: 300,
                    date: new Date("2020-07-18")
                },
            item2:{
                    name:"Woolworths",
                    description: "Bought a fancy jacket",
                    amount: 299,
                    date: new Date("2020-07-11")
                }
        }
    },
    {
        category:"Internet/Telephone", 
        budget: 500,
        items:{
            item1:{
                    name:"Vodacom",
                    description: "R29 airtime",
                    amount: 29,
                    date: new Date("2020-07-15")
                },
            item2:{
                    name:"Fibre Telecoms",
                    description: "My monthly fast wifi",
                    amount: 300,
                    date: new Date("2020-07-01")
                }
        }
    },
    {
        category:"Investments", 
        budget: 500,
        items:{
            item1:{
                name:"FNB Savings",
                description: "Investing my millions",
                amount: 700,
                date: new Date("2020-07-02")
            },
        }
    },
    {
        category:"Health and Medical",
        budget:2000
    }
];


const Transactions = () => {
    const styles = useStyles();
   
    let transactions=[];
    let [AddOpen, setAddOpen] = useState(false);
    let [EditOpen, setEditOpen] = useState(false);
    let [values, setValues] = useState({
        category: "",
        description: "",
        date: new Date(Date.now()),
        amount: "0.00"
    })
    
    data.map(row => {
        
        if(row.items != null){
        Object.keys(row.items).map(itemKey => {
                transactions.push({
                    category: row.category,
                    ...row.items[itemKey]
                });
            }
        )}
    })

    const toggleAddDrawer = (status) => (event) => {
        setAddOpen(status);
    }

    const CloseEditDrawer = (status) => (event) => {
        setEditOpen(status);
    }

    const editClick = (data) => (event) => {
        setEditOpen(true);
        setValues({
            data
        })
    } 
    
    const sortedTranasctions = transactions.sort((a,b) => b.date - a.date)
    const ConvertMonth = (month) => {
        switch(month){
            case(1):
                return "Jan";
                
            case(2):
                return "Feb";
                
            case(3):
                return "Mar";
                
            case(4):
                return "Apr";
                
            case(5):
                return "May";
                
            case(6):
                return "Jun";
                
            case(7):
                return "Jul";
                
            case(8):
                return "Aug";
                
            case(9):
                return "Sep";
                
            case(10):
                return "Oct";
                
            case(11):
                return "Nov";
                
            case(12):
                return "Dec";
                
            default:
                return "Month";
                
        }
    }

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
                        {sortedTranasctions.map((row)=>{
                            const day = row.date.getDate();
                            const month = ConvertMonth(row.date.getMonth());
                                return (
                                    <TableRow className={classes.row} onClick={editClick(row)}>
                                        <TableCell className={styles.cell} component="th" scope={row}>{row.category}</TableCell>
                                        <TableCell className={styles.cell} >{row.description}</TableCell>
                                        <TableCell className={styles.cell} >{day + " " + month}</TableCell>
                                        <TableCell className={styles.cell} >R{Number.parseFloat(row.amount).toFixed(2)}</TableCell>
                                    </TableRow>
                                )
                            }
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        <div className={classes.FloatingButton}>
            <Fab 
            color="primary" 
            aria-label="add" 
            className={styles.fab}
            onClick={toggleAddDrawer(true)}>
                <AddRoundedIcon />
            </Fab>
            <Drawer anchor="right" open={AddOpen} onClose={toggleAddDrawer(false)}>
                <AddTransactionDrawer edit={true} />
            </Drawer>
            <Drawer anchor="right" open={EditOpen} onClose={CloseEditDrawer(false)}>
                <EditTransactionDrawer function={CloseEditDrawer(false)} values={values}/>
            </Drawer>
        </div>
        </React.Fragment>
    )
}

export default Transactions;
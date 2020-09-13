import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './Budget.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BudgetItem from '../Budget/BudgetItem/BudgetItem';
import Typography from '@material-ui/core/Typography';

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
    }
}))
const data = [
    {category:"Food", actual: "700.95", budget: "1000.00"},
    {category:"Clothing", actual: "1050.00", budget: "2000.00"},
    {category:"Internet/Telephone", actual: "750.00", budget: "500.00"},
    {category:"Investments", actual: "0.00", budget: "500.00"},
]

const Budget = () => {
    const styles = useStyles();
    return(
        <div className={classes.Budget}>
            
            {data.map((row) => (
                        <BudgetItem 
                            category={row.category}
                            actual={row.actual}
                            budget={row.budget}></BudgetItem>
                    ))}
        </div>
    )
}

export default Budget;
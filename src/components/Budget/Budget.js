import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './Budget.module.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BudgetItem from '../Budget/BudgetItem/BudgetItem';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:"#fff"
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
    SpeedDial:{
        position:'absolute',
        right:0,
        bottom:0,
        marginRight:"-60px",
        
    }
}))
const data = [
    {category:"Food", actual: "700.95", budget: "1000.00"},
    {category:"Clothing", actual: "1050.00", budget: "2000.00"},
    {category:"Internet/Telephone", actual: "750.00", budget: "500.00"},
    {category:"Investments", actual: "0.00", budget: "500.00"},
    {category:"Investments", actual: "400.00", budget: "500.00"},
    {category:"Investments", actual: "0.00", budget: "500.00"},
]

const Budget = () => {
    const styles = useStyles();
    const [open, SetOpen] = useState(false);
    const HandleOpen = () => {
        SetOpen(true);
    }

    const HandleClose = () => {
        SetOpen(false);
    }
    return(
        <React.Fragment>
                <div className={classes.Budget}>
            
            {data.map((row) => (
                        <BudgetItem 
                            category={row.category}
                            actual={row.actual}
                            budget={row.budget}></BudgetItem>
                    ))}
            
        </div>
        <SpeedDial
            ariaLabel="Menu-speed-dial"
            icon={<MoreVertRoundedIcon/>}
            onOpen={HandleOpen}
            onClose={HandleClose}
            open={open}
            direction="up"
            className={styles.SpeedDial}
            >
            <SpeedDialAction
                key="edit"
                tooltipTitle="edit category"
                icon={<CreateRoundedIcon/>}
                onClick={HandleClose}></SpeedDialAction>
            <SpeedDialAction
                key="add"
                tooltipTitle="add category"
                icon={<AddRoundedIcon/>}
                onClick={HandleClose}></SpeedDialAction>
        </SpeedDial>
        </React.Fragment>
        
    )
}

export default Budget;
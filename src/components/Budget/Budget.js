import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './Budget.module.css';
import BudgetItem from '../Budget/BudgetItem/BudgetItem';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
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
    {
        category:"Food", 
        budget: 1000,
        items:{
            item1:{
                    name:"Spur",
                    description: "A great meal at Spur",
                    amount: 500,
                    date: "26 July"
                },
            item2:{
                    name:"Woolworths",
                    description: "Spent a lot on Gluten free stuff",
                    amount: 200,
                    date: "27 July"
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
                    date: "18 July"
                },
            item2:{
                    name:"Woolworths",
                    description: "Bought a fancy jacket",
                    amount: 299,
                    date: "11 July"
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
                    date: "15 July"
                },
            item2:{
                    name:"Fibre Telecoms",
                    description: "My monthly fast wifi",
                    amount: 300,
                    date: "01 July"
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
                amount: 500,
                date: "02 July"
            },
        }
    },
    {
        category:"Health and Medical",
        budget:2000
    }
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
                {data.map(row => {
                    let actual = 0;
                    if(row.items != null){
                        for(const item in row.items){
                            actual += Number.parseFloat(row.items[item].amount);
                        }
                    }
                    
                    return(
                        <BudgetItem 
                        key={row.category}
                        category={row.category}
                        actual={actual}
                        budget={Number.parseFloat(row.budget).toFixed(2)}
                        items={row.items}></BudgetItem>
                    )
                })}
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
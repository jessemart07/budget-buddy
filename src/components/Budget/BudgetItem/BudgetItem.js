import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from './BudgetItem.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemDetails from './ItemDetails/ItemDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

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
    
}))
const BudgetItem = (props) => {  
    let barWidth = 0; 
    let full = false;
    let items = "You have no items in this category yet";

    barWidth = props.actual /props.budget *100;

    const styles = useStyles()
    
    if(props.items != null){
        let id = 0;
         items = Object.keys(props.items).map(item => {
            id++;
            return(
                <ItemDetails 
                    key={id}
                    amount={props.items[item].amount}
                    description={props.items[item].name}/>
            )
            
        })
    }
    
    
    if(barWidth >= 100){
        barWidth = 100;
        full = true;
    }
    
    return(
        <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <div className={classes.BudgetItem}>
                    <div className={full ? classes.Full : classes.Bar}>
                        <div className={full ? classes.BarFull : classes.BarFill} style={{width:barWidth + '%'}} ></div>
                        <div className={classes.BarInfo}>
                            <p className={classes.Category}>{props.category}</p>
                            <p className={classes.Budget}>R{Number.parseFloat(props.actual).toFixed(2)} / R{Number.parseFloat(props.budget).toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                </AccordionSummary>
                <AccordionDetails>
                <Table className={styles.table}>
                <TableBody>
                        {items}
                    </TableBody>
                </Table>
                    
                </AccordionDetails>
            </Accordion>
    )
}

export default BudgetItem;
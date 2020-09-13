import React from 'react';
import classes from './BudgetItem.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemDetails from './ItemDetails/ItemDetails';
import BorderLinearProgress from '@material-ui/core/LinearProgress';

const BudgetItem = (props) => {  
    let barWidth = 0; 
    let full = false;
   
    barWidth =   (props.actual /props.budget  * 100) - ((props.actual /props.budget  * 100) * 0.063);
    
    if(barWidth > 100){
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
                            <p className={classes.Budget}>R{props.actual} / R{props.budget}</p>
                        </div>
                    </div>
                    
                    
                </div>
                </AccordionSummary>
                <AccordionDetails>
                    <ItemDetails actual={props.actual}></ItemDetails>
                </AccordionDetails>
            </Accordion>
    )
}

export default BudgetItem;
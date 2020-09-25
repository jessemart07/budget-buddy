import React, { useState } from 'react';
import { IconButton, makeStyles, TextField, Tooltip } from '@material-ui/core';
import classes from './BudgetItem.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ItemDetails from './ItemDetails/ItemDetails';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import Drawer from '@material-ui/core/Drawer';
import EditDrawer from '../BudgetEditDrawer/BudgetEditDrawer';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
    IconButton:{
        marginRight:10
    },
    Icon:{
        color:"#354649",
    }
}))
const BudgetItem = (props) => {  
    let barWidth = 0; 
    let full = false;
    let items = "You have no items in this category yet";

    let [expand, setExpand] = useState(false);
    let [editOpen, setEditOpen] = useState(false);
    let [dialogOpen, setDialogOpen] = useState(false);

    const handleDialog = (status) => (event) => {
        setDialogOpen(status);
    }
    const ToggleEditDrawer = (status) => (event) => {
        setEditOpen(status);
    }

    const ToggleAccordion =() => (event) => {
        setExpand(!expand);
    }
    
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
    let editBtn = null;
    if(props.edit){
        editBtn = (
            <React.Fragment>
                <Tooltip title="Delete Category" placement="left">
                <IconButton className={styles.IconButton} onClick={handleDialog(true)}>
                        <DeleteIcon style={{color:"#e34c4c"}} className={styles.Icon}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Edit Category" placement="left">
                    <IconButton className={styles.IconButton} onClick={ToggleEditDrawer(true)}>
                        <CreateRoundedIcon className={styles.Icon}/>
                    </IconButton>
                </Tooltip>
            </React.Fragment>
        )
    }
    
    if(barWidth >= 100){
        barWidth = 100;
        full = true;
    }
    
    return(
        <React.Fragment>
            <Accordion expanded={expand}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon onClick={ToggleAccordion()}/>}>
                    <div className={classes.BudgetItem}>
                        {editBtn}
                        <div className={full ? classes.Full : classes.Bar} onClick={ToggleAccordion()}>
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
                <Drawer anchor="right" open={editOpen} onClose={ToggleEditDrawer(false)}> 
                    <EditDrawer 
                        category={props.category}
                        actual={Number.parseFloat(props.actual).toFixed(2)}
                        budget={Number.parseFloat(props.budget).toFixed(2)}></EditDrawer>
                </Drawer>
                <Dialog 
                open={dialogOpen}
                onClose={handleDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                    <DialogTitle d="alert-dialog-title">{"Are you sure you want to delete this category?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            If you delete this category it will be deleted permanently
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleDialog(false)} >
                        Yes, Delete
                    </Button>
                    <Button onClick={handleDialog(false)}  autoFocus>
                        Cancel
                    </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
    )
}

export default BudgetItem;
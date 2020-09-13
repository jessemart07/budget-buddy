import React, { Component, useState} from 'react';
import Budget from '../../components/Budget/Budget';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Transactions from '../../components/Transactions/Transactions';
import { Container } from '@material-ui/core';
import classes from './BudgetBuddy.module.css';


class BudgetBuddy extends Component {
    state = { 
        value: 0
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };
    render(){
        return (
            <div className={classes.BudgetBuddy}>
                <Paper square>
                    <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="secondary"
                    aria-label="disabled tabs example"
                    onChange={this.handleChange}
                    >
                        <Tab label="Budget" value={this.state.value} index={0}/>
                        <Tab label="Transactions" value={this.state.value} index={1}/>
                    </Tabs>
                </Paper>
                <Budget></Budget>
            </div>
        )
    }
}

export default BudgetBuddy;
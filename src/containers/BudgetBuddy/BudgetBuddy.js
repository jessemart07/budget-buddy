import React, { Component, useState} from 'react';
import Budget from '../../components/Budget/Budget';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../utils/TabPanel/TabPanel';
import Transactions from '../../components/Transactions/Transactions';
import { Container } from '@material-ui/core';

import classes from './BudgetBuddy.module.css';


class BudgetBuddy extends Component {
    state = { 
        value: 1
        
    }
    
    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };

    a11yProps = (index) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
    render(){
        let body = <Budget></Budget>;
        if(this.state.value == 1){
            body = <Transactions></Transactions>;
        }
        
        return (
            <div className={classes.BudgetBuddy}>
                <Paper square>
                    <Tabs
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="secondary"
                    aria-label="simple tabs example"
                    onChange={this.handleChange}
                    >
                        <Tab label="Budget"  {...this.a11yProps(0)}/>
                        <Tab label="Transactions" {...this.a11yProps(1)}/>
                    </Tabs>
                </Paper>
                <TabPanel value={this.state.value} index={0}>
                    <Budget></Budget>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <Transactions></Transactions>
                </TabPanel>
            </div>
        )
    }
}

export default BudgetBuddy;
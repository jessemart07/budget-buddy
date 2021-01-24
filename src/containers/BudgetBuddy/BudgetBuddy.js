import React, { Component, useState } from "react";
import Budget from "../../components/Budget/Budget";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../../utils/TabPanel/TabPanel";
import Transactions from "../../components/Transactions/Transactions";
import { Container } from "@material-ui/core";
import axios from "../../axios";
import classes from "./BudgetBuddy.module.css";

class BudgetBuddy extends Component {
  state = {
    value: 0,
    categories: null,
  };

  componentDidMount() {
    axios
      .get("/budgets/categories.json")
      .then((res) => {
        let data = [];
        Object.keys(res.data).map((key) => {
          data.push(res.data[key]);
        });
        this.setState({
          ...this.state,
          categories: [...data],
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          categories: [],
        });
        console.log(err);
      });
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  render() {
    let body = "Fetching data";
    if (this.state.categories) {
      body = <Budget categories={this.state.categories}></Budget>;
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
            <Tab label="Budget" {...this.a11yProps(0)} />
            <Tab label="Transactions" {...this.a11yProps(1)} />
          </Tabs>
        </Paper>
        <TabPanel value={this.state.value} index={0}>
          {body}
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Transactions></Transactions>
        </TabPanel>
      </div>
    );
  }
}

export default BudgetBuddy;

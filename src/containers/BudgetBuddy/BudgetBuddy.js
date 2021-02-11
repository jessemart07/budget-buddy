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
import Loader from "../../components/UI/Loader/Loader";
class BudgetBuddy extends Component {
  state = {
    value: 0,
    categories: null,
    transactions: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
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

    axios
      .get("budgets/transactions.json")
      .then((res) => {
        console.log(res.data);
        let data = [];
        Object.keys(res.data).map((key) => {
          data.push(res.data[key]);
        });
        this.setState({
          ...this.state,
          transactions: [...data],
        });
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          transactions: [],
        });
        console.log(err);
      });
  };

  handleCategory = (newData, type) => {
    switch (type) {
      case "Add":
        let newArr = [...this.state.categories];
        newArr.push(newData);
        this.setState({
          ...this.state,
          categories: newArr,
        });
        break;
      case "Update":
        this.setState({
          ...this.state,
          categories: newData,
        });
        break;
      case "Delete":
        this.setState({
          ...this.state,
          categories: newData,
        });
    }
    console.log(this.state.categories);
  };

  handleTransactions = (newData, type) => {
    let newArr = [...this.state.transactions];
    switch (type) {
      case "Add":
        newArr.push(newData);
        this.setState({
          ...this.state,
          transactions: newArr,
        });
        break;
      case "Update":
        this.setState({
          ...this.state,
          transactions: newData,
        });
        console.log(this.state.transactions);
      case "Delete":
        this.setState({
          ...this.state,
          transactions: newData,
        });
      default:
        break;
    }
  };

  handleChange = (event, newValue) => {
    this.setState({
      ...this.state,
      value: newValue,
    });
  };

  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };
  render() {
    let budget = <Loader></Loader>;
    let transactions = <Loader></Loader>;
    if (this.state.categories && this.state.transactions) {
      budget = (
        <Budget
          functionChange={this.handleTransactions}
          categoryChange={this.handleCategory}
          transactions={this.state.transactions}
          categories={this.state.categories}
        ></Budget>
      );
    }

    if (this.state.transactions) {
      transactions = (
        <Transactions
          transactionChange={this.handleTransactions}
          categoryChange={this.handleCategory}
          transactions={this.state.transactions}
          categories={this.state.categories}
        ></Transactions>
      );
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
          {budget}
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          {transactions}
        </TabPanel>
      </div>
    );
  }
}

export default BudgetBuddy;

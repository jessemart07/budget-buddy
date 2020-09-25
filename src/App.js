import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation/Navbar/Navbar';
import Home from './containers/HomePage/HomePage';
import { Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Budget from './containers/BudgetBuddy/BudgetBuddy';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a3c6c4',
      contrastText:"#fff"
    },
    secondary: {
      main: '#354649'
    }
  },
})

let routes = (
  <Switch>
    <Route path="/Create-budget" component={Budget}></Route>
    <Route path="/" exact component={Home}></Route>
  </Switch>
)

function App() {
  return (
    <div >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
         
            {routes}
          
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

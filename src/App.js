import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/HomePage/HomePage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a3c6c4'
    },
    secondary: {
      main: '#354649',
    },
  },
})

function App() {
  return (
    <div >
        <ThemeProvider theme={theme}>
          <Home></Home>
        </ThemeProvider>
        
    </div>
  );
}

export default App;

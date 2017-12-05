import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar/NavBar';
import PortfolioTabs from './components/PortfolioTabs/PortfolioTabs';

const App = () => (
  <MuiThemeProvider>
    <PortfolioTabs /> 
  </MuiThemeProvider>
);

export default App;
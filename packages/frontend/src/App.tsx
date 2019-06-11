import React from 'react';
import './App.css';
import Index from './pages/Index';
import Board from './pages/Board/Board';
import Card from './pages/Card/Card';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import theme from './Theme'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/b/" component={Board} />
          <Route path="/c/" component={Card} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

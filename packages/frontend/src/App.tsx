import React from 'react';
import './App.css';
import Index from './pages/Index';
import Board from './pages/Board/Board';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/b/" component={Board} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;

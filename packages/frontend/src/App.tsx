import React from 'react';
import './App.css';
import Index from './pages/Index';
import Board from './pages/Board';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Index} />
        <Route path="/b/" component={Board} />
      </div>
    </Router>
  );
}

export default App;

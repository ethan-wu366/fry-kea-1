import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/App.css';

import Landing from './components/Landing';
import Card from './Cards';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
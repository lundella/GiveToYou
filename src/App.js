import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './layout/Main';
import Campaign from './layout/Campaign';

function App () {
  return (
    <Router>
      <div className="App">
        <p>Root Page</p>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/campaign' component={Campaign} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
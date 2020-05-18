import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './layout/Main';
import Campaign from './layout/Campaign';

import HeadDrawer from './components/HeadDrawer';


function App () {
  return (
    <Router>
      <div className="App">
        <HeadDrawer />
      </div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/campaign' component={Campaign} />
      </Switch>
    </Router>

  );
}

export default App;
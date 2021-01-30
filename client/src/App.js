import React, { Fragment } from 'react';
import Landing from './components/Landing/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './components/Routing/index';

import './App.css';
function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={routes}/>
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import FloatingMap from 'components/FloatingMap';
import Admin from './Admin';
import Protected from './Protected';
import MarketplacePage from 'pages/MarketplacePage';
import GenerateEnergyPage from 'pages/GenerateEnergyPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Protected> */}
            <Route path="/dashboard" component={Admin} />
            <Route path="/tables" component={Admin} />
            <Route path="/billing" component={Admin} />
            <Route path="/profile" component={Admin} />
            <Route path="/marketplace" component={Admin} />
          {/* </Protected> */}
          <Route exact path="/authenticate/sign-in" component={Admin} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
        <FloatingMap />
      </div>
    </Router>
  );
}

export default App;
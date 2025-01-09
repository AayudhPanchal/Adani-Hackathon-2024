import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from 'Admin';
import HomePage from 'pages/HomePage';
import FloatingMap from 'components/FloatingMap';
import MarketplacePage from 'pages/MarketplacePage';

function App() {
  return (
    <Router >
      <div>
        <Switch>
          <Route path='/authenticate-sign'></Route>
        <Route path="/marketplace" component={MarketplacePage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Admin} />
          <Route component={HomePage} /> 
        </Switch>
        <FloatingMap />
      </div>
    </Router>
  );
}

export default App;
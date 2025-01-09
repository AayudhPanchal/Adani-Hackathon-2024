import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from 'Admin';
import HomePage from 'pages/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={Admin} />
          <Route component={HomePage} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
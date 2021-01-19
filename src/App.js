import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  );
}
export default App;

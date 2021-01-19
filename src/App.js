import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Hello from './components/Hello';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Hello} />
    </Switch>
  );
}
export default App;

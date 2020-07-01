import React, { useEffect } from 'react';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import { Route, Switch } from 'react-router-dom'

function App() {

  useEffect(() => {
    console.log('Cat is cute for sure.');
  });

  return (
    <>
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/search" component={SearchPage} />
        </Switch>
    </>
  );
}

export default App;

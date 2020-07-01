import React, { useEffect } from 'react';
import HomePage from './HomePage';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';

function App() {

  useEffect(() => {
    console.log('Cat is cute for sure.');
  });

  return (
    <>
      <Route path="/" component={HomePage} exact/>
      <Route path="/search" component={SearchPage} />
      <Route />
    </>
  );
}

export default App;

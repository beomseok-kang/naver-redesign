import React, { useEffect } from 'react';
import LogoContainer from './components/container/LogoContainer';
import SearchBarContainer from './components/container/SearchBarContainer';
import HeaderContainer from './components/container/HeaderContainer';
import FooterContainer from './components/container/FooterContainer';

function App() {

  useEffect(() => {
    console.log('Cat is cute for sure.');
  });

  return (
    <>
      <HeaderContainer />
      <LogoContainer />
      <SearchBarContainer />
      <FooterContainer />
    </>
  );
}

export default App;

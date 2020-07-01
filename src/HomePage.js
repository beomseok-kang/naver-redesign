import React from 'react';
import LogoContainer from './components/container/LogoContainer';
import SearchBarContainer from './components/container/SearchBarContainer';
import HeaderContainer from './components/container/HeaderContainer';
import FooterContainer from './components/container/FooterContainer';

function HomePage() {

  return (
      <>
        <HeaderContainer />
        <LogoContainer />
        <SearchBarContainer showBanner />
        <FooterContainer />
      </>
  );
}

export default HomePage;
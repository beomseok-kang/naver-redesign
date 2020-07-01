import React from 'react';
import styled from 'styled-components';
import SearchPageHeaderContainer from './components/container/SearchPageHeaderContainer';
import SearchPageResultContainer from './components/container/SearchPageResultContainer';


function SearchPage() {

  return (
      <>
        <SearchPageHeaderContainer />
        <SearchPageResultContainer />
      </>
  );
}

export default SearchPage;
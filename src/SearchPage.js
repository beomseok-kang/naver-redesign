import React from 'react';
import SearchPageResultContainer from './components/container/SearchPageResultContainer';
import SearchPageHeader from './components/presentational/SearchPageHeader';


function SearchPage({ match }) {

  const { inputVal } = match.params;

  return (
      <>
        <SearchPageHeader inputVal={inputVal}/>
        <SearchPageResultContainer />
      </>
  );
}

export default SearchPage;
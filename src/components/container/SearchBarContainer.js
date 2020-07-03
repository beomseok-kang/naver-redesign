import React from 'react';
import styled from 'styled-components';
import SearchBar from '../presentational/SearchBar';

const StyledSearchBarContainer = styled.div`
    display:flex;
    height: 56px;
    justify-content: center;
`;

function SearchBarContainer({ showBanner, inputVal }) {

  return (
        <StyledSearchBarContainer>
            <SearchBar showBanner={showBanner} inputVal={inputVal ? inputVal : null}/>
        </StyledSearchBarContainer>
  );
}

export default SearchBarContainer;
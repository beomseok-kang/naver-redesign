import React from 'react';
import styled from 'styled-components';
import SearchBar from '../presentational/SearchBar';

const StyledSearchBarContainer = styled.div`
    display:flex;
    height: 56px;
    justify-content: center;
`;

function SearchBarContainer() {

  return (
        <StyledSearchBarContainer>
            <SearchBar />
        </StyledSearchBarContainer>
  );
}

export default SearchBarContainer;
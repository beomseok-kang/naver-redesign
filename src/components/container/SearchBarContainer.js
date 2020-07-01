import React from 'react';
import styled from 'styled-components';
import SearchBar from '../presentational/SearchBar';

const StyledSearchBarContainer = styled.div`
    display:flex;
    height: 56px;
    justify-content: center;
`;

function SearchBarContainer({ showBanner }) {

  return (
        <StyledSearchBarContainer>
            <SearchBar showBanner={showBanner}/>
        </StyledSearchBarContainer>
  );
}

export default SearchBarContainer;
import React from 'react';
import styled from 'styled-components';
import SearchPageResultBar from '../presentational/SearchPageResultBar';
import SearchPageResults from '../presentational/SearchPageResults';
import SearchPageTrending from '../presentational/SearchPageTrending';
import SearchPageFooter from '../presentational/SearchPageFooter';

const StyledResultContainer = styled.div`
`;

const StyledResultsFlexWrapper = styled.div`
    display: flex;
`;

function SearchPageResultContainer() {

    return (
        <StyledResultContainer>
            <SearchPageResultBar />
            <StyledResultsFlexWrapper>
                <SearchPageResults />
                <SearchPageTrending />
            </StyledResultsFlexWrapper>
            <SearchPageFooter />
        </StyledResultContainer>
    );
}

export default SearchPageResultContainer;
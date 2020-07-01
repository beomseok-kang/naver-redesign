import React from 'react';
import styled from 'styled-components';

const StyledSearchPageFooter = styled.div`
    padding-left: 166.66px;
    font-size: 13px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e4e4e4;
    background: #f2f2f2;
    height: 40px;

    a {
        text-decoration: none;
        color: #5f6368;
        margin-right: 25px;
        &:hover {
            text-decoration: underline;
        }
    }
`;

function SearchPageFooter() {

    return (
        <StyledSearchPageFooter>
            <a href="#">웹문서 수집 및 삭제 정책</a>
            <a href="#">플레이스업체 등록</a>
            <a href="#">검색광고 안내</a>
            <a href="#">통합검색 고객센터</a>
            <a href="#">유해게시물신고</a>
        </StyledSearchPageFooter>
    );
}

export default SearchPageFooter;
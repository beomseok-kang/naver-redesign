import React, { useState } from 'react';
import styled from 'styled-components';
import { MdSearch, MdArrowDropDown } from "react-icons/md";


const Wrapper = styled.div`
`;

const SearchInputForm = styled.form `
    position: relative;
    display: flex;
    border: 2px solid #19CE60;
    width: 582px;
    height: 52px;
    border-radius: 2px;
    color: #19CE60;
    font-size: 28px;
    align-items: center;
`;

const SearchInput = styled.input`
    width: 502px;
    box-sizing: border-box;
    border: none;
    outline: none;
    background: #FFFFFF;
    padding: 13px;
    margin-right: 12px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: #000000;
`;

const SearchButton = styled.button`
    padding: 0;
    width: 52px;
    height: 52px;
    border: none;
    margin-left: 12px;
    outline: none;
    cursor: pointer;
    background: #19CE60;
    color: #FFFFFF;
    font-size: 30px;
    line-height: 1;
`;

const StyledBanner = styled.div`
    margin-top: 12px;
    color: #5f6368;
    width: 586px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
        margin-left: 12px;
        font-weight: 700;
    }
    a {
        margin-left: 12px;
        text-decoration: none;
        display: block;
        height: 31px;
        width: 78px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        background: #304d7e;
        color: #FFFFFF;
        font-size: 12px;
        line-height: 31px;
    }
`;

const StyledSearchHistory = styled.div`
    position: absolute;
    top: 53px;
    left: -2px;
    width: 584px;
    height: 300px;
    border: 1px solid #bec8d8;    
    background: #FFFFFF;
`;

function SearchBar({ onSubmit }) {

    const [showHistory, setShowHistory] = useState(false);

    const onClick = () => {
        setShowHistory(!showHistory);
    };

    return (
        <Wrapper>
            <SearchInputForm onSubmit={onSubmit}>
                <SearchInput onClick={onClick}/>
                <MdArrowDropDown />
                <SearchButton><MdSearch /></SearchButton>
                { showHistory ? <StyledSearchHistory/> : null}
            </SearchInputForm>
            <StyledBanner>
                HWP 문서도 브라우저에서 바로 확인하세요!
                <strong>네이버 웨일</strong>
                <a href="https://whale.naver.com/details/hwp/?=main&wpid=RydDy7">다운로드</a>
            </StyledBanner>
        </Wrapper>
    );
}

export default SearchBar;
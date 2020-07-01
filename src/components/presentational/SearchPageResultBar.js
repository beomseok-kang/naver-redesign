import React from 'react';
import styled from 'styled-components';

const StyledTabWrapper = styled.div`
    height: 46px;
    border-top: 1px solid #f1f3f6;
    border-bottom: 1px solid #e1e3e9;
`
const StyledInnerWrapper = styled.div`
    height: 100%;
    width: 857.34px;
    display: flex;
    justify-content: space-between;
    margin-left: 166.66px;
`;

const StyledTabList = styled.ul`
    height: 100%;
    display: flex;
    padding: 0;
    align-items: center;
    list-style: none;
    margin: 0;
    li {
        a {
            margin: 0px 10px;
            display: block;
            height: 15px;
            font-size: 13px;
            line-height: 15px;
            text-decoration: none;
            font-weight: bold;
            color: #000000;
            padding: 15.5px 2px;
            &.selected {
                color: #19CE60;
                padding-bottom: 13.5px;
                border-bottom: 2px solid #19CE60;
            }
            
        }
        &:first-child{
            margin-left: -10px;
        }
    }
`;

const StyledRightWrapper = styled.div`
    display: flex;
    height: 100%;
`;

const StyledRightA = styled.a`
    display: block;
    color: #444444;
    padding: 16px 8px;
    text-decoration: none;
    font-size: 13px;
    line-height: 14px;
`;

function SearchPageResultBar() {

  return (
    <StyledTabWrapper>
        <StyledInnerWrapper>
            <StyledTabList>
                <li><a href="#" className="selected">통합검색</a></li>
                <li><a href="#">어학사전</a></li>
                <li><a href="#">포스트</a></li>
                <li><a href="#">블로그</a></li>
                <li><a href="#">동영상</a></li>
                <li><a href="#">지식iN</a></li>
                <li><a href="#">이미지</a></li>
                <li><a href="#">카페</a></li>
            </StyledTabList>
            <StyledRightWrapper>
                <StyledRightA>도움말</StyledRightA>
                <StyledRightA>원본반영</StyledRightA>
            </StyledRightWrapper>
        </StyledInnerWrapper>
    </StyledTabWrapper>
  );
}

export default SearchPageResultBar;
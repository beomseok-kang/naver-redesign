import React from 'react';
import styled from 'styled-components';

const StyledTrendingWrapper = styled.div`
    padding: 25px;
    padding-right: 0;
    width: 221.34px;
    color: #000000;
    font-size: 13px;
    h2 {
        font-size: 14px;
        font-weight: bold;
        line-height: 1;
        margin-bottom: 6px;
    }
`;

const StyledOrderedList = styled.ol`
    list-style: none;
    padding: 0;
    li {
        margin-top: 11px;
        height: 14px;
        display: flex;
        align-items: center;
        div {
            height: 12px;
            width: 12px;
            display: flex;
            line-height: 1;
            justify-content: center;
            align-items: center;
            font-size: 11px;
            margin-right: 9px;
            color: #666666;
            border: 1px solid #e0e0e0;
        }
        a {
            width: 198.34px;
            height: 100%;
            line-height: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-decoration: none;
            color: #000000;
            height: 100%;
            &:hover {
                text-decoration: underline;
            }
            &.new {
                &::after{
                    content: "NEW";
                    font-size: 10px;
                    line-height: 1;
                    color: #fb5151; 
                }
            }
        }
    }
`;

function SearchPageTrending() {

  return (
    <StyledTrendingWrapper>
        <h2>뉴스토픽</h2>
        <StyledOrderedList>
            <li><div>1</div><a href="#" className="new">쿠팡 부천 신선물류센터</a></li>
            <li><div>2</div><a href="#" className="new">이용수 할머니</a></li>
            <li><div>3</div><a href="#" className="new">대전 동구</a></li>
            <li><div>4</div><a href="#" className="new">스테이 스트롱 캠페인</a></li>
            <li><div>5</div><a href="#">등록금 반환</a></li>
            <li><div>6</div><a href="#" className="new">정의선 수석부회장</a></li>
            <li><div>7</div><a href="#" className="new">노동계 1만원 vs 경...</a></li>
            <li><div>8</div><a href="#" className="new">전국상의 회장단</a></li>
            <li><div>9</div><a href="#">민선7기 2주년</a></li>
            <li><div>10</div><a href="#" className="new">이재용 기소</a></li>
        </StyledOrderedList>
    </StyledTrendingWrapper>
  );
}

export default SearchPageTrending;
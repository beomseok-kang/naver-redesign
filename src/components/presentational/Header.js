import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import userImg from '../../img/user.gif';
import jrNaverColored from '../../img/jr-naver_colored.png'
import jrNaverGrey from '../../img/jr-naver_grey.png'
import happyBeanColored from '../../img/happy-bean_colored.png'
import happyBeanGrey from '../../img/happy-bean_grey.png'
import { MdApps, MdKeyboardArrowRight } from 'react-icons/md';

const StyledHeaderWrapper = styled.header`
    height: 72px;
    display: flex;
    justify-content: space-between;
`;

const StyledHeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

const StyledJrNaverIcon = styled.a`
    display: block;
    height: 12px;
    margin: 13px;
    margin-left: 30px;
    width: 68.57px;
    transition: 0.2s;
    background: url(${jrNaverGrey});
    background-repeat: no-repeat;
    background-size: contain;
    &:hover {
        background: url(${jrNaverColored});
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

const StyledHappyBeanIcon = styled.a`
    display: block;
    height: 12px;
    margin: 13px 0 ;
    width: 35.48px;
    transition: 0.2s;
    background: url(${happyBeanGrey});
    background-repeat: no-repeat;
    background-size: contain;
    &:hover {
        background: url(${happyBeanColored});
        background-repeat: no-repeat;
        background-size: contain;
    }
`;

const StyledHeaderRight = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
`
const StyledLinkA = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 18px;
    color: #19CE60;
    font-weight: 700;
    padding: 13px;
`;

export const StyledIcon = styled.div`
    display: flex;
    align-items: center;
    color: #666666;
    font-size: 18px;
    line-height: 18px;
    padding: 13px;
    cursor: pointer;
`;

export const StyledUserIcon = styled.div`
    cursor: pointer;
    text-indent: -9999px;
    margin: 13px;
    height: 44px;
    width: 44px;
    background: url(${userImg});
    background-size: contain;
    border-radius: 50%;
    background-repeat: no-repeat;
    border: 1px solid rgba(0,0,0,0.08);
`;

export const StyledLinksList = styled.ul`
    position: absolute;
    background: #FFFFFF;
    top: 100%;
    margin: 0;
    padding: 0;
    left: -13px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(5, 60px);
    overflow: auto;
    height: 300px;
    width: 300px;
    list-style: none;

    li {

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 700;
            color: #5f6368;
            height: 40px;
            width: 60px;
            margin: 10px 20px;
            text-decoration: none;
        
            &.text-green {
                color: #19CE60;
            }
        }
    }
`;

function Header() {

    const node = useRef();
    const node2 = useRef();

    const [showApps, setShowApps] = useState(false);

    const onClick = () => {
        setShowApps(!showApps);
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleClick = e => {
        if (node.current ? node.current.contains(e.target): null) {
            // inside click
            return;
        } else if (node2.current ? node2.current.contains(e.target): null) {
            return;
        }
        // outside click 
        setShowApps(false);
    };

    return (
        <StyledHeaderWrapper>
            <StyledHeaderLeft>
                <StyledJrNaverIcon href="https://jr.naver.com/"/>
                <StyledHappyBeanIcon href="https://happybean.naver.com/"/>
            </StyledHeaderLeft>
            <StyledHeaderRight>
                <StyledLinkA href="https://mail.naver.com/">메일</StyledLinkA>
                <StyledLinkA href="https://cafe.naver.com/">카페</StyledLinkA>
                <StyledLinkA href="https://blog.naver.com/">블로그</StyledLinkA>
                <StyledIcon ref={node2} onClick={onClick}><MdApps /></StyledIcon>
                <StyledUserIcon>User Icon</StyledUserIcon>
                {showApps
                    ? <StyledLinksList ref={node}>
                        <li><a className="text-green" href="https://kin.naver.com/">지식iN</a></li>
                        <li><a className="text-green" href="https://shopping.naver.com/">쇼핑</a></li>
                        <li><a className="text-green" href="https://order.pay.naver.com/home">Pay</a></li>
                        <li><a className="text-green" href="https://tv.naver.com/">TV</a></li>
                        <li><a href="https://dict.naver.com/">사전</a></li>
                        <li><a href="https://news.naver.com/">뉴스</a></li>
                        <li><a href="https://finance.naver.com/">증권</a></li>
                        <li><a href="https://land.naver.com/">부동산</a></li>
                        <li><a href="https://map.naver.com/v5/">지도</a></li>
                        <li><a href="https://movie.naver.com/">영화</a></li>
                        <li><a href="https://vibe.naver.com/about">뮤직</a></li>
                        <li><a href="https://book.naver.com/">책</a></li>
                        <li><a href="https://comic.naver.com/index.nhn">웹툰</a></li>
                        <li style={{gridColumnStart: "span 2", gridColumnEnd: "4"}}><a href="https://www.naver.com/more.html" style={{width: "160px"}}>더보기<MdKeyboardArrowRight/></a></li>
                      </StyledLinksList>
                    : null
                }
            </StyledHeaderRight>
        </StyledHeaderWrapper>
    );
}

export default Header;
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SearchBarContainer from '../container/SearchBarContainer';
import { StyledUserIcon, StyledLinksList, StyledIcon } from './Header';
import { MdApps, MdKeyboardArrowRight } from 'react-icons/md'

const StyledSearchPageHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 19px 0;

`;

const StyledLeftWrapper = styled.div`
    margin-left: 40px;
    width: 712.66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledRightWrapper = styled.div`
    position: relative;
    margin: -8px 27px -8px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

function SearchPageHeader() {
  
    const node = useRef();
    const node2 = useRef();

    const [showApps, setShowApps] = useState(false);

    const onClick = () => {
        setShowApps(!showApps);
        console.log(showApps);
    };

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
        <StyledSearchPageHeader>
            <StyledLeftWrapper>
                <Logo isSmall />
                <SearchBarContainer showBanner={false}/>
            </StyledLeftWrapper>
            <StyledRightWrapper>
                <StyledUserIcon />
                <StyledIcon ref={node2} onClick={onClick}><MdApps /></StyledIcon>
                {showApps
                    ? <StyledLinksList
                        style={{position: 'absolute', top: '100%', left: '-200px'}}
                        ref={node}
                      >
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
            </StyledRightWrapper>
        </StyledSearchPageHeader>
    );
}

export default SearchPageHeader;
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdSearch, MdArrowDropDown } from "react-icons/md";
import starImg from '../../img/atcmp_spat_v7.png';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, toggleStar, deleteItem } from '../../modules/historyItem';
import { getAutoComplete } from '../../APIs/AutoComplete';

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

const StyledSearchHistory = styled.ul`
    position: relative;
    width: 584px;
    border: 1px solid #bec8d8;    
    background: #FFFFFF;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 13px;
`;

const StyledNoHistory = styled.div`
    padding: 0 15px;
    padding-bottom: 7px;
    font-size: 12px;
    line-height: 23px;
    color: rgb(102,102,102);
`;

const StyledNoti = styled.div`
    margin-top: 6px;
    border-top: 1px solid #ebeef3;
    padding: 9px 0 7px 16px;
    font-size: 11px;
    color: #888;
    letter-spacing: -1px;
    line-height: 16px;
`;

const StyledHistoryFooter = styled.div`
    border-top: 1px solid #ebeef3;
    padding: 8px 0;
    background: #f9fafc;
    font-size: 11px;
    letter-spacing: -1px;
`;

const StyledHistoryDeleteA = styled.a`
    display: block;
    background: none;
    width: 50px;
    padding: 0;
    margin: 2px 0 0 15px;
    border: none;
    font-size: 11px;
    line-height: 1.3em;
    cursor: pointer;
    color: #666666;
    &:hover{
        text-decoration: underline;
    }
`;

// const StyledSearchAutoComplete = styled.div`
//     position: absolute;
//     top: 53px;
//     left: -2px;
//     width: 584px;
//     height: 300px;
//     border: 1px solid #bec8d8;
//     background: #FFFFFF;
// `;

function SearchBar({ showBanner }) {

    const historyItems = useSelector(state => state);

    const dispatch = useDispatch();

    const node = useRef();
    const node2 = useRef();
    
    const [showHistory, setShowHistory] = useState(false);
    const [value, setValue] = useState('');
    const [showDelete, setShowDelete] = useState(false);

    const onClickSearchBar = () => {
        setShowHistory(!showHistory);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleClick = e => {
        if (node.current && node.current.contains(e.target)) {
            return;
        } else if (node2.current && node2.current.contains(e.target)) {
            return;
        }
        // outside click 
        setShowDelete(false);
        setShowHistory(false);
    };

    async function onChange (e) {
        setValue(e.target.value);
        const data = await getAutoComplete(e.target.value);
        console.log(data);
    };

    const onSubmit = e => {
        e.preventDefault();
        value ? dispatch(addItem(value)) : console.log('no value');
        setValue('');
    }

    const onClickDeleteButton = () => {
        setShowDelete(!showDelete);
    };

    return (
        <Wrapper>
            <SearchInputForm onSubmit={onSubmit}>
                <SearchInput
                    ref={node2}
                    onClick={onClickSearchBar}
                    onChange={onChange}
                    value={value}
                />
                <MdArrowDropDown style={{cursor: 'pointer'}} onClick={onClickSearchBar}/>
                <SearchButton type="submit"><MdSearch /></SearchButton>
            </SearchInputForm>
            { showHistory
                    ?
                    <StyledSearchHistory ref={node}>
                        {historyItems
                            ? historyItems.map(item => {
                                    const len = historyItems.length;
                                    if (len>10 && (item.id)<=(len-10)) {
                                        return null;
                                    } else {
                                        return (<HistoryItem
                                            key={item.id}
                                            idNum={item.id}
                                            text={item.text}
                                            starred={item.starred}
                                            showDelete={showDelete}
                                        />);
                                    }
                                })
                            : null
                        }
                        {historyItems.length < 1 ?  <StyledNoHistory>
                                최근검색어 내역이 없습니다.
                            </StyledNoHistory> : null}
                        <StyledNoti key="noti">
                            공용 PC에서는 개인정보 보호를 위하여 반드시 로그아웃을 해 주세요.
                        </StyledNoti>
                        <StyledHistoryFooter key="footer">
                            <StyledHistoryDeleteA onClick={() => onClickDeleteButton()}>
                                기록 삭제
                            </StyledHistoryDeleteA>
                        </StyledHistoryFooter>
                    </StyledSearchHistory>
                    : null}
            { showBanner && !showHistory ? <StyledBanner>
                    HWP 문서도 브라우저에서 바로 확인하세요!
                    <strong>네이버 웨일</strong>
                    <a href="https://whale.naver.com/details/hwp/?=main&wpid=RydDy7">다운로드</a>
                </StyledBanner> : null                
            }
        </Wrapper>
    );
}

const StyledList = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    height: 27px;
    &:hover {
        background: #f9fafc;
    }
`;

const StyledHistoryListA = styled.a`
    display: flex;
    align-items: center;
    color: #000000;
    padding: 0px 2px;
    margin-left: 35px;
    font-size: 14px;
    line-height: 27px;
    text-decoration: none;
`;
const StyeldStarWrapper = styled.button`
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 3.5px;
    cursor: pointer;
    padding: 4px 4px 4px 4px;
    margin: 0px 3px 0px 12px;
    border: none;
    background: none;
`;

const StyledStar = styled.div`
    width: 1px;
    height: 12px;
    padding-left: 12px;
    vertical-align: top;


    display: inline-block;
    overflow: hidden;
    background: url(${starImg}) no-repeat;
    background-position: -1px -64px;
    vertical-align: middle;
    color: transparent;
    text-indent: 0;
    &.starred {
        background: url(${starImg}) no-repeat;
        background-position: -18px -64px;
    }
`;

const StyledDeleteButton = styled.div`
    cursor: pointer;
    display: block;
    position: absolute;
    top: 5px;
    right: 15px;
    width: 1px;
    height: 15px;
    padding-left: 15px;
    border: 1px solid #e3e7ee;
    background: url(${starImg}) no-repeat;
    background-position: -13px -26px;
`;

const HistoryItem = React.memo(function HistoryItem ({ idNum, text, starred, showDelete }) {

    const dispatch = useDispatch();
    const id = idNum;

    const onToggle = useCallback(
        () => dispatch(toggleStar(id)),
    [dispatch, id]);
    const onDelete = useCallback(
        () => dispatch(deleteItem(id)),
    [dispatch, id]);
    
    const classStarred = starred ? 'starred' : null ;
    

    return (
        <StyledList key={id}>
            <StyeldStarWrapper>
                <StyledStar  className={classStarred} onClick={onToggle}/>
            </StyeldStarWrapper>
            <StyledHistoryListA href="#">
                {text}
            </StyledHistoryListA>
            {
                showDelete ? <StyledDeleteButton onClick={onDelete}/> : null
            }
        </StyledList>
    );

})

export default SearchBar;
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    display: flex;
    padding-left: 13px;
    background: #fafbfc;
    height: 100%;
    border-top: 1px solid #e4e8eb;
`;

const StyledLinkA = styled.a`
    text-decoration: none;
    display: block;
    font-size: 12px;
    line-height: 12px;
    color: #777777;
    margin: 16px 11px;

    &:hover{
        text-decoration: underline;
    }
`;

function Footer() {

  return (
    <StyledFooter>
        <StyledLinkA href="#">회사소개</StyledLinkA>
        <StyledLinkA href="#">인재채용</StyledLinkA>
        <StyledLinkA href="#">제휴제안</StyledLinkA>
        <StyledLinkA href="#">이용약관</StyledLinkA>
        <StyledLinkA href="#">개인정보처리방침</StyledLinkA>
        <StyledLinkA href="#">청소년보호정책</StyledLinkA>
        <StyledLinkA href="#">네이버 정책</StyledLinkA>
        <StyledLinkA href="#">고객센터</StyledLinkA>
    </StyledFooter>
  );
}

export default Footer;
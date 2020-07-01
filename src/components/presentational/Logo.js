import React from 'react';
import styled from 'styled-components';
import img from '../../img/logo.png';
import { Link } from 'react-router-dom';

const LogoA = styled.a`
    display: block;
    background: url(${img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 67px;
    width: 315px;
    &.small {
        height: 21px;
        width: 98.73px;
        padding: 4px 4.48px 0;
    }
`;


function Logo ({ isSmall }) {

    const small = isSmall ? 'small' : null ;

    return (
        <LogoA href="/naver-redesign" className={small}/>
    );
}

export default Logo;
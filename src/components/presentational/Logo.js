import React from 'react';
import styled from 'styled-components';
import img from '../../img/logo.png';

const LogoA = styled.a`
    display: block;
    background: url(${img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 67px;
    width: 315px;
`;


function Logo () {
    return (
        <LogoA href="#" />
    );
}

export default Logo;
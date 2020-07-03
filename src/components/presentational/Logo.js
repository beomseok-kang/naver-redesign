import React from 'react';
import styled from 'styled-components';
import img from '../../img/logo.png';
import { useHistory } from "react-router";


const LogoImg = styled.div`
    cursor: pointer;
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

    const routerHistory = useHistory();

    const small = isSmall ? 'small' : null ;

    const onClick = () => routerHistory.push({ pathname: '/' });

    return (
        <LogoImg onClick={onClick} className={small}/>
    );
}

export default Logo;
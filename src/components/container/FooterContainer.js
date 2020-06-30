import React from 'react';
import styled from 'styled-components';
import Footer from '../presentational/Footer';

const StyledFooterContainer = styled.div`
    height: 44px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
`;

function FooterContainer() {

    return (
        <StyledFooterContainer>
            <Footer />
        </StyledFooterContainer>
    );
}

export default FooterContainer;
import React from 'react';
import styled from 'styled-components';
import Logo from '../presentational/Logo';

const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 67px;
    padding-top: 200px;
    margin-bottom: 60px;
`;

function LogoContainer() {

  return (
      <StyledLogoContainer>
          <Logo />
      </StyledLogoContainer>
  );
}

export default LogoContainer;
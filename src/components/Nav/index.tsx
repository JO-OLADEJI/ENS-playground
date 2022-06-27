import React from 'react';
import styled from 'styled-components';

// components
import { ButtonPrimary } from '../Button';

const NavWrapper = styled.nav`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #1B73E9;
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ButtonPrimary>
        Connect Wallet
      </ButtonPrimary>
    </NavWrapper>
  );
}

export default Nav;

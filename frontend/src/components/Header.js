import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.gutters.sm} 0;
`;

export default function Header() {
  return (
    <StyledHeader>
      <SocialMedia />
      <p>test</p>
      <p>stilll test</p>
    </StyledHeader>
  );
}

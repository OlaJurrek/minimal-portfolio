import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import Header from './Header';

const MainContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  font-family: 'Lato', sans-serif;
`;

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Header />
          {children}
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

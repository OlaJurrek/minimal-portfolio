import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

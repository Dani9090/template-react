import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Root = () => (
  <Router>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <
      <UsersList title="Users list" />
    </Wrapper>
  </ThemeProvider>
  </Router>
);

export default Root;
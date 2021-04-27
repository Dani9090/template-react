import React, {useState} from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const initialFormState = {
  name: '',
    attendance: '',
    average: '',
}

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);


  return(
  <Router>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Switch>
      <UsersList />
      </Switch>
    </Wrapper>
  </ThemeProvider>
  </Router>
)};

export default Root;

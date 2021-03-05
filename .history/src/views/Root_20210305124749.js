import React from 'react';
import UserList from 'components/UsersList/UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${()=> `${window.innerWidth}`}
  height: 100vh;
  border: 1px solid black;
`;

const Root = () => (
  <Wrapper>
    <UserList />
  </Wrapper>
);

export default Root;

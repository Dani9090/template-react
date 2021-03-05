import React from 'react';
import UserList from 'components/UsersList/UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
`;

const Root = () => (
  <>
    <UserList />
  </>
);

export default Root;

import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';
import styled from 'styled-components';
import GlobalStyle from 'assets/GlobalStyle.module.scss';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  border-radius: 25px;
`;
const UserList = () => (
  <Wrapper>
    <div className={GlobalStyle.box} />
    <ul>
      {users.map((UserData) => (
        <UserListItem UserData={UserData} />
      ))}
    </ul>
  </Wrapper>
);

export default UserList;

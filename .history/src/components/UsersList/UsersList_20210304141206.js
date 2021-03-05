import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';
import GlobalStyle from 'assets/GlobalStyle.module.scss'';

const UserList = () => (
  <div>
    <div className={GlobalStyle.box} />
    <ul>
      {users.map((UserData) => (
        <UserListItem UserData={UserData} />
      ))}
    </ul>
  </div>
);

export default UserList;

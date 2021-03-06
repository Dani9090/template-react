import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';
import styles from 'assets/GlobalStyle.module.scss';

const UserList = () => (
  <div>
    <ul>
      {users.map((UserData) => (
        <UserListItem UserData={UserData} />
      ))}
    </ul>
  </div>
);

export default UserList;

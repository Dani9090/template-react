import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';
import GlobalStyle from 'assets/GlobalStyle.js';

const UserList = () => (
  <div>
    <div className={styles.box} />
    <ul>
      {users.map((UserData) => (
        <UserListItem UserData={UserData} />
      ))}
    </ul>
  </div>
);

export default UserList;

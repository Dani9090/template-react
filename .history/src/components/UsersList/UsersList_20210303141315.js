import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import UserListItem from 'components/UserListItem/UserListItem';

const UserList = () => (
  <div>
    <ul>
      {users.map((UserData) => (
        <UserListItem />
      ))}
    </ul>
  </div>
);

UserList.propTypes = {};

export default UserList;

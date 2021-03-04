import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';
import UserListItem fr

const UserList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (

      ))}
    </ul>
  </div>
);

UserList.propTypes = {};

export default UserList;

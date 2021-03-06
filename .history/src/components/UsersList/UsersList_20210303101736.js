import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';

const UserList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (
        <li>
          <div>{average}</div>
          <div>
            <p>{}</p>
            <p>attendance: {attendance}</p>
          </div>
          <button>X</button>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {};

export default UserList;

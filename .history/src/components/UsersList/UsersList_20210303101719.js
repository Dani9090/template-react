import React from 'react';
import PropTypes from 'prop-types';
import { users } from 'data/users';

const UserList = () => (
  <div>
    <ul>
      {users.map(({ name, average, attendance }) => (
        <li>
          <div>{a}</div>
          <div>
            <p>Adam romański</p>
            <p>attendance: 38%</p>
          </div>
          <button>X</button>
        </li>
      ))}
    </ul>
  </div>
);

UserList.propTypes = {};

export default UserList;

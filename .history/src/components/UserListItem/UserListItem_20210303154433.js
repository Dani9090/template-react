import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ average, name, a }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UserListItem.propTypes = {};

export default UserListItem;

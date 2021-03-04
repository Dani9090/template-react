import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ UserData: { average, name, attendance } }) => (
  <li>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <button>X</button>
  </li>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
      average:PropTypes.string,
      name:PropTypes.string,
      attendance:
  }),
};

export default UserListItem;

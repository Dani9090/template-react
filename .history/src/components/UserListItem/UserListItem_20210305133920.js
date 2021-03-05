import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
display:flex;
align-items:center
`
const UserListItem = ({ UserData: { average, name, attendance = '0%' } }) => (
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
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;

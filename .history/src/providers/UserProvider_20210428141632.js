import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});
import React from 'react';
import PropTypes from 'prop-types';

const UsersProvider = () => (
<>
    <div></div>
</>

);

UsersProvider.propTypes = {}

export default UsersProvider;
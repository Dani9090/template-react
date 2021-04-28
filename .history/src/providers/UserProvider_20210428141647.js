import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => (
  <>
    <div></div>
  </>
);

UsersProvider.propTypes = {};

export default UsersProvider;

import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
  };

  <>
    <div></div>
  </>;
};
export default UsersProvider;

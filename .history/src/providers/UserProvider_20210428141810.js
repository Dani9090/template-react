import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {

return(
    <UsersContext.Provider
            value={{
              users,
              handleAddUser,
              deleteUser,
            }}
          ></UsersContext.Provider>
)
};
export default UsersProvider;

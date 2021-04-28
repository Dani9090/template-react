import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

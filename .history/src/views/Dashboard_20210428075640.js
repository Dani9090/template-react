import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { UserShape } from 'types';

const Dashboard = ({ users, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList />
    </ViewWrapper>
  );
};

export default Dashboard;

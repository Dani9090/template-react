import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {

const {}

  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

export default Dashboard;

import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import UsersContext from 'views/Root';

const Dashboard = () => {
  const con = useContext(UsersContext);

  return (
    <ViewWrapper>
      <UsersList users={users} />
    </ViewWrapper>
  );
};

export default Dashboard;

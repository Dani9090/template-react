import React, { useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import Use
const Dashboard = () => {

const {users} = useContext(User)

  return (
    <ViewWrapper>
      <UsersList users={users} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

export default Dashboard;

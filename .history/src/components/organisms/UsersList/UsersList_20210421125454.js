import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

// const mockAPI = (success) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (usersData) {
//         resolve([...usersData]);
//       } else {
//         reject({ message: 'Error' });
//       }
//     }, 2000);
//   });
// };


// const initialFormState = {
//   name: '',
//     attendance: '',
//     average: '',
// }
const UsersList = ({deleteUser}) => {
  // const [users, setUsers] = useState(usersData);
  // const [formValues, setFormValues] = useState(initialFormState);
  // // const [isLoading, setLoadingState] = useState([]);

  // useEffect(() => {
  //   setLoadingState(true);
  //   mockAPI()
  //     .then((data) => {
  //       setLoadingState(false);
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // const deleteUser = (name) => {
  //   const filteredUsers = users.filter((user) => user.name !== name);
  //   setUsers(filteredUsers);
  // };

  // const handleInputChange = (e) => {
  //   console.log(formValues);
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleAddUser = (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     name: formValues.name,
  //     attendance: formValues.attendance,
  //     average: formValues.average,
  //   }

  //   setUsers([newUser, ...users]);
  //   setFormValues(initialFormState)
  // };

  // const handleNameChange = (e) => {
  //   setNameValue(e.target.value);
  //   console.log(nameValue);
  // };
  return (
    <>

      <Wrapper>
        {/* <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle> */}
        <StyledTitle>Users List</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;

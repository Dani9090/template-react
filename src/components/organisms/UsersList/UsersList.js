import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

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
const UsersList = ({ deleteUser, users = [] }) => {
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
      {/* <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle> */}
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;

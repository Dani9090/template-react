import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [formValue, setFormValue] = useState({
    name: '',
    attendanece: '',
    average: '',
  });
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputeChange = (e) => {
    console.log(formValue);
    setFormValue({
      ...setFormValue,
      [e.target.name]: e.target.value,
    });
  };
  // const handleNameChange = (e) => {
  //   setNameValue(e.target.value);
  //   console.log(nameValue);
  // };
  return (
    <>
      <Wrapper as="form">
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValue.name} onChange={handleInputeChange} />
        <FormField label="Attendanece" id="attendanece" name="attendanece" value={formValue.attendanece} onChange={handleInputeChange} />
        <FormField label="Average" id="average" name="average" value={formValue.average} onChange={handleInputeChange} />
        <Button type=s>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>{isLoading ? 'Loading...' : 'Users List'}</StyledTitle>
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

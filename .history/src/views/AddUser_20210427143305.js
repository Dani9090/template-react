import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { UserShape } from 'types';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'views/Root';

const AddUser = ({ formValues, handleInputChange }) => {
  return (
    <UsersContext.Consumer>
      {(ctx) => (
        <ViewWrapper as="form" onSubmit={ctx.handleAddUser}>
          {console.log(ctx)}
          <Title>Add new student</Title>
          <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
          <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
          <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
          <Button type="submit">Add</Button>
        </ViewWrapper>
      )}
    </UsersContext.Consumer>
  );
};

AddUser.propTypes = {
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;

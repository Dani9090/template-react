import React from 'react';
// import PropTypes from 'prop-types';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';

const Form = ({handleAddUser, formValues, handleInputChange}) => (

<Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </Wrapper>


);

// Form.propTypes = {}

export default Form;
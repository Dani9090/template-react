import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: grey;
  }
`;

const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color:${({isSecondary})=>} #c0c7d6;
  border-radius: 50px;
  border: none;
  color: white;
`;

const UserListItem = ({ UserData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <div>{average}</div>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <StyledButton>X</StyledButton>
    <StyledButton isSecondary borderRadius="2px">
      X
    </StyledButton>
  </Wrapper>
);

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UserListItem;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: grey;
  }
`;
const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  padding: 20px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const UserListItem = ({ UserData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage>{average}</StyledAverage>
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </div>
    <Button />
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

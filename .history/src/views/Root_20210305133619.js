import React from 'react';
import UserList from 'components/UsersList/UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%auto;
  /* width: ${() => `${window.innerWidth / 2}px`}; */
  height: 180vh;
  box-sizing: border-box;
`;

const Root = () => (
  <Wrapper>
    <UserList />
  </Wrapper>
);

export default Root;

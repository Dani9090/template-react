import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: #c0c7d6;
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;
const Button = () => (

<StyledButton/>
);
export default Button;

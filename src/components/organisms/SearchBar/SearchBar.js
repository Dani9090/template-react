import React from 'react';

import { SearchBarWrapper, StatusInfo } from 'components/organisms/SearchBar/SearchBar.styles';
import { Input } from 'components/atoms/Input/Input';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};

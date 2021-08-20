import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
  });
});

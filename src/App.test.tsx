import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import {ThemeProvider} from "styled-components";
import { theme } from './components/themes/theme';

test('renders learn react link', () => {
  const { getByText } = render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  );
  const linkElement = getByText(/Random Beer Generator/i);
  expect(linkElement).toBeInTheDocument();
});

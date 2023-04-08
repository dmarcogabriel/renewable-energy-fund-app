import React from 'react';
import {ThemeProvider as SCThemeProvider} from 'styled-components/native';

export const THEME = {};

export const ThemeProvider = ({children}: React.PropsWithChildren) => (
  <SCThemeProvider theme={THEME}>{children}</SCThemeProvider>
);

import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@store/index';
import {ThemeProvider} from '@contexts/Theme';
import {Navigation} from './navigation/Navigation';

export const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  </Provider>
);

import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@store/index';
import {Navigation} from './Navigation';

export const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

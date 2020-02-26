import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <div><p>Hello, world!</p></div>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);

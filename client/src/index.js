import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { createStore } from 'redux';
import allReducer from './reducer';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const store = createStore(allReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
);
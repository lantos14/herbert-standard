import React from 'react';
import reactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.scss';
import rootReducer from './reducers/rootReducer';

//initialize store
let store = createStore(rootReducer);

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();

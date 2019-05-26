import React from 'react';
import reactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/styles';
import App from './containers/App';
import './styles/main.scss';
import rootReducer from './reducers/rootReducer';

// initialize store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

reactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StylesProvider>,
  document.getElementById('app'),
);

module.hot.accept();

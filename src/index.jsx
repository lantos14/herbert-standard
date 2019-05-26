import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StylesProvider } from '@material-ui/styles';
import App from './containers/App';
import configureStore from './store/configureStore';
import './styles/main.scss';

// initialize store
const store = configureStore();


reactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <App />
    </Provider>
  </StylesProvider>,
  document.getElementById('app'),
);

module.hot.accept();

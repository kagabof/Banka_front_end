import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import configureStore from './redux/configureStore';
import App from './containers/App';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/main.scss';

const store = configureStore();

toast.configure({
  autoClose: 8000,
  draggable: false,
});

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);

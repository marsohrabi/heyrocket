import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store, { history } from "./common/redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);


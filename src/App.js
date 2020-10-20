import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import configureStore from './redux/createStore'

import Routes from './routes';
const history = createBrowserHistory();
const initialState = {};
const store = configureStore(initialState, history);
console.log('=====> STORE: ', store);
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
)

export default App
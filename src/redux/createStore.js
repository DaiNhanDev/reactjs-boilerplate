/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './rootSaga';


export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  // const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    reducers(),
    initialState,
    composeEnhancers(...enhancers),
  );
  store.runSaga = sagaMiddleware.run(rootSaga);
  return store;
}
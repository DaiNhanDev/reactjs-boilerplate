import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import users from './reducers/users.reducer'
const history = createBrowserHistory();



 const reducers=()=> {
  const rootReducer = combineReducers({
    users,
    router: connectRouter(history),
  });

  return rootReducer;
}

export default reducers;
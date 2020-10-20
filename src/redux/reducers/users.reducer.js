import USERS from '../types/users.type'

const initialState = {
  users: [],
  loading: false,
  error: null
}

const users = (state = initialState, action) => {
  console.log('======> PAYLOAD: ', action.payload)
  switch (action.type) {
    case USERS.GET_USERS:
      return {
        ...state,
        loading: true
      };

    case USERS.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case USERS.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default users
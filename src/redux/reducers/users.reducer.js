import USERS from '../types/users.type'

const initialState = {
  users: [],
  loading: false,
  isError: false,
  error: null
}

const users = (state = initialState, action) => {
  console.log('======> PAYLOAD: ', action.payload)
  switch (action.type) {
    case USERS.GET_USERS:
      return {
        ...state,
        loading: true,
        isError: false,
      };

    case USERS.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        users: action.payload,
      };

    case USERS.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        isError: true,
        error: action.payload
      }

    default:
      return state;
  }
}

export default users
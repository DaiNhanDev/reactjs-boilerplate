import USERS from '../types/users.type'


const getUsers = payload => ({
  type: USERS.GET_USERS,
  payload
})

const getUsersSuccess = payload => ({
  type: USERS.GET_USERS_SUCCESS,
  payload
})

const getUsersFailed = payload => ({
  type: USERS.GET_USERS_FAILED,
  payload
})

export {  getUsers, getUsersSuccess, getUsersFailed }


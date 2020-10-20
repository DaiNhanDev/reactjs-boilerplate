import { put, takeLatest } from 'redux-saga/effects'

import API from '../../services/API.services'

import USERS from '../types/users.type'

function* getUsersSaga(action) {
  try {
    const response = yield API.get('users');
    console.log('=======> JSON.parse(response.data)', response.data)
    yield put({
      type: USERS.GET_USERS_SUCCESS, payload: response.data
    })

  } catch (e) {
    yield put({
      type: USERS.GET_USERS_FAILED, payload: e.response
    })
  }
}



export default function* geatUsers() {
  yield takeLatest(USERS.GET_USERS, getUsersSaga);
}
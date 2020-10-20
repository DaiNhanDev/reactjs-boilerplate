import { all } from 'redux-saga/effects'

import getUsersSaga from './sagas/usersSaga'

export default function* rootSaga() {
  yield all([
    getUsersSaga(),
  ]);
}
import axios from 'axios'
import {
  prop,
  path,
  // assoc,
  compose,
  pluck,
  pathOr
} from 'ramda'
// import { isString } from 'ramda-adjunct'

const BASE_URL = 'https://5f8e87d6693e730016d7a1fd.mockapi.io/mockapi/';

const requestConfig = {
  baseURL: BASE_URL,
  timeout: 30000, // 30s
}

const transformResponse = (response) => {
  const data = prop('data')(response)
  const status = prop('status')(response)

  console.log('RES: ', response)

  const serverDateTime = path(['headers', 'date'], response)
  console.log('serverDateTime: ', serverDateTime)

  // if (isString(data)) {
  //   return {
  //     data,
  //     serverDateTime
  //   }
  // }

  // return assoc('serverDateTime', serverDateTime, data)

  return {
    status,
    data
  }
}

const transformError = (e) => {

  const getErrors = () => {
    if (!e.response || e.code === 'ECONNABORTED') {
      return ['TIMED_OUT']
    }

    return compose(
      pluck('code'),
      pathOr([{ code: 'INVALID_FORMAT' }], ['response', 'data', 'errors'])
    )(e)
  }
  const newError = {
    ...e,
    response: {
      data: getErrors()
    }
  }

  return Promise.reject(newError)
}


const request = axios.create(requestConfig)

request.interceptors.response.use(transformResponse, transformError)

export default request;

import { connect } from 'react-redux'
import {
  compose,
  withHandlers
} from 'recompose'

import { getUsers } from '../../redux/actions/users.action'

import Dashboard from './Dashboard'

const handlers = {
}

const mapStateToProps = (state) => {
  console.log(`=====> STATE: ${JSON.stringify(state)}`);
  return ({
    loading: state.users.loading,
    users: state.users.users
  })
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: (type = '') => dispatch(getUsers(type))
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
)(Dashboard)
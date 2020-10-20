import React, { useEffect } from 'react'
import {
  isEmpty
} from 'ramda';

const Dashboard = (props) => {
  const { users, getUsers } = props

  useEffect(() => {
    if (isEmpty(users))
      getUsers();
  }, [getUsers, users]);

  return (<div>
    nhan
  </div>);
}

export default Dashboard;
import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../store/actions';

const Users = (props: any) => {
  const {users, getUsers, loading} = props;

  return (
    <Fragment>
    <h3>users</h3>
    <button onClick={()=>getUsers()}>GET USERS</button>
    {loading ? <h1>LOADING ----</h1> :
    users.length ? users.slice(0,2).map((user: any)=>(<div>{user.name}</div>)):''}
    </Fragment>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users.users,
  loading: state.users.isLoadung
});

const mapDispatchToProps = (dispatch: any)=> ({
  getUsers: ()=>dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
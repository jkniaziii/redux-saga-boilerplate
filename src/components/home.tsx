import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Counter from './counter';
import Users from './users';

const Home = ()=>{
  return (
    <div>
      <h1>HOME COMPONENT</h1>
      <Link to='user'>USERS</Link>
      <h2 style={{textAlign: 'left'}}>COUNTER:</h2>
      <Counter/>
      <h2 style={{textAlign: 'left'}}>USERS:</h2>
      <Users/>
    </div>
  )
}

export default Home;
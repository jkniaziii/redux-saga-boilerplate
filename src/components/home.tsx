import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './counter';
import Users from './users';

const Home = ()=>{
  return (
    <div>
      <h1>HOME COMPONENT</h1>
      <h2 style={{textAlign: 'left'}}>COUNTER:</h2>
      <Counter/>
      <h2 style={{textAlign: 'left'}}>USERS:</h2>
      <Users/>
    </div>
  )
}

export default Home;
import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addNumber, decrementer, incrementer } from '../store/actions';

const Counter = (props: any) => {
    const {count, increment, decrement, adder} = props;
  return (
    <Fragment>
    <button onClick={increment}>INCREMENT</button>
    <h3>counter : {count}</h3>
    <button onClick={decrement}>DECREMENT</button><br/>
    <input onChange={(e)=>adder(e.target.value)}/>
    </Fragment>
  )
}


const mapStateToProps = (state: any) => ({
    count: state.counter.count,
})
const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch(incrementer()),
    decrement: () => dispatch(decrementer()),
    adder: (data: any) => dispatch(addNumber(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

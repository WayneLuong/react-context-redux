import React from 'react';
import './App.css';
import { increment, decrement } from './actions/counterActions'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  //DISPATCH
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>Is Logged In: {isLogged ? <b>Yes Logged In</b> : ''}</div>
    </div>
  );
}

export default App;

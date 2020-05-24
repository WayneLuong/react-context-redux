import React from 'react';
import { GlobalProvider } from './Context/GlobalState'
import './App.css';

import AddTodo from './Components/AddTodo'
import TodosList from './Components/TodosList'

function App() {
  //USING OTHER LIBARIES

  return (
    <GlobalProvider>
      <div className="App">
        <h1>TODOS App</h1>
        <TodosList />
        <AddTodo />
      </div>
    </GlobalProvider>
  );
}

export default App;


/*Lifecycle method - runs after a render (ComponentDidMount)
useEffect(() => {
  console.log('running')
  return () => {
    // Clean up after component gets removed (ComponentWillUnmount)
    console.log('Clean up')
  };
}, [prop.source ]) */
  //Add a conditional for useEffect to fire e.g. specific object prop.source in changes
import React, { useRef } from 'react';
import logo from './logo.svg';
import { useWindowEvent } from './customHooks/GlobalEventListener'
import useEventListener from './customHooks/ElementEventListener'

import './App.css';

function App() {
  const ref1 = useRef(null)

  const handleEvent = event => {
    if (ref1.current && ref1.current.contains(event.target)) {
      console.log(ref1.current, event.target)
    }
  };

  //Handle event for that target element
  useEventListener('click', handleEvent)

  //Handle Global Event Listeners
  useWindowEvent('keydown', () => console.log('GLOBAL CLICK'))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={ref1}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
